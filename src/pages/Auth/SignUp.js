import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { REGISTER } from '../../httprequests/mutation'
import AuthForm from '../../components/Auth/AuthForm'

export default function SignUp(props) {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')


    const [register] = useMutation(REGISTER)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log()
        register({ variables: { id: id, pw: pw } })
            .then(result => {
                const responseCode = result.data.register.code
                switch (responseCode) {
                    case 200:
                        alert("성공적으로 가입했습니다")
                        window.location = '/'
                        break
                    case 409:
                        alert("가입에 실패했습니다.\n동일한 아이디가 존재합니다.")
                        break
                    case 411:
                    case 412:
                        alert("아이디 또는 비밀번호가 규칙에 맞지 않습니다.\n" +
                            "아이디는 5글자 이상, 영문(대/소문자) 및 숫자로 이루어질 수 있고,\n" +
                            "비밀번호는 7글자이상, 영문(대/소문자), 숫자, 특수기호(!@#$%^&*()_-=+~`./,;)로 이루어질 수 있습니다.")
                        break
                    case 403:
                    default:
                        alert("알수없는 오류입니다.\n다시 시도해주세요.")
                        break
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <AuthForm Title="Sign Up" submitText="Sign Up"
            id={id} setId={e => setId(e.target.value)}
            pw={pw} setPw={e => setPw(e.target.value)}
            handleSubmit={handleSubmit}
        ></AuthForm>
    )
}