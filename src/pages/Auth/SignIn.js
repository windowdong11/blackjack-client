import React, { useState } from 'react'
import AuthButton from '../../components/Auth/AuthButton'
import AuthWrapper from '../../components/Auth/AuthWrapper'
import InputwithLabel from '../../components/InputwithLabel'
import styled from 'styled-components'
import { LOGIN } from '../../httprequests/query'
import { setCookie } from '../../components/cookie/Cookie'
import { client } from '../../httprequests'

const Form = styled.form`
    width: 60%;
    max-width: 400px;
`

export default props => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        client.query({ query: LOGIN, variables: { id: id, pw: pw } })
            .then(result => {
                let response = result.data.login
                switch (response.code) {
                    case 200: // 로그인 정상처리
                        //localStorage.setItem("token", data.login.token)
                        setCookie("token", response.token, 12)
                        window.location = '/'
                        break
                    case 401: // 사용자를 찾을 수 없음
                        alert("아이디 또는 비밀번호를 확인해주세요.")
                        break
                    case 403:
                    default:
                        alert("알수없는 오류입니다.\n다시 시도해주세요.")
                        break
                }
            })
    }

    return (
        <AuthWrapper Title="Sign In">
            <Form onSubmit={handleSubmit}>
                <InputwithLabel name="id" label="ID"
                    onChange={e => setId(e.target.value)} value={id} />
                <InputwithLabel name="pw" label="PW"
                    onChange={e => setPw(e.target.value)} value={pw} />
                <AuthButton type="submit">Sign In</AuthButton>
            </Form>
        </AuthWrapper>
    )
}