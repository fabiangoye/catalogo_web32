import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

const objForm = {
    name: "",
    price: "",
    url_img: "",
    id: "",
}

const ProductFormModal = ({ show, handleClose, objProduct, handleUpdate }) => {// el padre es ProductCard.js

    //Estados
    const [form, setForm] = useState(objForm);

    useEffect(() => {
        setForm({
            name: objProduct.name,
            price: objProduct.price,
            url_img: objProduct.url_img,
            id: objProduct._id
        });
    }, [objProduct]);// el useEffect se va a ejecutar cuando la prop [objProduct] cambie

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleEdit = () => {
        handleUpdate(form);
        setForm(objForm);
        handleClose();

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {/*Fila 1 */}
                <Row>
                    {/*Columna 1*/}
                    <Col>
                        <Form.Group className="mb-3" controlId="productName">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Product name" required value={form.name} onChange={handleForm} />
                        </Form.Group>
                    </Col>
                    {/*Columna 2*/}
                    <Col>
                        <Form.Group className="mb-3" controlId="productPrice">
                            <Form.Label>Product price</Form.Label>
                            <Form.Control name='price' type="number" placeholder="Product price" required value={form.price} onChange={handleForm} />
                        </Form.Group>
                    </Col>
                </Row>

                {/*Fila 2 */}
                <Row>
                    <Form.Group className="mb-3" controlId="productImage">
                        <Form.Label>Product image</Form.Label>
                        <Form.Control name='url_img' type="text" placeholder="Url_img" required value={form.url_img} onChange={handleForm} />
                    </Form.Group>
                </Row>
                 

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleEdit}>{/* MIN 2:05:00  Ciclo 4 - 30/11/21*/}
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductFormModal;
