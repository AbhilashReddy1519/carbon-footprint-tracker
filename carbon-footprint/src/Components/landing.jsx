import { useContext } from "react";
import Home from "../screens/home";
import Footer from "./footer";
import Header from "./header";
import Context from "../context/context";
import What from "../screens/what";
import Login from "../userSetup/login";
import SignupPage from "../userSetup/SignUp";

const Landing = () => {
    const { landing } = useContext(Context);

    const renderComponents = () => {
        switch(landing) {
            case 'home':
                return <Home />;
            case 'what':
                return <What />;
            case 'login':
                return <Login />;
            case 'signup':
                return <SignupPage />;
            default:
                return null;
        }
    };

    return (
        <>
            <Header />
            {renderComponents()}
            <Footer />
        </>
    );
};

export default Landing;
