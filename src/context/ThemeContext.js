import { createContext, useEffect } from "react";
import useTheme from "../hooks/useTheme";

// Create the theme context
const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    // Use the custom hook to manage theme state and change function
    const { theme, changeTheme } = useTheme();

    // Store the selected theme in localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        //Provide the theme state and change function to the entire application
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
