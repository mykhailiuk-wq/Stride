import CustomInput from "../Common/CustomInput";
import CustomButton from "../Common/CustomButton";
import { useState } from "react";
import { saveTask } from "../../api/tasks";

export default function TaskInput(isVisible = true) {
    const [name, setName] = useState("");
    const [deadline, setDeadline] = useState(new Date().toISOString().split("T")[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`'${name}: ${deadline}' task added`);
        isVisible = false;
    };

    if (!isVisible) {
        return null;
    } else {    
        return (
            <form onSubmit={handleSubmit} className="flex flex-row gap-4 items-end">
                <div className="flex flex-col gap-1 w-full">
                    <p className="text-xs sm:text-base shrink-0 font-normal text-gray-500">Task Name</p>
                    <CustomInput
                        type="text"
                        name="name"
                        placeholder="Task name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border h-4 border-gray-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <p className="text-xs sm:text-base shrink-0 font-normal text-gray-500">Task Deadline</p>
                    <CustomInput
                        placeholder="DD/MM/YYYY"
                        type="date"
                        name="deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="border w-full h-4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <CustomButton
                    buttonText="Add Task"
                    type="submit"
                    isVisible={true}
                    width="min"
                    onClick={handleSubmit}
                >
                    Add Task
                </CustomButton>
            </form>
        );
    }  
}