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

    const {response, postData} = usePost();

    const updateFromDB = (e, nameRef, descRef, priceRef, stockRef, id, categoryRef) => {
        e.preventDefault()
        const body = {  id: id,
                        name:nameRef.current.value, 
                        desc: descRef.current.value,
                        price: priceRef.current.value, 
                        stock: stockRef.current.value,
                        category: categoryRef.current.value,
                        }
        
        const response = postData(body, "update-product-api", false)
        response.then(res => alert(res.message))
    }

    return (
        <main>
            <section className="fluid-container">
                <PageTitle title={name + " config"} style="pb-5">
                    <NavigationButton url="/aside-from-style-ecommerce/control-panel" message="Go back"/>
                </PageTitle>
                <section>
                    {data && data.map( product => ( product.name == name && <ConfigForm name={product.name} price={product.price} desc={product.description} img={product.img} category={product.category} stock={product.stock} id={product._id} handleReset={useReset} updateFromDB={updateFromDB}/>))}
                </section>
            </section>
        </main>
    );
}

export default Modifier