import Footer from "../Componentes/Footer";
import "./paginascss/pagina.css"


const Pagina = () => {
    return (
      
      <div className=" justify-content-center align-items-center col-8 w-100">
        <div className=" row row-cols-1 row-cols-md-2 g-4 d-flex flex-column  justify-content-center align-items-center col-8 w-100">
          <div className="padre1">
          <p className="text-center fs-1 fw-bold ">BIENVENIDOS</p>
          <a className="text-center fs-3 text-reset text-decoration-none fw-bold d-flex justify-content-center">ESTOS SON LOS PRODUCTOS MAS VENDIDOS</a>
          </div>


          <div className="padre">
          <div className="col">
            <div className="card">
              <img src="https://down-co.img.susercontent.com/file/6dfef3819b497bea6d0b5bea6874cc3e" className="card-img-top" width="100" height="400"></img>
              <div className=" text-center card-body">
                <p className="card-text"><b>Buzo con capota gris, bolsillo delantero y acabados en verde</b></p>
                <p className="card-text">$ 89.900</p>
              </div>
            </div>
          </div>
          <div className="col" width="50" height="400">
            <div className="card">
              <img src="https://i.pinimg.com/736x/73/a1/4f/73a14f408b307668e240c920e1fdd84c.jpg" className="card-img-top " width="50" height="400"></img>
              <div className=" text-center card-body">
                <p className="card-text"><b>Camiseta negra con diseño de ben 10 tunes y cuello redondo</b></p>
                <p className="card-text">$ 39.900</p>
  
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://down-co.img.susercontent.com/file/sg-11134201-7qvey-lkcitkl4j0jdcd" className="card-img-top" width="..." height="400"></img>
              <div className="  text-center card-body">
                <p className="card-text"><b>Camiseta azul con diseño de ben 10 con cuello clasico </b></p>
                <p className="card-text">$ 49.900</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://http2.mlstatic.com/D_NQ_NP_746165-CBT72255294807_102023-O.webp" className="card-img-top" width="..." height="400"></img>
              <div className=" text-center card-body">
                <p className="card-text"><b>Pantalón jogger y Buzo con capota negro con bolsillos y elástico en botas</b></p>
                <p className="card-text">$ 79.900</p>
              </div>
            </div>
          </div>
          </div>
         
        </div> 
        <div>
          <Footer/>
        </div>
  
      </div>
    );
  };
  export default Pagina;