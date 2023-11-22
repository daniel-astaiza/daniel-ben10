/* import Home from "./Paginas/Home"; */
import LoginCom from "./Componentes/LoginComp";
import Perfil from "./Paginas/Perfil";
import Nap from "./Componentes/nap";
import Pagina from "./Paginas/Pagina";
import Informacion from "./Paginas/Informacion";
import Sacos from "./Paginas/Sacos"
import Pantalones from "./Paginas/Pantalones";
import Otros from "./Paginas/Otros";
import Api from "./Paginas/Api";
import { BrowserRouter, useRoutes } from "react-router-dom";

function App() {
  const AppRoutes = () => {
    const routes = useRoutes([
      { path: "/LOGIN", element: <LoginCom /> },
/*       { path: "/HOME", element: <Home /> }, */
      { path: "/PERFIL", element: <Perfil /> },
      { path: "/PAGINA", element: <Pagina /> },
      { path: "/INFORMACION", element: <Informacion/> },
      { path: "/SACOS", element: <Sacos/> },
      { path: "/PANTALONES", element: <Pantalones/> },
      { path: "/OTROS", element: <Otros/> },
      { path: "/Api", element: <Api/> },
    ]);
    return routes;
  };

  return (
    <div>
      <BrowserRouter>
        <Nap></Nap>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
