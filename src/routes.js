import About from "./Pages/About";
import Index from "./Pages/Index";

export default function routes() {
    return [
        {
            path: "/",
            element: <Index />,
        },
        {
            path: "/about",
            element: <About />,
        },
    ]
}