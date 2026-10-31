//vite-project\web\components\Habit.jsx
import { useState } from "react"

export default function Habit({name, frequency}){
    const [isDone, setIsDone] = useState(false);

    function HandleClick(){
        setIsDone(!isDone);
        console.log(`Habit "${name}" is now ${!isDone ? 'done' : 'not done'}!`);
    }
    
    return (
        <div className="flex w-full h-fit items-center gap-3 p-3 cursor-pointer border border-gray-300 rounded-md hover:border-blue-500 transition-colors">
            <input type="checkbox" checked={isDone} onChange={HandleClick} className="h-4 w-4 shrink-0 stroke-black hover:stroke-blue-500 cursor-pointer"/>
            <p className={`align-baseline font-normal flex-1 sm:flex-none truncate sm:truncate-none ${isDone ? 'line-through text-gray-500' : 'text-black'}`}>{name}</p>
            <p className="align font-normal text-gray-500 text-sm sm:text-base">{frequency}</p>
        </div>
    )
}