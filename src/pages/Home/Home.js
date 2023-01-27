import { Link } from "react-router-dom";
import './Home.css';


function Home() {
    return (
        <div className="home">
            <div className="bienvenido">
                <h1>¡Bienvenid@ a Handmade Pottery!</h1>
                <Link to = {"/productos"}>INGRESAR</Link>
            </div>
              
        </div>
    )
}

export default Home;