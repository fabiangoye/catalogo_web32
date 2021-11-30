import React, { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { apiLogin, apiRegister } from "./Api";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        let token = localStorage.getItem('token');
        if(token){
            setAuth(true);
        }
    }, []);// para que se ejecute en el punto de montaje se coloca un arreglo vacio? MIN 1:21:42 CLASE 25/11/21 CICLO 4

    function handleRegister(objUser) {
        //realizar petición al servidor
        fetch(apiRegister, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser) //JSON.stringify(objUser) esto es para convertir el objeto javascript en un ojeto json
        }).then(async (resp) => {
            //console.log(resp);
            if (resp.status === 201) {
                let json = await resp.json(); //obtener el json del resp, (genera el token) esto es asíncrono, el padre debe llevar async, el padre el la función flecha MIN 2:52:00 CLASE 24/11/21 CICLO 4
                let token = json.token;
                //Guardar token en localStorage
                localStorage.setItem('token', token); //recibe los parámetros, llave y valor
                setAuth(true);//seteando el esatdo para navegar por las rutas auth al registrarse
                navigate('/');//mandar al usuario hacía la raíz al registarse
            } else {
                console.log('NO se registró');
            }
        }).catch(error => {
            console.log(error);
        });

    }

    const handleLogin = async (objUser) => {// la función flecha es la que se convierte en asíncrona
        const resp = await fetch(apiLogin, {// los parámetros de fecth son: 1. url de la petición, 2. info de la config de la petición, 3. body, 4.la función flecha a ejecutar
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)
        });
        if(resp.status === 200) { 
            setAuth(true);
            navigate('/')
        }
        return resp;
    }

    const data = { handleRegister, handleLogin, auth };

    return <AuthContext.Provider value={data}>{/**objeto jsx que retorna los children */}
        {children}
    </AuthContext.Provider>
}

export { AuthProvider };// así se exporta un método??
export default AuthContext;