import { gql } from '@apollo/client'


const REGISTER = gql`
    mutation register($id: String!, $pw: String!){
        register(id: $id, pw: $pw){
            code
        }
    }
`
const LOGOUT = gql`
    mutation logout{
        code
    }
`

const ONETIME = gql`
    mutation onetime($input : OneTime!){
        onetime(input: $input){
        code
        }
    }
`