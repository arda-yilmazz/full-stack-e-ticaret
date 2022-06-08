import { useAppContext } from "contexts/MainContext";

const Home = () => {

    const { user } = useAppContext();

    return (
        <>
            <h1>Home</h1>

            <h4>{user && `Hoşgeldin ${user.user_email}`}</h4>
        </>
    )
}

export default Home;