import React, {useContext, useState} from 'react';
import { Card, Button } from "react-bootstrap";
import ProductContext from '../context/ProductContext';
import ProductFormModal from './ProductFormModal';

const ProductCard = ({ objProduct }) => {// este objProduct es el que le manda el padre Product.js  como product.name, product.url_img... etc... que el prof cambió por objProduct = {e} MIN 1:

    const {setProduct} = useContext(ProductContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = (obj)=>{
        setProduct(obj);
    };


    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={objProduct.url_img} />
                <Card.Body>
                    <Card.Title>{objProduct.name}</Card.Title>
                    <Card.Text>
                        ${objProduct.price}
                    </Card.Text>
                    <Button variant="warning" onClick={handleShow}>Edit</Button>
                    &nbsp;{/** esto es un espacio */}
                    <Button variant="danger">Delete</Button>
                </Card.Body>
            </Card>

            {/*ventana emergente (modal)*/}
           <ProductFormModal 
           show = {show} 
           handleClose={handleClose} 
           objProduct={objProduct}
           handleUpdate = {handleUpdate}/> 
        </>
    )
}

export default ProductCard
