import React, { useContext } from "react";
import LangContext from "../context/LangContext";

export default function Footer() {
    // Access the current language and the function to change it from LangContext
    const { lang, changeLang } = useContext(LangContext);
    
    return (
        <div>
            {/* Display the footer heading */}
            <h1>Footer</h1>
            
            {/* Display the current language */}
            <p>Language: {lang}</p>
            
            {/* Button to trigger the language change */}
            <button onClick={changeLang}>Change</button>
        </div>
    );
};
