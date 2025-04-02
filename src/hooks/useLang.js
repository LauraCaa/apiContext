import { useState } from "react";

// Set the default language to the value stored in localStorage, or "en" if not found
const defaultLanguage = localStorage.getItem("lang") || "en";

export default function useLang() {
    // Initialize the lang state with the default language
    const [lang, setLang] = useState(defaultLanguage);

    // Function to toggle between "en" (English) and "us" (could represent another variant or language)
    const changeLang = () => {
        setLang(currentLang => (currentLang === "en" ? "us" : "en"));
    };

    // Return the current language and the function to change it
    return { lang, changeLang };
}
