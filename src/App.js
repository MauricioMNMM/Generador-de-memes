import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      superior: " ",
      inferior: " ",
    };
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
          <Meme superior={this.state.superior} inferior={this.state.inferior} />
          <MemeForm values={this.state} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
function Meme(props) {
  return (
    <div className="meme-template">
      <img
        src="https://i1.wp.com/www.sopitas.com/wp-content/uploads/2018/11/plantillas-memes-internet-47.jpg"
        alt="PlantillaDeMeme"
        className="image"
      />
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
