import React, { createContext, useEffect } from "react";
import useLang from "../hooks/useLang";

// Create the language context
const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
    // Use the custom hook to manage language state and change function
    const { lang, changeLang } = useLang();

    // Store the selected language in localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    return (
        // Provide the language state and change function to the entire application
        <LangContext.Provider value={{ lang, changeLang }}>
            {children}
        </LangContext.Provider>
    );
};

export default LangContext;
