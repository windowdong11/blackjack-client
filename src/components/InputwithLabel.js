import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    & + &{
        margin-top: 1rem;
    }
`

const Label = styled.label`
    position: absolute;
    top: 1.6rem;
`

const Input = styled.input`
    width: 100%;

    margin-top: 1rem;

    border: none;
    border-bottom: 2px solid gray;
    outline: none;

    padding-left : 0.5rem;
    padding-right : 0.5rem;
    background-color: transparent;

    line-height: 2.5rem;
    font-size: 1.2rem;

    :focus, &.focus-input{
        border-image: linear-gradient(90deg, #FFFDE7 ,#e91ecc);
        border-image-width : 0px 0px 4px 100%;
    }
    :focus + Label, &.focus-input + Label{
        transform: translateY(-1.8rem);
    }
`

export default ({label, ...rest}) => {
    const [value, setValue] = useState('');
    return (
        <Wrapper>
            <Input {...rest} onChange={e => setValue(e.target.value)} className={value ? 'focus-input' : ''}></Input>
            <Label>{label}</Label>
        </Wrapper>
    )
}