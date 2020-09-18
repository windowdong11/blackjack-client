import React, { Children, Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getCookie } from '../components/cookie/Cookie'
import links from '../Links'


export default (props) => {
    if(getCookie('token') == '')
        return(
            <Redirect to={links.signin} />
        )
    else return(
        <Route {...props}>{props.children}</Route>
    )
}