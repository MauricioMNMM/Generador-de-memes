import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      superior: " ",
      inferior: " ",
      memes: [],
      plantilla:
        "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2018/11/plantillas-memes-internet-47.jpg",
    };
  }

  componentDidMount() {
    //Recibe el la URL de la API como paramtetro
    fetch("https://api.imgflip.com/get_memes")
      //Las promesas van encadenadas
      .then((response) => response.json())
      //Aqui ya se puede trabajar con la API
      .then((memesJson) => {
        this.setState({ memes: memesJson.data.memes });
      })
      //Para en caso de errores
      .catch((error) => {
        console.log(error);
        console.log("Hubo un error");
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">Generador de memes</h1>
          <Meme
            superior={this.state.superior}
            inferior={this.state.inferior}
            plantilla={this.state.plantilla}
          />
          <MemeForm values={this.state} onChange={this.handleChange} />
          <div className="contactame">
            <h3>GitHub</h3>
            <div div="div-git">
              <a href="https://github.com/MauricioMNMM/Generador-de-memes">
                <img
                  src="https://midu.dev/images/tags/github.png"
                  alt="GitHub"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="div-meme">
          <h2>Plantillas</h2>
          {this.state.memes.map((item) => {
            return (
              <img
                src={item.url}
                className="image-memes"
                onClick={() => {
                  this.setState({ plantilla: item.url });
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function Meme(props) {
  return (
    <div className="meme-template">
      <img src={props.plantilla} alt="PlantillaDeMeme" className="image" />
      <h2 className="uppertext">{props.superior}</h2>
      <h2 className="lowercase">{props.inferior}</h2>
    </div>
  );
}
function MemeForm(props) {
  return (
    <form>
      <input
        name="superior"
        value={props.values.superior}
        placeholder="Texto superior"
        className="form-input"
        onChange={props.onChange}
      ></input>
      <input
        name="inferior"
        value={props.values.inferior}
        placeholder="Texto inferior"
        className="form-input"
        onChange={props.onChange}
      ></input>
    </form>
  );
}
export default App;
