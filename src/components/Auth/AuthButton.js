import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 100%;
    border: none;
    outline: none;

    line-height: 2.5rem;
    font-size: 1.2rem;

    margin-top: 1rem;

    padding-left : 0.5rem;
    padding-right : 0.5rem;

    background : linear-gradient(to right,#9c27b078,#673ab7f0);

    padding-top: 1rem;
    padding-bottom: 1rem;

    width: 100%;
    
    text-align: center;
`

export default (props) => {
    const {children, ...restprops} = props
    return(
        <Button {...restprops}>{children}</Button>
    )
}