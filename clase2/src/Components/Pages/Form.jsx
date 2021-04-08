import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      correo: "",
      ready: "",
      count: 0,
    };

    // Bindeamos cuando debe ser reactivo
    this.cambiarNombre = this.cambiarNombre.bind(this);
    this.addCount = this.addCount.bind(this);

    // No se bindea xq no es reactivo,
    // Solo se llama en el hook, no en render()
    // this.setReady = this.setReady.bind(this);
  }

  cambiarNombre(e) {
    this.setState({
      nombre: e.target.value,
    });
  }

  setReady() {
    this.setState({
      ready: "We are ready",
    });
  }

  addCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <h1>This is the title</h1>
          <div className="row">
            <form>
              <div>
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  onChange={this.cambiarNombre}
                />
              </div>
            </form>

            <div>
              <h3>{`Tu nombre es: ${this.state.nombre}`}</h3>
            </div>

            <div>
              <h4>{this.state.ready}</h4>
              <span>{this.state.count}</span>
              <button onClick={this.addCount}>Counter</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    this.setReady();
  }

  componentDidUpdate() {
    // this.addCount();
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }
}

export default Form;
