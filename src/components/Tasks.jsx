//vite-project\src\components\Tasks.jsx

import Task from "./Task";
import CustomButton from "./CustomButton"
import { loadTasks } from "../api/tasks";
import TaskInput from "./TaskInput";
import { useState } from "react";

export default function Tasks({ tasks = loadTasks(), onTaskToggle = () => {} }){
    const [showTaskInput, setShowTaskInput] = useState(false);

    const createNewTask = (deadline, name) => {
        console.log("Creating new task...", deadline, name);
        setShowTaskInput(true);
    };

    return (
        <div className="flex flex-col w-full gap-3 rounded pt-4">
            <p className="text-gray-500">My tasks</p>
            {tasks.map(task => (
                <Task 
                    key={task.id}
                    name={task.name} 
                    deadline={task.deadline}
                    isDone={task.isDone}
                ></Task>
            ))}
            <CustomButton width={"max"} onClick={() => createNewTask(null, "")} buttonText={"Add new task"} variant="filled"></CustomButton>
            {showTaskInput && <TaskInput />} 
        </div>
    )
}