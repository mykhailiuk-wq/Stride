export default function HabitConsistency({ habit }) {
    const totalDays = new Date(habit.endDate) - new Date(habit.startDate);
    const completedDays = habit.completedDays;
    const percentage = completedDays / (totalDays / (1000 * 60 * 60 * 24)) * 100;
    
    return (
        <div className="flex flex-col w-full h-fit items-baseline gap-2 border border-gray-300 rounded-md p-3 transition-colors">
            <p className="text-sm font-normal">Habit Consistency</p>
            <p className="text-4xl text-blue-500 font-bold">{Math.round(percentage)}%</p>
        </div>
    );
}