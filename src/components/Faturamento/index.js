import React, { Component } from "react";
import { ConsultarFaturamento } from "../../services/Faturamento";

export default class Faturamento extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detalhamento: [],
    };
  }

  componentDidMount() {
    ConsultarFaturamento().then((dados) => this.setState(dados));
  }

  render() {
    return (
      <div className="container">
        <h2 className="mt-2">Faturamento</h2>
        <div className="card mt-2 border-info">
          <div className="card-header">Total por forma de pagamento</div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {this.state.detalhamento.map((detalhe, index) => {
                return (
                  <tr key={index}>
                    <td>{detalhe.descricao}</td>
                    <td>{detalhe.valor.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
