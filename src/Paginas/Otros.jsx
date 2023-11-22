
import Card from "../Componentes/card";
import "./paginascss/Sacos.css"
import Footer from "../Componentes/Footer";
const Otros = () => {
    return (
      <div>
<div className="d-flex flex-column align-items-center container ">
      <div className="primera">
        <div className="primero">
          <Card img="https://m.media-amazon.com/images/I/61ApL5l4GqL._AC_SL1000_.jpg" precio="30.000" descripcion="Ben 10 Reloj Digital Con Proyector Infantil " />
        </div>
        <div className="segundo">
          <Card img="https://http2.mlstatic.com/D_NQ_NP_903370-CBT48086163285_112021-O.webp" precio=" 120.000" descripcion="Figuras De Acción Articuladas Ben 10 12 Cm " />
        </div>
        <div className="tercero">
          <Card img="https://http2.mlstatic.com/D_NQ_NP_995485-MLA47634289751_092021-O.webp" precio=" 89.000" descripcion="Ben 10 Standard Edition Outright Games PS4 Físico " />
        </div>
      </div>


      <div className="segunda">
        <div className="primero">
          <Card img="https://http2.mlstatic.com/D_NQ_NP_802151-CBT71520170711_092023-O.webp" precio="170.000" descripcion="Juego De Cama Ben 10 Con Dibujos Animados " />
        </div>
        <div className="segundo">
          <Card img="https://http2.mlstatic.com/D_NQ_NP_852460-CBT71474185980_092023-O.webp" precio="190.000" descripcion="Ben 10 Omnivers, Funda De Edredón Suave Y Fundas De Almohada" />
        </div>
        <div className="tercero">
          <Card img="https://sc02.alicdn.com/kf/HTB1y3iEqQ9WBuNjSspeq6yz5VXaB/232906739/HTB1y3iEqQ9WBuNjSspeq6yz5VXaB.jpg" precio="29.900" descripcion="Calzoncillos De Ben 10 Edición Limitada" />
        </div>


      </div>
      <div className="tercera">
        <div className="primero">
          <Card img="https://http2.mlstatic.com/D_NQ_NP_607150-MCO70022767258_062023-O.webp" precio="20.000" descripcion="Kit Decoración Ben 10 X12 Niños + Obsequio" />
        </div>
        <div className="segundo">

          <Card img="https://http2.mlstatic.com/D_NQ_NP_807844-MCO42961786037_072020-O.webp" precio="50.900" descripcion=" Ben 10 Camiseta + Gorra Combo Para Niños" />
        </div>
        <div className="tercero">
          <Card img="https://http2.mlstatic.com/D_NQ_NP_935505-MCO72516262985_102023-O.webp" precio="39.900" descripcion="Sombrilla Niños Ben 10" />
        </div>
      </div>

    </div>
    <Footer/>
      </div>
      
    );
  };
  
  export default Otros;