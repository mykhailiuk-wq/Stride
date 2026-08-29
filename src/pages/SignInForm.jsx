//vite-project\src\components\SignInForm.jsx

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { loadUsers } from "../api/users";
import CustomButton from "../components/Common/CustomButton";
import GoogleAccount from "../components/Common/GoogleAccount";

export default function SignInForm(){

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-white p-4">
            <form className="flex w-full max-w-2xl flex-col gap-5 rounded-3xl bg-white p-6">
                <h1 className="text-3xl font-bold text-center">Sign in with Google</h1>
                <div className="flex w-full flex-col gap-3">
                    <GoogleAccount accountName={"Віталій Михайлюк"} email={"VitaliiMykhailiuk@gmail.com"} />
                    <GoogleAccount accountName={"Софія Горб"} email={"SofiaHorb@gmail.com"} />
                    <GoogleAccount accountName={"Роман Скічко"} email={"RomanSkichko@gmail.com"} />
                    <GoogleAccount accountName={"Дмитро Білокопитий"} email={"DmytroBilokopytyi@gmail.com"} />
                </div>
            </form>
        </div>
    )
}