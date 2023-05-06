// import "../styles/estilos.css";
import { Component } from "react";
import M from "materialize-css";

import imgUno from "../img/dubai.jpg";
import imgDos from "../img/londres.jpeg";
import imgTres from "../img/nueva york.jpeg";
import imgCuatro from "../img/paris.jpg";
import imgCinco from "../img/roma.jpeg";
import imgSeis from "../img/St. Petersburg.jpg";
import imgSiete from "../img/tailandia.jpg";
import imgOcho from "../img/venecia.jpg";

export default class Carousel extends Component {
  componentDidMount() {
    const elementosCarousel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarousel, {
      duration: 1500,
      dist: -80,
      shift: 5,
      padding: 5,
      numVisible: 3,
      indicators: true,
      noWrap: false,
    });
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1 className="center-aling titulo">Te apetece?</h1>

              <div className="carousel center-align">
                <div className="carousel-item">
                  <h2 className="subtitulo">Viajar a</h2>
                  <div className="linea-division"></div>
                  <p className="lugar">dubai</p>
                  <img src={imgUno} alt="" />
                </div>
                <div className="carousel-item">
                  <h2 className="subtitulo">Viajar a</h2>
                  <div className="linea-division"></div>
                  <p className="lugar">londres</p>
                  <img src={imgDos} alt="" />
                </div>
                <div className="carousel-item">
                  <h2 className="subtitulo">Viajar a</h2>
                  <div className="linea-division"></div>
                  <p className="lugar">nueva york</p>
                  <img src={imgTres} alt="" />
                </div>
                <div className="carousel-item">
                  <h2 className="subtitulo">Viajar a</h2>
                  <div className="linea-division"></div>
                  <p className="lugar">paris</p>
                  <img src={imgCuatro} alt="" />
                </div>
                <div className="carousel-item">
                  <h2 className="subtitulo">Viajar a</h2>
                  <div className="linea-division"></div>
                  <p className="lugar">roma</p>
                  <img src={imgCinco} alt="" />
                </div>
                <div className="carousel-item">
                  <h2 className="subtitulo">Viajar a</h2>
                  <div className="linea-division"></div>
                  <p className="lugar">St. Petersburg</p>
                  <img src={imgSeis} alt="" />
                </div>
                <div className="carousel-item">
                  <h2 className="subtitulo">Viajar a</h2>
                  <div className="linea-division"></div>
                  <p className="lugar">tailandia</p>
                  <img src={imgSiete} alt="" />
                </div>
                <div className="carousel-item">
                  <h2 className="subtitulo">Viajar a</h2>
                  <div className="linea-division"></div>
                  <p className="lugar">venecia</p>
                  <img src={imgOcho} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
