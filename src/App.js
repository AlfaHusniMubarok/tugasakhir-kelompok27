import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import Kemeja from "./Component/Kemeja";
import Kaos from "./Component/Kaos";
import Jilbab from "./Component/Jilbab";
import Celana from "./Component/Celana";
import Rok from "./Component/Rok";
import Outer from "./Component/Outer";
import Sepatu from "./Component/Sepatu";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="title">
          <p> Distro 27</p>
          </div>
          <nav>
          <Link className="text" to="/Home">
            Home
          </Link>
          <Link className="text" to="/Jilbab">
            Jilbab    
          </Link>
          <Link className="text" to="/Kemeja">
            Kemeja  
          </Link>
          <Link className="text" to="/Kaos">
            Kaos    
          </Link>
          <Link className="text" to="/Outer">
            Outer   
          </Link>
          <Link className="text" to="/Celana">
            Celana    
          </Link>
          <Link className="text" to="/Rok">
            Rok   
          </Link>
          <Link className="text" to="/Sepatu">
            Sepatu  
          </Link>
          </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Jilbab" exact component={Jilbab} />
        <Route path="/Kemeja" exact component={Kemeja} />
        <Route path="/Kaos" exact component={Kaos} />
        <Route path="/Outer" exact component={Outer} />
        <Route path="/Celana" exact component={Celana} />
        <Route path="/Rok" exact component={Rok} />
        <Route path="/Sepatu" exact component={Sepatu} />
      </Switch>
    </BrowserRouter>
  );
}
