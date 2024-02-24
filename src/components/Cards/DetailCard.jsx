import ItemCounter from "../Items/ItemCounter";

function DetailCard({name, price, desc, stock, img, id, opacity}) {

    return (
        <article id={name} className={`my-10 flex flex-wrap gap-10 ${opacity}`}>
            <img src={img} alt="" className="md:w-[18dvw] 2xl:w-[20dvw] rounded-md"/>
            <aside>
                <h3 className="lg-title pb-2">{name}</h3>
                <h4 className="text-sm">${price}</h4>
                <p className="text-sm text-gray-600 pb-5">{desc}</p>
                {stock > 0 ?
                <ItemCounter name={name} price={price} desc={desc} stock={stock} id={id} img={img}/>
                : 
                <button  className="px-5 py-1 bg-gray-100 text-gray-600 rounded-md cursor-not-allowed">No stock left</button>}
            </aside>
        </article>
    );
}

export default DetailCard