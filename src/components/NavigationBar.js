import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import links from '../Links'


const Nav = styled.nav`
    background: linear-gradient(0deg, rgba(0,0,0, 1)-3%, rgba(0,0,0,0.1) 20%, transparent 35%),
                linear-gradient(190deg,black -10%,rgb(38 167 210 / 44%) 10%,rgba(15,24,27,0.5) 39%,rgba(20,10,10,0.2) 62%,rgba(30,10,10,0.5) 90%,black 100%);
    color: chocolate;
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled(Link)`
    font-family: fantasy;
    font-size: xxx-large;
    margin: 8px 12px;
    color: chocolate;
`

const PageList = styled.ul`
    list-style: none;
    display: flex;
    padding: 8px;
`
const PageItem = styled.li`
    margin-left: 10px;
`

const PageItemLink = styled(Link)`
    color: rgba(210,270,250,0.7);
`

export default ((props) => {
    return (
        <Nav>
            <Title to="/">Blackjack</Title>
            <PageList>
                <PageItem><PageItemLink to={links.signin}>Signin</PageItemLink></PageItem>
                <PageItem><PageItemLink to={links.signout}>SignOut</PageItemLink></PageItem>
                <PageItem><PageItemLink to={links.signup}>SignUp</PageItemLink></PageItem>
            </PageList>
        </Nav>
    )
})