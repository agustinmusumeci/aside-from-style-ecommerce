import { Link } from "react-router-dom";
import Logo from "./Logo";
import PageTitle from "./PageTitle";

function Footer() {
    return(
        <footer className="w-full h-[40dvh] pt-5 mt-[15dvh] bg-[#000000] text-white font-extralight">
            <div className="fluid-container h-[50%] flex items-center gap-5">
                <Logo/>
                <aside>
                    <PageTitle title="Navigation" style="lg-title"/>
                    <ul className="text-lightgray/80">
                        <li><Link to="/aside-from-style-ecommerce">Home</Link></li>
                        <li><Link to="/aside-from-style-ecommerce/about">About</Link></li>
                        <li><Link to="/aside-from-style-ecommerce/products">Products</Link></li>
                        <li><Link to="/aside-from-style-ecommerce/cart">Cart</Link></li>
                    </ul>
                </aside>
                <aside>
                    <PageTitle title="Media" style="lg-title"/>
                    <ul className="text-lightgray/80">
                        <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                        <li><a href="https://www.tiktok.com/" target="_blank">Tiktok</a></li>
                        <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                        <li><a href="https://www.whatsapp.com/" target="_blank">Whatsapp</a></li>
                    </ul>
                </aside>
            </div>
            <div className="relative fluid-container h-[50%]">
                <div className="before:bg-lightgray/20 before:w-full before:h-[1px] before:absolute before:text-white before:bottom-5">
                </div>
            </div>
        </footer>
    );
}

export default Footer