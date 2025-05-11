import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";

function Button({ title, path }) {
    return (
        <div>
            <Link
                href={`/${path}`}
                className="flex items-center bg-gray-700 hover:bg-gray-800 text-white  border border-indigo-600 py-2 px-6 gap-2 rounded-sm "
            >
                <span>{title}</span>
                <GoArrowRight />
            </Link>

        </div>
    );
}

export default Button;