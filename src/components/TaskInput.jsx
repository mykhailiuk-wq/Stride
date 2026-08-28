import CustomInput from "./CustomInput";

export default function TaskInput({ onTaskCreate = () => {} }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const deadline = formData.get("deadline");
        onTaskCreate(deadline, name);
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <CustomInput
                type="text"
                name="name"
                placeholder="Task name"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <CustomInput
                type="date"
                name="deadline"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-400 transition-colors duration-300 ease-in-out"
            >
                Add Task
            </button>
        </form>
    );
}