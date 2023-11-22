
import Card from "../Componentes/card";
import "./paginascss/Sacos.css"
import Footer from "../Componentes/Footer";

const Pantalones = () => {
  return (

    <div>
      <div className="d-flex flex-column align-items-center container ">
      <div className="primera">

        <div className="primero">
          <Card img="https://grupolozada.files.wordpress.com/2014/07/pantalon_ben_10_verde_01_2.jpg" precio=" 99.900" descripcion="Pantalon de Buzo en Microsatin Forrado con Algodon" />
        </div>
        <div className="segundo">
          <Card img="https://images-na.ssl-images-amazon.com/images/I/61OOJjgCPOL._UX679_.jpg" precio=" 80.900" descripcion="Pantalon de Algodon Elastico Color Negro " />
        </div>
        <div className="tercero">
          <Card img="https://evdo8pe.cloudimg.io/s/resizeinbox/210x210/https://bluetn.eu/bluetneu/zen_zdjecia/zdjecia/zestaw_0C33BEG7PAKIET_2.jpg" precio=" 100.000" descripcion="Pantalones de chándal Ben 10 para niño " />
        </div>
      </div>


      <div className="segunda">
        <div className="primero">
          <Card img="https://evdo8pe.cloudimg.io/s/resizeinbox/210x210/https://bluetn.eu/bluetneu/zen_zdjecia/zdjecia/zestaw_0C33BES1PAKIET_1.jpg" precio=" 99.900" descripcion="Pantalones de chándal Color Gris Con Acabados Verdes y Azules " />
        </div>
        <div className="segundo">
          <Card img="https://http2.mlstatic.com/ben-10-omnitrix-pantalon-ben10-talla-8-anos-nino-nuevo-D_NQ_NP_3431-MLM4259547740_052013-F.jpg" precio="192.000" descripcion="Pantalones para niño Pantalón Ben 10" />
        </div>
        <div className="tercero">
          <Card img="https://m.media-amazon.com/images/I/615Sa2BVJES._AC_UY1000_.jpg" precio="39.900" descripcion="Hdadwy Ben-10 Niños Adolescentes Pantalones de Playa" />
        </div>


      </div>
      <div className="tercera">
        <div className="primero">
          <Card img="https://m.media-amazon.com/images/I/81C+0bnS2nL._AC_UY1100_.jpg" precio="50.000" descripcion="Ben10 Boy's Shorts" />
        </div>
        <div className="segundo">

          <Card img="https://m.media-amazon.com/images/I/81ulrGwzPlL._AC_UY350_.jpg" precio="45.900" descripcion=" Pantalon De Ben 10 de dibujos animados para niños" />
        </div>
        <div className="tercero">
          <Card img="https://cdn.shopify.com/s/files/1/1235/0120/products/bnpj1085V2-Ben-10-pjs-bottoms_compact.jpg" precio="89.900" descripcion="Pantalon Ben 10 Color Verdes con Estampados" />
        </div>
      </div>
    </div>
    <Footer/>
    </div>

  );
};

export default Pantalones;