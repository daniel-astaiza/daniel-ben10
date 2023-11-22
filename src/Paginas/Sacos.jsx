import Card from "../Componentes/card";
import "./paginascss/Sacos.css"
import Footer from "../Componentes/Footer";


const Sacos = () => {
  return (

    <div>
      <div className="d-flex flex-column align-items-center container ">

        <div className="primera">
          <div className="primero">
            <Card img="https://down-co.img.susercontent.com/file/6dfef3819b497bea6d0b5bea6874cc3e" precio=" 89.900" descripcion="Buzo con capota gris, bolsillo delantero y acabados en verde" />
          </div>
          <div className="segundo">
            <Card img="https://http2.mlstatic.com/D_NQ_NP_707375-MCO53604518781_022023-O.web" precio=" 79.500" descripcion="Buso Buzo Unisex Ben 10 Personalizado" />
          </div>
          <div className="tercero">
            <Card img="https://http2.mlstatic.com/D_NQ_NP_967255-MCO72245184868_102023-O.webp" precio=" 120.000" descripcion="Buzo Ben 10 Personalizado Omnitrix Fotoluminiscente Hoodie" />
          </div>
        </div>


        <div className="segunda">
          <div className="primero">
            <Card img="https://http2.mlstatic.com/D_NQ_NP_781415-MLA70116834873_062023-O.webp" precio=" 59.900" descripcion="Buzo Infantil - Ben 10" />
          </div>
          <div className="segundo">
            <Card img="https://http2.mlstatic.com/D_NQ_NP_927710-CBT54743644190_032023-O.webp" precio="138.600" descripcion="Sudadera Con Capucha Con Cremallera Impresa Ben10" />
          </div>
          <div className="tercero">
            <Card img="https://m.media-amazon.com/images/I/51kTQLYXrQL._AC_UY1000_.jpg" precio="140.000" descripcion="Chaqueta Deportiva Ben 10 Ultimate Omnitrix Verde Cosplay" />
          </div>


        </div>
        <div className="tercera">
          <div className="primero">
            <Card img="https://i.pinimg.com/originals/ca/2a/2d/ca2a2d1ff83308ec796b9337da1b088a.png" precio="50.000" descripcion="Chaqueta Negra Con Estampado y Bolsillos verdes" />
          </div>
          <div className="segundo">

            <Card img="https://http2.mlstatic.com/D_NQ_NP_979354-CBT72193169508_102023-O.webp" precio="143.584" descripcion="Lt Er Sudaderas Con Cremallera Anime Ben 10 Nuevas Chamarras" />
          </div>
          <div className="tercero">
            <Card img="https://http2.mlstatic.com/D_NQ_NP_991436-CBT72630188961_112023-O.webp" precio="125.800" descripcion="Ben 10 Ultimate Omnitrix Chamarra Verde Cosplay Unisex" />
          </div>
        </div>

      </div>
      <Footer />
    </div>





  );
};

export default Sacos;