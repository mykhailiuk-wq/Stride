import { useState } from "react"

export default function Task({ name, deadline }) {
    const [isDone, setIsDone] = useState(false);

    const handleClick = () => {
        setIsDone(!isDone);
    };

    return (
        <div className="flex w-full h-fit items-center gap-3 p-3 border border-gray-300 rounded-md hover:border-blue-500 transition-colors cursor-pointer">
            <input
                type="checkbox"
                checked={isDone}
                onChange={handleClick}
                className="h-4 w-4 shrink-0 cursor-pointer"
            />

            <p
                className={`font-normal flex-1 min-w-0 truncate ${
                    isDone ? "line-through text-gray-500" : "text-black"
                }`}
            >
                {name}
            </p>

            <p className="shrink-0 font-normal text-gray-500 text-sm sm:text-base">
                {deadline}
            </p>

            <button
                type="button"
                onClick={() => console.log("delete")}
                className="shrink-0 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-700 hover:text-opacity-100 transition-colors duration-100 cursor-pointer"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    className="w-full h-full"
                    role="img" 
                    aria-label="Видалити"
                >
                    <path d="M3 6h18" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /> 
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="10" y1="11" x2="10" y2="17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    <line x1="14" y1="11" x2="14" y2="17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
            </button>
        </div>
    )
}