import { Note } from "./Note";
import CustomButton from "./CustomButton";

export function Notes({ notes }) {
    return (
        <div className="flex flex-col gap-3 w-full p-3 border border-gray-300 rounded-md transition-colors">
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg text-blue-500">My Notes</h2>
                <CustomButton  buttonText="Add Note" onClick={() => console.log("Add Note clicked!")} />
            </div>
            {notes.map((note, index) => (
                <Note key={index} title={note.title} content={note.content} date={note.date} />
            ))}
        </div>
    );
}

