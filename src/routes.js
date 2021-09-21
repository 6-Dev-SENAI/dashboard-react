import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Consulta from "./pages/Consultas";
import Faturamentos from "./pages/Faturamento";
import Error from "./pages/Error";
import MenuSuperior from "./components/MenuSuperior";

export default function Routes() {
  return (
    <BrowserRouter>
      <MenuSuperior />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/resumo" component={Home} />
        <Route path="/consultas" component={Consulta} />
        <Route path="/faturamento" component={Faturamentos} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
