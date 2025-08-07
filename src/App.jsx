import { data } from "./data/data";
import { useState } from "react";
import "./App.css";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();
    if (!weight || !height) return;
    console.log(height, weight);
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable />}
    </div>
  ); //Caso não haja imc, retorna o formulário de cálculo de imc, caso haja imc retorna a tabela do imc
}

export default App;
