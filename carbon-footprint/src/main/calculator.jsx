import { useContext } from "react";
import Header from "./header";
import Home from "./home";
import "./main.css"
import Context from "../context/context";
import Reduce from "./reduce";

const Calculator = () => {
    const { main } = useContext(Context);

    const renderComponent = () => {
        switch(main) {
            case 'home':
                return <Home />
            case 'reduce':
                return <Reduce />
            default:
                return null;
        }
    }

    return (
        <>
            <Header />;
            {renderComponent()};
        </>
    );
};

export default Calculator;
