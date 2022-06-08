/* eslint-disable jsx-a11y/anchor-is-valid */
import 'styles/popup.scss'

const Register = ({ setName, setOpen }) => {
    return (
        <div className="popup-container">
            <div className="popup">
                <form onSubmit={e => e.preventDefault()}>
                    <div className="header">
                        <h1>Kayıt Ol</h1>
                        <button type="button" onClick={() => setOpen(false)}>X</button>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <label htmlFor="email">E-posta</label>
                                <input type="email" id="email" name="email" placeholder="E-posta" />
                            </li>
                            <li>
                                <label htmlFor="password">Şifre</label>
                                <input type="password" id="password" name="password" placeholder="Şifre" />
                            </li>
                            <li>
                                <button type="submit">Kayıt Ol</button>
                            </li>
                            <div className="not">
                                <li>
                                    {/* <button>Zaten hesabım var</button> */}
                                    <a onClick={() => setName("login")}>Zaten hesabım var</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;