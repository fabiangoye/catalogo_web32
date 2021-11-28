import { createContext } from "react";


const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const handleRegister = (objUser) =>{ //método manejador de registro
        //realizar petición al servidor
        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)//JSON.stringify(objUser) esto es para convertir el objeto javascript en un ojeto json
        }).then(async(resp) => {
            //console.log(resp);
            if(resp.status === 201){
                let json = await resp.json();//obtener el json del resp, (genera el token) esto es asíncrono, el padre debe llevar async, el padre el la función flecha MIN 2:52:00 CLASE 24/11/21 CICLO 4
                let token = json.token;
                //Guardar token en localStorage
                localStorage.setItem('token', token);//recibe soa parámetros, llave y valor
                
            }else{
                console.log('NO se registró');
            }
        }).catch(error => {
            console.log(error);
        });
    
    }

    const data = {handleRegister};

    return <AuthContext.Provider value={data}>{/**objeto jsx que retorna los children */}
        {children}
    </AuthContext.Provider>
}

export {AuthProvider};// así se exporta un método??
export default AuthContext;