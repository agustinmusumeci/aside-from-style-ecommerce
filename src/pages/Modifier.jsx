import { useParams } from "react-router-dom";
import ConfigForm from "../components/Forms/ConfigForm";
import NavigationButton from "../components/NavigationButton";
import { useContext } from "react";
import useReset from "../hooks/useReset";
import { ProductsContext } from "../contexts/productsContext";
import usePost from "../hooks/usePost";
import PageTitle from "../components/PageTitle";


function Modifier() {

    const { name } = useParams();

    const { data } = useContext(ProductsContext);

    const updateFromDB = (e, nameRef, descRef, priceRef, stockRef, id, categoryRef) => {
        e.preventDefault()
        const body = {  id: id,
                        name:nameRef.current.value, 
                        desc: descRef.current.value,
                        price: priceRef.current.value, 
                        stock: stockRef.current.value,
                        category: categoryRef.current.value,
                        }
        
        postModifiedData(body, "update-product-api")
    }

    const postModifiedData = async (body, param) => {
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
            console.log("Posting modified data error - ", error)
        }
    }

    return (
        <main>
            <section className="fluid-container">
                <PageTitle title={name + " config"} style="pb-5">
                    <NavigationButton url="/control-panel" message="Go back"/>
                </PageTitle>
                <section>
                    {data && data.map( product => ( product.name == name && <ConfigForm name={product.name} price={product.price} desc={product.description} img={product.img} category={product.category} stock={product.stock} id={product._id} handleReset={useReset} updateFromDB={updateFromDB}/>))}
                </section>
            </section>
        </main>
    );
}

export default Modifier