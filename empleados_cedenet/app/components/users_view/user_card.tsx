import React from 'react'
import {Card, Image, Icon, CardMeta, Button} from "semantic-ui-react"
import { useRouter } from 'next/router'
//import Images from "assets/NextPage.png"
import UserDeleteButton from "./user_delete_modal"
import {DataUpdateUser} from "../../../interfaces/users"

export type UserProps = {
  user?: DataUpdateUser
}

const UsersGrid:React.FC<UserProps> = ({user}) => {
  const router = useRouter()
  let fullname = `${user.primer_nombre} ${user.primer_apellido}`
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,id: number) => {
    e.preventDefault()
    router.push("/users/[id]",`/users/${id}`)
  }

  return (
    <Card >
      <Card.Content>
        <Card.Header>{fullname}</Card.Header>
        <Card.Meta>
          <Icon inverted color='green' name='check circle outline' floated='right' />
          <span className='date'>{user.area}</span>
        </Card.Meta>
        <Card.Description>
          {user.email}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
        {user.pais}
        <br/>
        <br/>
        <div className='ui two buttons'>
          <Button name={user.ID} onClick={(e)=>handleEdit(e,user.ID)} basic color='green'>
            Editar
          </Button>
          <UserDeleteButton id={user.ID} nombre={fullname} />
        </div>
      </Card.Content>
    </Card>
  )
}

export default UsersGrid;
