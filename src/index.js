// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');
// container.appendChild(element);
//const jsx = <h1>Hola, fapcoders!</h1>;
//atri1 = que queremos crear
//atri2 = atributos
//atri3= el texto que ira dentro del atributo creado
//const element= React.createElement('a',{href:'https://facebook.com'},'Hola soy los ninos');
//const element = React.createElement("h1", {}, `Hola soy ${name}`);
//const jsx = <h1>Hola soy, {name}</h1>

/*const jsx = (
        <div>
            <h1>Hola soy estudiante de platzi</h1>
            <p>Soy estudiante de universidad</p>
        </div>
);*/
import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import "bootstrap/dist/css/bootstrap.css";
//import Badge from "./componentes/Badge";

import App from "./componentes/App";
// const name = "ANTONIO";
const container = document.getElementById("app");
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <App
  /*firstName="Frank"
    lastName="Ato"
    avatarUrl="https://es.gravatar.com/userimage/125132343/09bd9098f49c2ec0493c177cc42a82de.jpg?size=200"
    jobTitle="Estudiante de IS"
    twitter="FapCod"*/
  />,
  container
);
