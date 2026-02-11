import './Products.css';
function Product({title,price,instock,rating}){
    const stars= "⭐".repeat(Math.round(rating));
    return(
        <div className="product">
            <h2 className="product-title">{title}</h2>
            <p className="product-price">Price: ${price.toFixed(2)}</p>
            <p className={`stock-status ${instock ? 'in-stock' : "out-of-stock"}`}>
                {instock ? "in stock" : "out of stock"}
            </p>
            <p className="product-rating">Rating: {stars}({rating})</p>
        </div>
    )

}
export default Product;
