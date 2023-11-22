import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
        <footer className="bg-dark text-white py-3">
      <div>
        <div>
          <div className="text-center">
            <p>Síguenos en redes sociales</p>
            <ul className="list-inline">
              <li className="list-inline-item"><Link to="https://www.facebook.com/daniel.astaiza.96?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-white"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png" width="40" /></Link></li>
              <li className="list-inline-item">< Link to="https://instagram.com/hahhsksdjdk?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className="text-white"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" width="40" /></Link></li>
              <li className="list-inline-item">< Link to="https://www.tiktok.com/@hahhsksdjdk?_t=8hPSAMJFvNO&_r=1" target="_blank" rel="noopener noreferrer" className="text-white"><img src="https://img.freepik.com/vector-premium/logotipo-tik-tok_578229-290.jpg" width="40" /></Link></li>
            </ul>
            <p> Creado Por Danielito.</p>
            </div > 
        
        </div>
      </div>
    </footer>
    </div >
    );
  };

export default Footer;