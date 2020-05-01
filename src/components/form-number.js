import React, { useState } from "react";
import Results from "./results";
import Axios from "axios";
import validation from "../helpers/validation";

const FormNumber = () => {
  const [numbers, setNumbers] = useState("");
  const [numbersFiltered, setNumbersFiltered] = useState([]);
  const [status, setStatus] = useState("idle");

  const getNumberList = () => {
    if (validation(numbers)) {
      Axios.post("http://localhost:3005/list", { numbers })
        .then(({ data }) => {
          setNumbersFiltered(data);
          setStatus("success");
        })
        .catch((err) => {
          setStatus("error");
        });
    } else {
      setStatus("error-validation");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getNumberList();
        }}
        style={{ display: "flex", flexDirection: "column", width: "598px" }}
      >
        <label style={{ margin: "0.125rem 0" }}>Insertar números</label>
        <input
          style={{ margin: "0.125rem 0" }}
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
        <button style={{ margin: "0.125rem 0" }} type="submit">
          Enviar
        </button>
      </form>
      {status === "success" && (
        <div>
          <Results numbers={numbersFiltered} />
        </div>
      )}
      {status === "error" && <p>Error en llamada API</p>}
      {status === "error-validation" && <p>Error en validacion de datos</p>}
    </div>
  );
};

export default FormNumber;
