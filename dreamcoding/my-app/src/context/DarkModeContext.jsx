import { useState } from "react";
import { createContext } from "react";

// 데이터를 담는 부분
export const DarkModeContext = createContext();

// 데이터를 씌우는 우산 
export function DarkModeProvider({children}) {

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);

    return (
        // 하단과 같이 props로 넘기면 자식이 사용가능하다 - Provider로 감싸서 넘긴다
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}