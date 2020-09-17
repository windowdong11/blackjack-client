import React, { useState } from 'react'
import { LOGIN } from '../../httprequests/query'
import { setCookie } from '../../components/cookie/Cookie'
import { client } from '../../httprequests'
import AuthForm from '../../components/Auth/AuthForm'

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
        <AuthForm Title="Sign In" submitText="Sign In"
            id={id} setId={e => setId(e.target.value)}
            pw={pw} setPw={e => setPw(e.target.value)}
            handleSubmit={handleSubmit}
        ></AuthForm>
    )
}