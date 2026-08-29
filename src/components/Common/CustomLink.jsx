import { Link } from "react-router-dom";

export default function CustomLink({ to, children, className = "", ...props }) {
    return (
        <Link
            to={to}
            className={`rounded-full px-4 py-2 text-sm font-semibold text-blue-600 transition hover:text-blue-400 hover:border-blue-400 ${className}`.trim()}
            {...props}
        >
            {children}
        </Link>
    );
}