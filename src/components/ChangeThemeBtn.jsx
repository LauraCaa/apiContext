import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LangContext from "../context/LangContext";

const ChangeThemeBtn = () => {
    // Access the current theme and the function to change it from ThemeContext
    const { theme, changeTheme } = useContext(ThemeContext);
    
    // Access the current language from LangContext
    const { lang } = useContext(LangContext);
    
    return (
        <div>
            {/* Display the current header */}
            <h1>Header</h1>
            
            {/* Display the current theme */}
            <p>Theme: {theme}</p>
            
            {/* Display the current language */}
            <p>Language: {lang}</p>
            
            {/* Button to trigger the theme change */}
            <button onClick={changeTheme}>Change</button>
        </div>
    );
}

export default ChangeThemeBtn;
