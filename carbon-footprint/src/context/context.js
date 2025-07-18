import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [landing, setlanding] = useState("home");

    const changeLanding = (land) => {
        setlanding(land);
    };

    return (
        <Context.Provider value={{ landing, changeLanding }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider };
export default Context;
