import React from 'react';
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ url_img, name, price}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {url_img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   ${price}
                </Card.Text>
                <Button variant="warning">Edit</Button>
                &nbsp;{/** esto es un espacio */}
                <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
