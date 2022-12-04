import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const DarkModeContext = createContext();

export function DarkModeProvier({children}) {

    const [darkMode, setDarkmode] = useState(false);
    const toggleDarkMode = () => {
        setDarkmode(!darkMode);
        updateDarkMode(!darkMode);
    }

    useEffect(()=>{
        const isDark = 
        localStorage.theme === 'dark' || 
        (!('theme' in localStorage) 
        && window.matchMedia('(prefers-color-scheme: dark)').matches); 

        setDarkmode(isDark);
        updateDarkMode(isDark);
    }, []);

    return  <DarkModeContext.Provider value={{ darkMode, toggleDarkMode}}>
                {children}
            </DarkModeContext.Provider>
}

function updateDarkMode (darkMode) {
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}

export const useDarkMode = () => useContext(DarkModeContext);