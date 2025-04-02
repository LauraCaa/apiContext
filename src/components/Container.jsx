import ChangeThemeBtn from "./ChangeThemeBtn";
import Main from "./Main";
import Footer from "./Footer";
import ThemeContext from "../context/ThemeContext";
import React, { useContext } from 'react';

export default function Container() {
    // Access the current theme value from ThemeContext
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`container ${theme}`}>
            {/* Render the ChangeThemeBtn component to allow theme switching */}
            <ChangeThemeBtn></ChangeThemeBtn>
            
            <hr />
            
            {/* Render the Main component */}
            <Main></Main>
            
            <hr />
            
            {/* Render the Footer component */}
            <Footer></Footer>
        </div>
    );
}
