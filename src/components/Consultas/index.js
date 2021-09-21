import React, { Component } from "react";
import ConsultaApi from "../../services/Consultas";

export default class Consultas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realizadas: [],
      marcadas: [],
    };
  }

  componentDidMount() {
    ConsultaApi().then((dados) => this.setState(dados));
  }

  render() {
    return (
      <div className="container">
        <h2 className="mt-2">Consultas</h2>

        <div className="row">
          <div className="col">
            <div className="card mt-2 border-success">
              <div className="card-header">Realizadas</div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Especialidade</th>
                    <th>Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.realizadas.map((item, indice) => {
                    return (
                      <tr key={indice}>
                        <td>{item.especialidade}</td>
                        <td>{item.quantidade}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col">
            <div className="card mt-2 border-warning">
              <div className="card-header">Marcadas</div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Especialidade</th>
                    <th>Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.marcadas.map((item, indice) => {
                    return (
                      <tr key={indice}>
                        <td>{item.especialidade}</td>
                        <td>{item.quantidade}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
