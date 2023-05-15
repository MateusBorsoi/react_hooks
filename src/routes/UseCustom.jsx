import { Button } from "@mui/material";
import { useCounter } from "../hooks/useCounter";
import "./UseCustom.css";
import { useFetch } from "../hooks/useFetch";

const UseCustom = () => {
  const [count, inc, dec] = useCounter();
  const url = "http://files.cod3r.com.br/curso-react/estados.json";
  const response = useFetch(url);

  function showStates(states) {
    return states.map((state) => (
      <li key={state.nome}>
        {state.nome} - {state.sigla}{" "}
      </li>
    ));
  }

  return (
    <div>
      <h3>Use Custom</h3>
      <div className="itens">
        <span>Use Counter</span>
        <span>{count}</span>
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={() => inc()}
        >
          Inc +
        </Button>
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={() => dec()}
        >
          Dec -
        </Button>
      </div>
      <div>
        <span>Use Fetch</span>
        <ul>{!response.loading ? showStates(response.data) : false}</ul>
      </div>
    </div>
  );
};

export default UseCustom;
