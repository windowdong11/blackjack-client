import { gql, useMutation } from '@apollo/client';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

const LOGOUT = gql`
mutation LogoutMutation {
    logout
}
`

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(localStorage.getItem('token') ? true : false)
    const [logoutMutation, logoutResult] = useMutation(LOGOUT)
    const login = (/*id, pw*/) => {
        // id, pw를 이용한 로그인, 리턴값 반환
        setUser(true)
    }

    const register = (/*id, pw */) => {
        // id, pw등 정보를 이용한 회원가입, 리턴값 반환
    };

    const logout = () => {
        // 로그아웃, 리턴값 반환
        logoutMutation()
        return logoutResult || {
            called : logoutResult.called,
            client : logoutResult.client,
            data : logoutResult.data,
            error : logoutResult.error,
            loading : logoutResult.loading
        }
    };
    useEffect(() => {
        if (logoutResult.data?.logout) {
            localStorage.removeItem('token')
            setUser(false)
        }
    }, [logoutResult.data])

    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    // Return the user object and auth methods
    return {
        user,
        login,
        register,
        logout,
    };
}