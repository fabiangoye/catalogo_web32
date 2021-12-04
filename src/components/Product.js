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
                {products.map(product => <ProductCard key={product._id} objProduct = {product} />)}
            </div>
        </div>
    )
}

export default Product
