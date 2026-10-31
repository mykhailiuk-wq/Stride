export default function CustomButton({
    buttonText,
    onClick,
    width,
    type = "button",
    variant = "filled",
    isVisible = true
}) {
    if (!isVisible) {
        return null;
    }

    const classes =
        variant === "filled"
            ? "bg-blue-500 text-white transition-all duration-300 ease-in-out hover:bg-blue-400"
            : "border border-blue-500 text-blue-500 transition-all duration-300 ease-in-out font-normal hover:border-blue-300 hover:text-blue-300";

    const buttonWidth = width === "max" ? "w-full" : "w-fit min-w-[100px]";

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${buttonWidth} rounded-md cursor-pointer h-fit p-2 ${classes}`}
        >
            {buttonText}
        </button>
    );
}