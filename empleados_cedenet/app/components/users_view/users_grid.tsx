import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {Card, Image, Icon, Grid, Button, Input} from "semantic-ui-react"
//import Images from "assets/NextPage.png"
import UserCard from "./user_card"
import {DataUpdateUser} from "../../../interfaces/users"
import { NextPage } from 'next'

export type UserProps = {
    users?: Array<DataUpdateUser>
}

const UsersGrid:NextPage<UserProps> = ({users}) => {
    
    return(
        <Grid width={2}>
            <Grid.Row>
                {users.map((element)=> <UserCard  user={element} key={element.ID} />)}
            </Grid.Row>
        </Grid>
    )
}



export default UsersGrid;