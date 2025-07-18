import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [landing, setlanding] = useState("home");

    const changeLanding = (land) => {
        setlanding(land);
    };

    const [main, setMain] = useState("home");

    const changeMain = (ele) => {
        setMain(ele);
    }

    return (
        <Context.Provider value={{ landing, main, changeLanding , changeMain}}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider };
export default Context;
