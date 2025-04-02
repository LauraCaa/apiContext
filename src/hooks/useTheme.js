import { useState } from "react";

// Set the default theme to the value stored in localStorage, or "white" if not found
const defaultTheme = localStorage.getItem("theme") || "white";

const useTheme = () => {
    // Initialize the theme state with the default theme
    const [theme, setTheme] = useState(defaultTheme);
    
    // Function to toggle between "white" and "dark" theme
    const changeTheme = () => {
        setTheme(currentTheme => currentTheme === "white" ? "dark" : "white");
    };

    // Return the current theme and the function to change it
    return { theme, changeTheme };
};

export default useTheme;
