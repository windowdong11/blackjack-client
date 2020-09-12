import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    background: linear-gradient(#5C6BC0,#EC407A);
    border-radius: 20px;
    overflow:hidden;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content:space-around;
    font-size : 3rem;
    color: white;
    background: linear-gradient(30deg,#FFFDE7 ,#9575CD 80%);
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const ChildWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 2em;
`


export default ({ children, Title }) => {
    return (
        <Wrapper>
            <TitleWrapper>{Title}</TitleWrapper>
            <ChildWrapper>{children}</ChildWrapper>
        </Wrapper>
    )
}