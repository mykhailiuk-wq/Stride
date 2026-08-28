// vite-project\src\components\Header.jsx
// vite-project\src\assets\logo.svg

import CustomLink from "./CustomLink";


export default function Header() {
    return (
        <nav className="flex sticky items-center mx-auto w-full max-w-7xl justify-between gap-2 border-gray-300 bg-white px-4 py-4 border-b">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
                <img src="public/logo.svg"  className="h-6 w-6" />
                <p className="font-semibold text-md text-black">Stride</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <CustomLink to="/tasks">Tasks</CustomLink>
                <CustomLink to="/tasks">Habits</CustomLink>
                <CustomLink to="/tasks">Notes</CustomLink>
                
            </div>
            <div className="flex flex-row items-center gap-2">
                <CustomLink className="bg-blue-500 hover:text-white text-white transition-all duration-300 ease-in-out hover:bg-blue-400" to="/">Log in</CustomLink>
                <CustomLink className="border border-blue-500 text-blue-500 transition-all duration-300 ease-in-out font-normal hover:border-blue-300 hover:text-blue-300" to="/signin">Sign in</CustomLink>
            </div>
        </nav>
    );
}