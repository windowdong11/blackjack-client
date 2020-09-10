import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Nav = styled.nav`
    background-color: black;
    color: chocolate;
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled(Link)`
    font-family: fantasy;
    font-size: xxx-large;
    margin: 8px 12px;
    color: inherit;
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
    color: inherit;
`

export default ((props) => {
    return (
        <Nav>
            <Title to="/">Blackjack</Title>
            <PageList>
                <PageItem><PageItemLink to="/login">Login</PageItemLink></PageItem>
                <PageItem><PageItemLink to="/logout">Logout</PageItemLink></PageItem>
            </PageList>
        </Nav>
    )
})