export default function TaskPercentage({ tasks }) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const percentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    return (
        <div className="flex flex-col w-full h-fit items-baseline gap-2 border border-gray-300 rounded-md p-3 transition-colors">
            <p className="text-sm font-normal">Task Completion</p>
            <p className="text-4xl text-blue-500 font-bold">{Math.round(percentage)}%</p>
        </div>
    );
}