import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./Components/landing";
import { ContextProvider } from "./context/context";
import Calculator from "./main/calculator";

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
    {
        path: '/calculator',
        element: <Calculator />
    }
]);

function App() {
    return (
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    );
}

export default App;
