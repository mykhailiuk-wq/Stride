import { useEffect, useState } from "react";
import Tasks from "../components/Tasks";
import Calendar from "../components/Calendar";
import PieChart from "../components/PieChart";
import Histogram from "../components/Histogram";
import Habits from "../components/Habits";
import { loadTasks } from "../api/tasks";
import { toggleTask } from "../api/tasks";
import { useNavigate } from "react-router-dom";
import { createPortal } from 'react-dom';
import { Notes } from "../components/Notes";

export default function Dashboard(){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchTasks(){
            const data = await loadTasks();
            setTasks(data);
        }
        fetchTasks();
    }, []);

    const handleTaskToggle = (id) => {
        setTasks(currentTasks => toggleTask(currentTasks, id));
    };

    return (
        <div className="flex flex-col p-4 sm:p-6 md:p-8 gap-3 sm:gap-6">
            <div className="mx-auto w-full max-w-7xl">
                <h1 className="text-3xl sm:text-4xl font-bold">Dashboard</h1>
                <div className="grid grid-cols-1 gap-1 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="w-full">
                            <Tasks tasks={tasks} onTaskToggle={handleTaskToggle}></Tasks>
                        </div>
                        <div className="w-full">
                            <Calendar></Calendar>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="w-full">
                            <Habits></Habits>
                        </div>
                        <div className="w-full h-full flex justify-center lg:justify-start">
                            <PieChart tasks={tasks}></PieChart>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-6">
                    <Histogram tasks={tasks}></Histogram>
                </div>
                <div className="mt-4 sm:mt-6 w-full">
                    <Notes notes={[
                        { title: "Note 1", content: "This is the content of note 1" },
                        { title: "Note 2", content: "This is the content of note 2" },
                        { title: "Note 3", content: "This is the content of note 3" },
                    ]} />
                </div>
            </div>
        </div>
    );
}
