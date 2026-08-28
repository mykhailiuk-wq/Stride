// vite-project\src\components\CustomButton.jsx

export default function CustomButton({
    buttonText,
    onClick,
    width,
    type = "button",
    variant = "filled"
}) {

    const classes =
        variant === "filled"
            ? "bg-blue-500 text-white transition-all duration-300 ease-in-out hover:bg-blue-400"
            : "border border-blue-500 text-blue-500 transition-all duration-300 ease-in-out font-normal hover:border-blue-300 hover:text-blue-300";

    const buttonWidth = width === "max" ? "w-full" : "max-w-xs"
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full rounded-md ${buttonWidth} cursor-pointer h-fit p-2 ${classes}`}
        >
            {buttonText}
        </button>
    );
}