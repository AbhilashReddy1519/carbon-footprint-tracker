import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./Components/landing";
import { ContextProvider } from "./context/context";

let router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: '/what',
        element: <Landing />
    },
    {
        path: '/login',
        element: <Landing />
    },
    {
        path: '/signup',
        element: <Landing />
    },
]);

function App() {
    return (
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    );
}

export default App;
