import React, { Component } from "react";
import consultarResumo from "../../services/Resumo";

export default class Resumo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultas: {
        consultas_30dias_anteriores: 0,
        consultas_30dias_posteriores: 0,
      },
      faturamento: {
        anterior: {
          valor: 0,
          comparativo: 0,
        },
        previsao: {
          valor: 0,
          comparativo: 0,
        },
      },
    };
  }

  componentDidMount() {
    consultarResumo().then((dados) => this.setState(dados));
  }

  render() {
    return (
      <div className="container">
        <h2 className="mt-2">Resumo</h2>

        <div className="row">
          <div className="col">
            <h3 className="mt-1">Consultas</h3>
            <div className="row">
              <div className="col">
                <div className="card border-info">
                  <div className="card-header">30 dias anteriores</div>
                  <div className="card-body">
                    {this.state.consultas.consultas_30dias_anteriores}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-warning">
                  <div className="card-header">Próximos 30 dias</div>
                  <div className="card-body">
                    {this.state.consultas.consultas_30dias_posteriores}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h3 className="mt-1">Faturamento</h3>
            <div className="row">
              <div className="col">
                <div className="card border-info">
                  <div className="card-header">30 dias anteriores</div>
                  <div className="card-body">
                    <div className="">
                      {this.state.faturamento.anterior.valor.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
                      {this.state.faturamento.anterior.comparativo > 0 ? (
                        <span className="badge bg-success">
                          {this.state.faturamento.anterior.comparativo} %
                        </span>
                      ) : (
                        <span className="badge bg-danger">
                          {this.state.faturamento.anterior.comparativo} %
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-warning">
                  <div className="card-header">Próximos 30 dias</div>
                  <div className="card-body">
                    <div className="">
                      {this.state.faturamento.previsao.valor.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
                      {this.state.faturamento.previsao.comparativo > 0 ? (
                        <span className="badge bg-success">
                          {this.state.faturamento.previsao.comparativo} %
                        </span>
                      ) : (
                        <span className="badge bg-danger">
                          {this.state.faturamento.previsao.comparativo} %
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
