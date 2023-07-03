import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";
import Comics from "./routes/Comics";
import Events from "./routes/Events";
import Characters from "./routes/Characters";
import Detail from "./routes/Detail"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "comics",
                element: <Comics />
            },
            {
                path: "comics/:id",
                element: <Detail />
            },
            {
                path: "events",
                element: <Events />
            },
            {
                path: "events/:id",
                element: <Detail />
            },
            {
                path: "characters",
                element: <Characters />
            }
        ]
    },

])

export default router