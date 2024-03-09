import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className="relative w-full my-5 flex justify-start">
                <Link to="/aside-from-style-ecommerce">
                    <h1 className="xxl-title font-serif w-10">
                        Aside From Style
                    </h1>
                </Link>
            </div>
    );
}

export default Logo