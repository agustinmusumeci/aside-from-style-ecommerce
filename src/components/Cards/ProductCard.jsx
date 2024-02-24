import { Link } from "react-router-dom";

function ProductCard({name, price, desc, stock, img, id, category, featured, loading, opacity}) {
    const URL = `/products/${name}`

    return (
        <article className="relative">
            <Link to={URL} id={id} className={`relative ${opacity}`}>
            {featured && <div className="absolute mt-5 px-5 py-[3px] bg-black text-white rounded-e-md font-display font-semibold z-30">NEW</div>}
            <article  className="max-w-[20em]">
                <picture className="relative">
                    {/* <LazyLoadImage key={name} src={img} effect="blur" placeholderSrc={img} /> */}
                    <img src={img} alt="Imagen" className="w-full object-cover rounded-md" loading="lazy"/>
                    {stock == 0 && <div className="absolute w-full mt-5 px-5 py-[3px] bottom-0 bg-black text-white rounded-b-md font-display font-semibold text-center">NO STOCK</div>}
                </picture>
                <h5 className="lg-title pt-2">{name}</h5>
                <h6 className="capitalize pb-1">{category}</h6>
                <p className="text-sm pb-2 text-dark font-semibold">$ {price}</p>
            </article>
        </Link>
        </article>
    );
}

export default ProductCard