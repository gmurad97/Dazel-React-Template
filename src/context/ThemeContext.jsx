import { useState, createContext } from "react";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        "is_sidebar_collapsed": false
    });

    const toogleSidebar = () => {
        setTheme((prev) => ({
            ...prev,
            "is_sidebar_collapsed": !prev.is_sidebar_collapsed
        }));
    }

    return (
        <ThemeContext.Provider value={{ theme, toogleSidebar }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };