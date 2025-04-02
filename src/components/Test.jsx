import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Test({ children }) {
    // Access the current data from ThemeContext (which includes theme and changeTheme)
    const data = useContext(ThemeContext);

    // Log the context data to the console to inspect its contents
    console.log("data 2:", data);

    return (
        // Render the children passed to this component
        <div>{children}</div>
    );
}
