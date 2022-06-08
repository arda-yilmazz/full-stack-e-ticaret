import Categories from "views/Categories";
import Home from "views/Home";

export const routes = [
    {
        path: "/",
        component: Home,
        auth: false
    },
    {
        path: "/kategoriler",
        component: Categories,
        auth: false
    },
    {
        path: "/profil",
        component: () => <h1>ARDA</h1>,
        auth: true
    }
];
