import React from 'react'
import AuthButton from '../../components/Auth/AuthButton'
import AuthWrapper from '../../components/Auth/AuthWrapper'
import InputwithLabel from '../../components/InputwithLabel'

export default () => {
    const handleClick = () => console.log('Sign Up')
    return (
        <AuthWrapper Title="Sign Up">
            <InputwithLabel label="ID"></InputwithLabel>
            <InputwithLabel label="PW"></InputwithLabel>
            <AuthButton onClick={handleClick}>Sign Up</AuthButton>
        </AuthWrapper>
    )
}