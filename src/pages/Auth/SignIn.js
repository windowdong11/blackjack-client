import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import AuthButton from '../../components/Auth/AuthButton'
import AuthWrapper from '../../components/Auth/AuthWrapper'
import InputwithLabel from '../../components/InputwithLabel'

export default class SignUp extends React.Component {
    constructor(props) {
        super()
        this.state = {
            id: '',
            pw: ''
        }
    }
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <AuthWrapper Title="Sign In">
                <InputwithLabel name="id" label="ID"
                    onChange={this.handleInputChange} value={this.state.id} />
                <InputwithLabel name="pw" label="PW"
                    onChange={this.handleInputChange} value={this.state.pw} />
                <AuthButton onClick={this.handleClick}>Sign In</AuthButton>
            </AuthWrapper>
        )
    }
}