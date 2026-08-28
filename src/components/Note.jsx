export function Note({ title, content }) {
    const date = new Date().toLocaleDateString(); // Get the current date in a readable format
    return (
        <div className="flex flex-col w-full h-fit 
        p-3 border border-gray-300 rounded-md hover:border-blue-500 
        transition-colors cursor-pointer gap-2" 
        onClick={() => console.log(`Note "${title}" clicked!`)}>
            <h2 className="font-semibold text-lg text-black">{title}</h2>
            <p className="text-gray-700">{content}</p>
            <p className="text-gray-500 text-sm">{date}</p>
        </div>
    );
}