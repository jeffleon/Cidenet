import React, { useEffect, useState } from "react"
import { Control, LocalForm } from "react-redux-form"
import { Button, Container, Form } from "semantic-ui-react"
import { DateTimeInput } from 'semantic-ui-calendar-react';
import { useRouter } from "next/router";
import Home from "../../../styles/Home.module.css";
import {DataUpdateUser} from "../../../interfaces/users"

export type UserProps = {
    user?: DataUpdateUser
    method?: string
}


const FormEditUser:React.FC<UserProps> = ({user, method}) => { 

    let Area:Array<string> = ["Administración", "Financiera", "Compras", "Infraestructura", "Operación,Talento","Humano Compras","Servicios Varios"]
    let TipoDocumento:Array<string> = ["Cédula de Ciudadanía", "Cédula de Extranjería", "Pasaporte", "Permiso Especial"]
    let Pais:Array<string> = ["Colombia", "Estados Unidos"]
    const id:number = user?.ID
    const router = useRouter()
    let [date, handleDateTime] = useState(method === "PATCH" ? user?.fecha_ingreso.toString(): "")
    
    const handleSubmit = async (user:any) => {
        
        let data = {...user, Fecha_ingreso: new Date(date)}
        
        let url = "http://localhost:8000/api/v1/user"
        url += method === "PATCH"? `/${id}`:"";
        const response = await fetch(url, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
        const res = await response.json()
        router.push("/users")
        return res
    }
    

    function handleDateClick(event, {name ,value}) {
        
        // Similar a this.setState({ fruit: 'orange' })
        handleDateTime(value);
    }
    
    return (
        <Container className={Home.page_header}>
            <h1>{method === "PATCH"?"Actualizar Usuario":"Crear Usuario"} {user.ID} </h1>
            <LocalForm model="user"
            onSubmit={(user) => handleSubmit(user)} >
                <Form>
                    <Form.Field>
                        <label>Primer Nombre: </label>
                        <Control.text
                            defaultValue={user.primer_nombre}
                            model="user.Primer_nombre" id="user.Primer_nombre"
                        />
                    </Form.Field>
                    <Form.Field>
                            <label>Otros Nombres: </label>
                            <Control.text
                                model="user.Otros_nombres"
                                id="user.Otros_nombres"
                                defaultValue={user.otros_nombres}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Primer Apellido</label>
                            <Control.text
                                model="user.Primer_apellido"
                                id="user.Primer_apellido"
                                defaultValue={user.primer_apellido}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Segundo Apellido: </label>
                            <Control.text
                                model="user.Segundo_apellido"
                                id="user.Segundo_apellido"
                                defaultValue={user.segundo_apellido}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Pais</label>
                            <Control.select 
                                model="user.Pais" 
                                id="user.Pais"
                                defaultValue={user.pais?user.pais:Pais[0]}
                            >
                                {Pais.map((element, index)=><option key={index} value={element}> {element} </option>)}
                            </Control.select>
                        </Form.Field>
                        <Form.Field>
                            <label>Tipo de Documento</label>
                            <Control.select 
                                model="user.Tipo_documento" 
                                id="user.Tipo_documento"
                                defaultValue={user.tipo_documento?user.tipo_documento:TipoDocumento[0]}    
                            >
                                {TipoDocumento.map((element, index)=><option key={index} value={element}> {element} </option>)}
                            </Control.select>
                        </Form.Field>
                        <Form.Field>
                            <label>Numero de Documento: </label>
                            <Control.text
                                model="user.Numero_identificacion"
                                id="user.Numero_identificacion"
                                defaultValue={user.numero_identificacion}
                            />
                        </Form.Field>
                    
                        <label>Area</label>
                        <Control.select 
                            model="user.Area" 
                            id="user.Area"
                            defaultValue={user.area?user.area:Area[0]}    
                        > 
                            {Area.map((element,index)=><option key={index} value={element}> {element} </option>)}
                        </Control.select>
                        <br/>
                        <label>Fecha de ingreso:</label>
                        <br/>
                        <DateTimeInput
                            localization='co'
                            name="dateTime"
                            placeholder="Date Time"
                            value={date}
                            iconPosition="left"
                            onChange={handleDateClick}
                        />
                        <br/>
                </Form>
                <Button floated="right" color="green"  type="submit">
                    {method === "PATCH"?"Actualizar":"Crear"} Usuario
                </Button>
            </LocalForm>
        </Container>
    )
}

export default FormEditUser;

