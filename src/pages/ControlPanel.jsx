import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useNavigate } from "react-router-dom";
import ControlPanelItem from "../components/Items/ControlPanelItem";
import { useContext, useState } from "react";
import { ProductsContext } from "../contexts/productsContext";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";
import NavigationButton from "../components/NavigationButton";
import PopUp from "../components/PopUp";
import PageTitle from "../components/PageTitle";

function ControlPanel() {
    
    const singOut = useSignOut();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [name, setName] = useState();
    const [category, setCategory] = useState();

    const {data, setData} = useContext(ProductsContext);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = (param) => {
        setOpen(false)
        if (param == "ok") {
            removeFromDB({name:name, category:category}, "remove-product-api")
        }
    }

    const logOut = () => {
        singOut();
        navigate("/aside-from-style-ecommerce/login")
    }

    const removeFromDB = async (body, param) => {
        try {
            const response = await fetch(`https://mongoecommerceapi.onrender.com/${param}`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
                credentials: "omit"
            })

            const data = await response.json()

            alert(data.message)

        } catch (error) {
            console.log("Post data for the remove failed - ", error)
        }
    }

    const handleDeleteClick = (name, category) => {
        setName(name)
        setCategory(category)
        handleOpen()
    }

    return (
        <>
        <PopUp title="Delete this product?" content="Are you sure that you want to delete this product? Once it is done, there is no way back." open={open} handleClose={handleClose}/>
        <main>
            <section className="fluid-container">
                <PageTitle title="Control Panel" style="pb-5">
                    <NavigationButton url="/aside-from-style-ecommerce/login" message="Log out" onClick={logOut}/>
                </PageTitle>
                <div className="mb-10 mt-5">
                <Filters></Filters>
                </div>
                <section>
                    <Link to="./add-product">
                        <article id="addProductCard" className="flex gap-5 flex-wrap justify-start p-5 bg-lightgray/20 rounded-md hover:bg-gray-400/50 duration-300 ease-in-out">
                            <p>Add product</p>
                        </article>
                    </Link>
                    {data.map( el => <ControlPanelItem id={el.id} name={el.name} desc={el.desc} img={el.img} price={el.price} stock={el.stock} category={el.category} handleDeleteClick={handleDeleteClick}/>)}
                </section>
            </section>
        </main>
        </>
    );
}

export default ControlPanel