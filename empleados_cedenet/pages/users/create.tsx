import { NextPage } from "next";
import { Container } from "semantic-ui-react";
import FormEditUser from "../../app/components/form_edit_user/form"

const CreateUser:NextPage = () => {
    return (
        <Container>
            <FormEditUser user={{}} method="POST" />
        </Container>
    )
}

export default CreateUser