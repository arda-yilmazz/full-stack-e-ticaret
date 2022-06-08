/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useAppContext } from 'contexts/MainContext';
import 'styles/popup.scss'

const Login = ({ setOpen, setName }) => {

    const { login } = useAppContext();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="popup-container">
            <div className="popup">
                <form onSubmit={e => e.preventDefault()}>
                    <div className="header">
                        <h1>Giriş Yap</h1>
                        <button type="button" onClick={() => setOpen(false)}>X</button>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <label htmlFor="email">E-posta</label>
                                <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="E-posta" />
                            </li>
                            <li>
                                <label htmlFor="password">Şifre</label>
                                <input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Şifre" />
                            </li>
                            <li>
                                <button type="submit" onClick={() => login({ email, password })}>Giriş Yap</button>
                            </li>
                            <div className="not">
                                <li>
                                    <a href="#" onClick={e => e.preventDefault()}>Şifremi Unuttum</a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        setName('register')
                                    }}>Zaten hesabım var</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;