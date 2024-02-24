import { Link } from "react-router-dom";

function NavigationButton({url, message, onClick}) {
    return (
        <Link to={url} className="py-[6px] px-5 border-[1px] hover:bg-black hover:text-white animate rounded-md place-self-center" onClick={onClick}>
            {message}
        </Link>
    );
}

export default NavigationButton