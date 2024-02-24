import { Link } from "react-router-dom";

function Item({title, desc, amount, price, stock, itemId, url, img, children, opacity}) {
    return (
        <article id={itemId} className={`relative mt-10 mb-5 p-5 flex flex-wrap gap-2 justify-center sm:justify-between bg-light animate rounded-md ${opacity}`}>
            <Link to={url}>
            <aside className="flex justify-between flex-col sm:flex-row gap-5">
                <img src={img} alt="" className="h-40 w-80 sm:h-36 sm:w-40 object-cover rounded-md"/>
                <div className="">
                    {title && <h5 className="lg-title pb-3">{title}</h5>}
                    {amount && <p className="font-semibold">QTY: {amount}</p>}
                    {desc && <p className="text-sm text-gray-600">{desc}</p>}
                    {(price && amount) && <p className="text-sm text-gray-600">$ {price*amount}</p>}
                    {stock && <p className="text-sm text-gray-600">stock: {stock}</p>}
                    {(price && !amount) && <p className="text-sm text-gray-600">price: ${price}</p>} 
                </div>
            </aside>
            </Link>
            {children}
            
        </article>
    );
}

export default Item