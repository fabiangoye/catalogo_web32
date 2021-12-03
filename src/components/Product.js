import { useContext } from "react"
import ProductContext from "../context/ProductContext";
import ProductCard from "./ProductCard"
import ProductForm from "./ProductForm"
import "./Components.css"

const Product = () => {

    const { products } = useContext(ProductContext);

    return (
        <div>
            <h2>Product</h2>
            <ProductForm />
            <div className="contCard">
                {products.map(element => <ProductCard key={element._id} url_img={element.url_img} name={element.name} price={element.price} />)}
            </div>
        </div>
    )
}

export default Product
