import Footer from "../Componentes/Footer";
const Informacion = () => {

  return (
    <div>
      <div className="">
        <h1 className="d-flex flex-column align-items-center  "></h1>
        <iframe width="100%" height="600vh" src="https://www.youtube.com/embed/APbU9_tGa-0?si=fhAsi-n5_XVqatBx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h1 className=" d-flex flex-column align-items-center container">SOBRE NOSOTROS</h1>
        <p className="text-center"> Ben Tennyson
          Es un niño de 10 años, que descubre un reloj alienígena el cual le permite convertirse en 10 héroes (alienígenas) diferentes cada uno con sus propias habilidades, que usa para ayudar a los demás contra los villanos.

          "Gwen"
          Es la prima de Ben, tiene 10 años, es inteligente, y antipática con su primo, aunque en el fondo lo quiere mucho. En ocasiones es la voz de la razón, en otras, ella molesta mucho. En la segunda temporada encuentra un libro de hechizos que la convierte en Hechicera/Heroína. También tiene habilidades de defensa personal avanzadas para la edad que tiene.

          "Max"
          Es el abuelo de Ben y Gwen, un fontanero retirado, hasta que encuentran el Omnitrix, que viaja con ellos. Su trabajo de "plomero" (fontanero) era en realidad la protección de la tierra de cualquier amenaza alienígena. Mientras se desarrolla la serie se va conociendo más de su historia. Tiene 60 años y no se llevaba muy bien con sus propios hijos en especial el padre de Ben. Realiza un viaje por todo el país en su camper, lo que le lleva a él y a sus nietos a enfrentarse a una gran cantidad de villanos..</p>
      </div>
      <Footer />
    </div>



  );
};

export default Informacion;