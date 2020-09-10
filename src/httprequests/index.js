import React from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: process.env.REACT_APP_SERVER,
    cache: new InMemoryCache()
})


export {client}