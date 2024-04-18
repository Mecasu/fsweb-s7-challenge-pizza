import { React, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./parts/Home.jsx";
import OrderPizza from "./parts/OrderPizza.jsx";
import Success from "./parts/Success.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formData, setFormData] = useState([]);

  function dataFn(data) {
    setFormData(data);
  }

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/orderpizza" exact>
          <OrderPizza dataFn={dataFn} />
        </Route>
        <Route path="/success" exact>
          <Success formData={formData} />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
