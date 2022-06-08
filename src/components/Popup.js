import Login from "./Popup/Login";
import Register from "./Popup/Register";

const Popup = ({ name, setOpen, setName }) => {
    return (
        <>
            {name === "login" && <Login setOpen={setOpen} setName={setName} />}
            {name === "register" && <Register setOpen={setOpen} setName={setName} />}
        </>
    )
}

export default Popup;