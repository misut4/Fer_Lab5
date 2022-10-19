import Homepage from "../pages/Homepage/Homepage";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";
import ThemeLayout from "../HOC/ThemeLayout";
export const appRoutes = [
    {
        path: "/",
        component: <ThemeLayout Component={Homepage} />,
    },
    {
        path: "/about",
        component: <ThemeLayout Component={About} />,
    },
    {
        path: "/portfolio",
        component: <ThemeLayout Component={Portfolio} />,
    },
];
