import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UnauthRouter from './routers/UnauthRouter';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import AuthRouter from './routers/AuthRouter';

function App() {
  const {auth} = useContext(AuthContext);
  return (
    <div className="App">
      {auth? <AuthRouter/> : <UnauthRouter/>}{/* validando si auth es true el usuaruo navega por las rutas auth*/}
      
    </div>
  );
}

export default App;
