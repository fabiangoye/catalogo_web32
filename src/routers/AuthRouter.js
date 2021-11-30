import React from "react";
import { Route, Routes } from "react-router"
import Catalogue from "../components/Catalogue";
import Product from "../components/Product"
import Dashboard from "../pages/private/Dashboard"

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}>
                <Route index element={<Product/>}></Route>{/*rutas anidadas dentro del dash*/}
                <Route path="/catalogue" element={<Catalogue/>}></Route>
            </Route>
        </Routes>
    )}

export default AuthRouter
