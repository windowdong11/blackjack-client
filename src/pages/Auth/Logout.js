import React from 'react'
import { useMutation } from '@apollo/client'
import { LOGOUT } from '../../httprequests/mutation'
import { Redirect } from 'react-router-dom'
import { removeCookie } from '../../components/cookie/Cookie'


export default () => {
    const { loading, error} = useMutation(LOGOUT)
    if(loading) return 'Loading...';
    if(error) return `Error! ${error.message}`
    removeCookie('token')
    window.location="/"
    return null
}