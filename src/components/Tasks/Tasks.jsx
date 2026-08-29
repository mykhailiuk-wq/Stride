//vite-project\src\components\Tasks.jsx

import Task from "./Task";
import CustomButton from "../Common/CustomButton"
import { loadTasks } from "../../API/tasks";
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
            <h2 className="font-semibold text-lg text-blue-500">My tasks</h2>
            {tasks.map(task => (
                <Task 
                    key={task.id}
                    name={task.name} 
                    deadline={task.deadline}
                    isDone={task.isDone}
                ></Task>
            ))}
            { !showTaskInput && <CustomButton width={"max"} onClick={() => createNewTask(null, "")} buttonText={"Add new task"} variant="filled"></CustomButton> }
            { showTaskInput && <TaskInput /> } 
        </div>
    )
}