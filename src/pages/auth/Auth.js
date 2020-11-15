import React, { createContext, useContext, useState } from 'react'

export const isLogined = () => localStorage.getItem('token') ? true : false

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
    const login = (/*id, pw*/) => {
        // id, pw를 이용한 로그인, 리턴값 반환
        console.log("login")
        setUser(true)
    }

    const register = (/*id, pw */) => {
        // id, pw등 정보를 이용한 회원가입, 리턴값 반환
    };

    const logout = () => {
        // 로그아웃, 리턴값 반환
        localStorage.removeItem('token')
        console.log("logout")
        setUser(false)
    };

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