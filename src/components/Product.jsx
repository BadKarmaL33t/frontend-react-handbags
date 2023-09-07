import { string } from "prop-types";

function Product({label, img, title, price}) {
    Product.propTypes = string.isRequired;

    return (
        <article>
            <span>{label}</span>
            <img src={img} alt={title}/>
            <p className="product-name">{title}</p>
            <h4 className="product-price">{price}</h4>
        </article>
    );
}

export default Product;