import CarWidget from "../cart/CarWidget";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav className="NavBar">
          <h1 className="titulo">Storm Guitars</h1>
          <section>
              <Link className="txt"to="/category/solidas">G.SOLIDAS</Link>
              <Link className="txt"to="/category/semi-huecas">G.SEMI-HUECAS</Link>
              <Link className="txt"to="/category/huecas">G.HUECAS</Link>
          </section>
          <CarWidget/>
      </nav>
    );
  }
  
  export default NavBar;
  