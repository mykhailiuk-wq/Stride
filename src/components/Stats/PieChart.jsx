import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ tasks = [] }){
    const completedCount = tasks.filter(task => task.isDone).length;
    const totalCount = tasks.length;
    const incompleteCount = totalCount - completedCount;
    const completedPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    const data = {
        labels: [`Completed (${completedPercentage}%)`, 'Incomplete'],
        datasets: [
            {
                data: [completedCount, incompleteCount],
                backgroundColor: [
                    '#3b82f6',
                    '#e5e7eb',
                ],
                borderColor: [
                    '#1e40af',
                    '#d1d5db',
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 14,
                    },
                    padding: 20,
                },
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const value = context.parsed;
                        const percentage = totalCount > 0 ? Math.round((value / totalCount) * 100) : 0;
                        return `${context.label.split('(')[0].trim()}: ${value} (${percentage}%)`;
                    },
                },
            },
        },
    };

    return (
        <div className="flex w-full h-full max-w-full items-center justify-center overflow-hidden rounded border border-gray-300 p-4">
            <div className="w-full max-w-70 h-72">
                <Pie data={data} options={options} />
            </div>
        </div>
    );
}