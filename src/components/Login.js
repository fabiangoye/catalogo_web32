import React, { useContext, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import AuthContext from "../context/AuthContext";

const Login = () => {

    const { handleLogin } = useContext(AuthContext);

    const objForm = {
        email: "",
        password: ""
    }
    //Creando el estado del dormulario
    const [form, setForm] = useState(objForm);
    const [show, setShow] = useState(false)

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await handleLogin(form);// espero a q handleLogin de la respuesta
        if (resp.status === 200) {
            let json = await resp.json();
            localStorage.setItem('token', json.token);
            //console.log(resp);
            setForm(objForm);
            setShow(false);
        } else {
            setShow(true);
        }
    }
    return (
        <div>
            <h2>Login</h2>

            <Alert variant='danger'show={show}>
                Invalid credentials
            </Alert>

            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="loginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required value={form.name} onChange={handleForm} name="email" type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required value={form.password} onChange={handleForm} name="password" type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login
