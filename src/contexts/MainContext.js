import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();


export function Wrapper({ children }) {

    const [user, setUser] = useState(localStorage.getItem('_user') ?? null);
    const [token, setToken] = useState(localStorage.getItem('_token') ?? null)
    const navigate = useNavigate();

    const login = ({ email, password }) => {
        fetch('http://localhost:3001/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                setToken(data.token);
                localStorage.setItem('_user', JSON.stringify(data.user));
                localStorage.setItem('_token', data.token);
                window.location.reload();
                navigate('/profil');

            })
    }

    const data = {
        user: JSON.parse(user),
        token,
        setUser,
        setToken,
        login,
    }

    return (
        <AppContext.Provider value={data}>{children}</AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}