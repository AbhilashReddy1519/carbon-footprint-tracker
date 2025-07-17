import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./Components/landing";

let router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
