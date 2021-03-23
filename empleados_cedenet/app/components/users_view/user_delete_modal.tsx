import { Router, useRouter } from "next/router"
import React from "react"
import { Button, Header, Modal } from "semantic-ui-react"

export type DeleteProps = {
    id?: number
    nombre?: string
}


const DeleteUser:React.FC<DeleteProps> = ({id, nombre}) => {
    const router = useRouter()
    const [open, setOpen] = React.useState(false)
    const handleDelete = async () => {
        let url = `http://localhost:8000/api/v1/user/${id}`
        const response = await fetch(url, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          });
        window.location.replace('')
        setOpen(false)
        
    }
    return (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
     
    
         trigger={<Button basic color="red" >Eliminar</Button>}
        >
          <Modal.Header>Eliminar</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>{nombre}</Header>
              <p>
                Esta Seguro que desea eliminar el usuario {nombre} con el id: {id} ?
              </p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={() => setOpen(false)}>
              No
            </Button>
            <Button
              content="SI"
              labelPosition='right'
              icon='checkmark'
              onClick={() => handleDelete()}
              negative
            />
          </Modal.Actions>
        </Modal>
      )
}


export default DeleteUser