import { gql } from "@apollo/client"

const LOGIN = gql`
    query login($id: String!, $pw: String!){
        code
        token
    }
`

export {LOGIN}