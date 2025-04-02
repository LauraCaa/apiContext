import ThemeContext from "../context/ThemeContext";
import LangContext from "../context/LangContext";
import React, { useContext } from "react";

export default function Main() {
    // Access the current theme and the function to change it from ThemeContext
    const { theme, changeTheme } = useContext(ThemeContext);
    
    // Access the current language from LangContext
    const { lang } = useContext(LangContext);

    return (
        <div>
            {/* Display the main section heading */}
            <h1>Main</h1>
            
            {/* Display the current theme */}
            <p>Theme: {theme}</p>
            
            {/* Display the current language */}
            <p>Language: {lang}</p>
            
            {/* Button to trigger the theme change */}
            <button onClick={changeTheme}>Change</button>
        </div>
    );
};
