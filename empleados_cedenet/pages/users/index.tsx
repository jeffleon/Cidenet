import React, {useState} from "react"
import Layout from "../../app/components/layout"
import UserGrid from "../../app/components/users_view/users_grid"
import { Grid, Menu, GridColumn, Segment, Container, Header, Button, Input } from 'semantic-ui-react';
import { NextPage } from "next";
import { Router, useRouter } from "next/router";
import Home from "../../styles/Home.module.css";
import Technologies from "../../app/components/contributor/technologies"
import {DataUpdateUser} from "../../interfaces/users"

export type UserProps = {
    users_data?: Array<DataUpdateUser>
}

const Users: NextPage<UserProps> = ({users_data}) => {
    const [activeItem, setItem] = useState('users')
    var handleItemClick = (e, { name }) => setItem(name)
    
    let users_filter = users_data;
    let router = useRouter();
 
    
    return(
        <Layout>        
            <Container>
                <div className={Home.navbar}>
                    <Header as='h2'>Registo de Empleados</Header>
                    <div className={Home.push}>
                        <Button onClick={()=>router.push("/users/create")}  primary>Crear Usuario</Button>
                    </div>
                </div>
                <Grid>
                    <Grid.Column width={3} >
                        <Menu fluid vertical tabular>
                            <Menu.Item
                                name="users"
                                active={activeItem === 'users'}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                name="tecnologias"
                                active={activeItem === 'books'}
                                onClick={handleItemClick}
                            />
                        </Menu>
                    </Grid.Column>
                    <GridColumn stretched width={13}>
                        <Segment>
                            {activeItem === 'users'?<UserGrid users={users_filter}/>:<Technologies/>}
                        </Segment>
                    </GridColumn>
                </Grid>
            </Container>
        </Layout>
        
    )
}

export async function getStaticProps() {
    let data = await fetch("http://localhost:8000/api/v1/users", {
        method: "GET",
        headers: {
          // update with your user-agent
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
          Accept: "application/json; charset=UTF-8",
        },
      } );
    let response = await data.json()
    let users_data = response.data
    return {
        props: {
          users_data,
        },
      }
}

export default Users;