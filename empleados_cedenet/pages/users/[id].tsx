import { NextPage } from "next";
import { useRouter } from "next/router";
import FormEditUser from "../../app/components/form_edit_user/form"
import {DataUpdateUser} from "../../interfaces/users"

export type UserProps = {
    user?: DataUpdateUser
}

const EditUser:NextPage<any>= ({user}) => {
    const router = useRouter();
    const {id} = router.query;
    return <FormEditUser user={user} method="PATCH" />
}

EditUser.getInitialProps = async (ctx) => {
    let data = await fetch(`http://localhost:8000/api/v1/user/${ctx.query.id}`, {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
          Accept: "application/json; charset=UTF-8",
        },
      } );
    let users_data = await data.json()
    return {user:users_data.data}
}

export default EditUser