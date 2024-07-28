import { useState, createContext } from "react";
import { LanguageCollection } from "../lang/LanguageCollection.jsx";

const LanguageContext = createContext(null);

const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState("en");

    const changeLanguage = (lang = "en") => {
        if (lang === "en" || lang === "ru" || lang === "az")
            setCurrentLanguage(lang);
        else
            setCurrentLanguage("en");
    }

    const getTranslate = (collectionWord) => {
        return LanguageCollection[collectionWord][currentLanguage];
    }

    return (
        <LanguageContext.Provider value={{ currentLanguage, changeLanguage, getTranslate }}>
            {children}
        </LanguageContext.Provider>
    );
}

export { LanguageContext, LanguageProvider };