import React from 'react'
import AuthButton from '../../components/Auth/AuthButton'
import AuthWrapper from '../../components/Auth/AuthWrapper'
import InputwithLabel from '../../components/InputwithLabel'
import styled from 'styled-components'

const Form = styled.form`
    width: 100%;
    max-width: 400px;
`

export default props => {
    return (
        <AuthWrapper Title={props.Title}>
            <Form onSubmit={props.handleSubmit}>
                <InputwithLabel name="id" label="ID"
                    onChange={props.setId} value={props.id} />
                <InputwithLabel name="pw" label="PW"
                    onChange={props.setPw} value={props.pw} />
                <AuthButton type="submit">{props.submitText}</AuthButton>
            </Form>
        </AuthWrapper>
    )
}