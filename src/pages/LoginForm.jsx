// vite-project\src\components\LoginForm.jsx

import { useState, useEffect } from "react";
import { loadUsers } from "../api/users";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import CustomLink from "../components/CustomLink";

export default function LoginForm(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState({});
    const [userIsFound, setUserIsfound] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUsers() {
            const data = await loadUsers();
            console.log(data);
            setUsers(data);
        }
        fetchUsers();
    }, []);

    function logIn(e) {
        e.preventDefault();

        const normalizedName = name.trim().toLowerCase();
        const user = users.find(user =>
            user.name.trim().toLowerCase() === normalizedName
        );

        if (user) {
            console.log(`User "${user.name}" is found`);
            navigate("/dashboard");
        } else {
            console.log(`User "${normalizedName}" is not found`);
        }
    }

    function logInWithGoogle(e) {
        e.preventDefault();

        const normalizedEmail = email.trim().toLowerCase();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const emails = Object.values(users).map(userEmail =>
            userEmail.toLowerCase()
        );

        if (!emailRegex.test(normalizedEmail)) {
            alert("Error: Email is not valid");
            return;
        }

        if (emails.includes(normalizedEmail)) {
            console.log("FOUND");
        } else {
            console.log("NOT FOUND");
        }
    }

    return (
        <form onSubmit={logIn} className="flex flex-col items-center justify-center min-h-screen p-4 gap-3">
        <h1 className="text-3xl font-bold">Log in</h1>
        <p className="text-gray-500">
            Please authorise for working in this space
        </p>


        <CustomInput
            inputType="text"
            placeholderText="Input your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <CustomButton
            type="submit"
            buttonText="Log in"
            variant="filled"
        />

        <p className="font-normal">Or</p>

        <CustomInput
            inputType="email"
            placeholderText="Input your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <CustomButton
            type="button"
            buttonText="Log in with Google"
            variant="outline"
            onClick={logInWithGoogle}
        />

        <div className="flex flex-col gap-0.5 items-center">
            <p>Don't have an account?</p>
            <Link
                to="/signin"
                className="text-blue-500 underline hover:text-blue-400 transition"
            >
                Sign in with Google
            </Link>
        </div>
        </form>
    );
}