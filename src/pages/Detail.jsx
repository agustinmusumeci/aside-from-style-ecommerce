import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";
import DetailCard from "../components/Cards/DetailCard";
import useOpacity from "../hooks/useOpacity";

function Detail() {
    const { name } = useParams();

    const { data } = useContext(ProductsContext);

    const opacity = useOpacity()

    return (
    <main>
        <section className="fluid-container">
            {data && data.map( product => ( product.name == name && <DetailCard name={product.name} price={product.price} desc={product.description} img={product.img} stock={product.stock} id={product._id} opacity={opacity}/>
            ))}
        </section>
    </main>
    );
}

export default Detail