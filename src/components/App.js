import "materialize-css/dist/css/materialize.min.css";
// import "materialize-css/dist/js/materialize.min.js";
import Carousel from "../js/Carousel";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">{/* Aquí va el HTML */ <Carousel></Carousel>}</div>
  );
}

export default App;
