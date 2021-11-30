import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import AuthContext from "../context/AuthContext";

const Register = () => {

    const objForm = {
        name: '',
        lastname: '',
        email: '',
        password: ''
    }

    const {handleRegister} = useContext(AuthContext);
    const [form, setForm] = useState(objForm);// lo que va dentro del useState es el estado inicializador

    const handleForm = (e) => {
        let obj = { ...form, [e.target.name]: e.target.value };
        setForm(obj);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister(form);
        setForm(objForm);//se setea el formulario para dejar 

    }

    return (
        <div>
            <h2>Register</h2>
            <Container>
                <Form onSubmit={handleSubmit}>
                    {/*-----------Fila Uno ----------------*/}
                    <Row>
                        {/*Nombre*/}
                        <Col>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required name='name' value={form.name} onChange={handleForm} type="text" placeholder="Enter name" />
                            </Form.Group>
                        </Col>
                        {/*Apellidos*/}
                        <Col>
                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control required name='lastname' value={form.lastname} onChange={handleForm} type="text" placeholder="Enter Lastname" />
                            </Form.Group>
                        </Col>
                    </Row>
                    {/*-----------Fila Dos ----------------*/}
                    <Row>
                        {/*Email*/}
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required name='email' value={form.email} onChange={handleForm} type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        {/*Pasword*/}
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required name='password' value={form.password} onChange={handleForm} type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                    </Row>





                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Register
