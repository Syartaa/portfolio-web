"use client";

import { BsMoon, BsSun } from "react-icons/bs";

import { useTheme } from "@/context/ThemeContext";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className="fixed flex top-5 right-5 items-center justify-center w-[3rem] h-[3rem] bg-opacity-80 border border-white border-opacity-40 rounded-full shadow-2xl bg-white backdrop-blur-[0.5rem] hover:scale-[1.15] active:scale-105 sm:top-auto sm:bottom-5 transition-all dark:bg-gray-950" onClick={toggleTheme}>
            {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
    );
}
export default ThemeSwitch;