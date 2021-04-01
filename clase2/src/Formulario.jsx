import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      correo: "",
    };
  }

  render() {
    return (
      <>
        <form>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              onChange={(evt) => this.setState({ nombre: evt.target.value })}
            />
          </div>
        </form>

        <div>
          <h3>{`Tu nombre es: ${this.state.nombre}`}</h3>
        </div>
      </>
    );
  }
}

export default Formulario;
