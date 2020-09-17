import { gql } from "@apollo/client"

const LOGIN = gql`
    query login($id: String!, $pw: String!){
        login(id: $id, pw: $pw){
            code
            token
        }
    }
`

export {LOGIN}