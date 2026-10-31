//vite-project\web\components\GoogleAccount.jsx

import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function GoogleAccount({accountName, email, avatarColor}){

    const navigate = useNavigate();

    function handleClick(e){
        e.preventDefault();
        navigate("/dashboard");
    }

    return ( 

        <div onClick={handleClick} className="flex w-full flex-row items-center gap-3 rounded-lg border border-gray-300 p-3 transition hover:border-blue-500 hover:fff cursor-pointer">
            <div className="bg-blue-500 h-12 w-12 shrink-0 rounded-full" />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="font-medium truncate">{accountName}</p>
                <p className="font-normal text-sm text-slate-600 truncate">{email}</p>
            </div>
        </div>
    )
}