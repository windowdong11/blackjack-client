import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FitImg from '../components/FitImg'

import cards_1280 from '../images/cards_1280.png'
import github_icon from '../images/GitHub-Mark-32px.png'

const MainImg = styled(FitImg)`
    display: block;

    max-width: 55%;

    margin-right: auto;
    margin-left:auto;

    background-color: white;
`

const MainContent = styled.div`

    align-items: center;
    
    width: 75%;

    padding-bottom: 2em;

    color : rgb(177 127 144);
    
    font-size: large;
    font-weight: bold;
    p {
        color: black;
    }
`

function Home() {
    return (
        <>
            <MainImg src={cards_1280}></MainImg>
            <MainContent>
                <h2>Welcome!</h2>
                <p>BlackJack Project</p>
                <a href='https://github.com/windowdong11/blackjack-client'>Front-end<img src={github_icon}></img></a>
                <br/>
                <a href='https://github.com/pukuba/blackjack-server'>Back-end<img src={github_icon}></img></a>
            </MainContent>
        </>
    )
}

export default Home