import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Histogram({ tasks = [] }){
    const getLast10Days = () => {
        const days = [];
        const baseDate = new Date();
        baseDate.setHours(0, 0, 0, 0);

        for (let i = 9; i >= 0; i--) {
            const date = new Date(baseDate);
            date.setDate(baseDate.getDate() - i);
            days.push(date);
        }

        return days;
    };

    const getTasksCompletedPerDay = () => {
        const dayRange = getLast10Days();
        const data = Array(dayRange.length).fill(0);

        tasks.forEach((task) => {
            if (!task.isDone || !task.deadline) return;

            const [day, month, year] = task.deadline.split('/');
            const deadlineDate = new Date(year, month - 1, day);
            
            if (Number.isNaN(deadlineDate.getTime())) return;

            deadlineDate.setHours(0, 0, 0, 0);

            const dayIndex = dayRange.findIndex((day) => {
                const dayCopy = new Date(day);
                dayCopy.setHours(0, 0, 0, 0);
                return dayCopy.getTime() === deadlineDate.getTime();
            });

            if (dayIndex >= 0) {
                data[dayIndex] += 1;
            }
        });

        return data;
    };

    const labels = getLast10Days().map((day) => day.toLocaleDateString('uk-UA', { month: 'short', day: 'numeric' }));
    const tasksData = getTasksCompletedPerDay();

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Tasks Completed',
                data: tasksData,
                backgroundColor: '#3b82f6',
                borderColor: '#1e40af',
                borderWidth: 1,
                borderRadius: 4,
                hoverBackgroundColor: '#2563eb',
            },
        ],
    };

    const completedTasksCount = tasks.filter(task => task.isDone).length;

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'x',
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                    },
                    padding: 15,
                },
            },
            title: {
                display: true,
                text: 'Tasks Completed',
                font: {
                    size: 16,
                    weight: 'bold',
                    color: '#000000',
                },
                padding: 15,
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.parsed.y} tasks completed`;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: Math.max(10, completedTasksCount + 1),
                ticks: {
                    stepSize: 1,
                },
                title: {
                    display: true,
                    text: 'Number of Tasks',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
        },
    };

    return (
        <div className="w-full h-80 mt-3 sm:h-96 p-4 bg-white border border-gray-300 rounded-lg">
            <Bar data={data} options={options} />
        </div>
    );
}