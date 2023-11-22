import { Link } from "react-router-dom";

const Nap = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://i.pinimg.com/originals/ef/7c/94/ef7c946939f7ae1743bd01e99cb73b84.jpg" alt="" width="50" height="40" class="d-inline-block align-text-top"/>
    </a>
      <Link to="/Pagina" className="navbar-brand" href="#">Pagina</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className=" collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   {/*        <li className="nav-item">
            <Link to="/Home" className="nav-link active" aria-current="page" href="#">Home</Link>
          </li> */}
       
          {/* <li className="nav-item">
            <Link to="/Login" className=" nav-link" href="#">Login</Link>
          </li> */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </Link>
          <ul className="dropdown-menu">
            <li><Link to='/Sacos' className="dropdown-item" href="#">Sacos</Link ></li>
            <li>< Link to="/Pantalones" className="dropdown-item" href="#">Pantalones</Link ></li>
            <li><Link to="/Otros"  className="dropdown-item" href="#">Otros</Link ></li>
            <li><Link to="/Api"  className="dropdown-item" href="#">Api</Link ></li>
          </ul>
        </li>
          <li className="nav-item">
            < Link to="/informacion" className="nav-link" aria-disabled="false">Sobre Nosotros</Link>
          </li>
 
        </ul>
        
        <span className="navbar-text">
            <Link to="/Login" className="nav-link" href="#">Salir</Link>
          </span>
      </div>
    </div>
  </nav> );
};

export default Nap;
