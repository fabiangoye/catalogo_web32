import React, { useContext, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import ProductContext from '../context/Productcontext';

const objForm = {
    name: "",
    price: "",
    url_img: ""

}

const ProductForm = () => {

    //contextos
    const {handleCreate} = useContext(ProductContext);
    //Estados
    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        setForm({...form, [e.target.value]: e.target.name});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await handleCreate(form);
        if(resp.status === 201){
            alert('Created');
            setForm(objForm);
    }
        }
        

    return (
        <div>
            <Form onSubmit = {handleSubmit}>
                {/*Fila 1 */}
                <Row>
                    {/*Columna 1*/}
                    <Col>
                        <Form.Group  className="mb-3" controlId="productName">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Product name" required value={form.name} onChange={handleForm} />
                        </Form.Group>
                    </Col>
                    {/*Columna 2*/}
                    <Col>
                        <Form.Group className="mb-3" controlId="productPrice">
                            <Form.Label>Product price</Form.Label>
                            <Form.Control name='price' type="number" placeholder="Product price"  required value={form.price} onChange={handleForm}/>
                        </Form.Group>
                    </Col>
                </Row>

                {/*Fila 2 */}
                <Row>
                    <Form.Group className="mb-3" controlId="productImage">
                        <Form.Label>Product image</Form.Label>
                        <Form.Control name='url_img' type="text" placeholder="Url_img"  required value={form.url_img} onChange={handleForm}/>
                    </Form.Group>
                </Row>
                {/** Botón de registro */}
                <Button variant='success' type="submit"
                >Create</Button>
            </Form>
        </div>
    )
}

export default ProductForm
