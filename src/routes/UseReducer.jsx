import { Button, TextField } from "@mui/material";
import { useReducer } from "react";
import "./UseReducer.css";
import { useState } from "react";
import { initialState } from "../store";
import reducer from "../store/reducers";



const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");

  const handleName = () => {
    if (name) {
      dispatch({ type: "nameAdd", payload: name });
    }
  };

  return (
    <div>
      <h3>Use Reducer</h3>
      <div>
        {state.user ? (
          <span>Bem-vindo(a) {state.user.name}</span>
        ) : (
          <span>Usuário não está logado</span>
        )}
        <span>
          <p>{state.number}</p>
        </span>
      </div>
      <div className="button">
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={() => dispatch({ type: "login", payload: "Mateus" })}
        >
          Login
        </Button>
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={() => dispatch({ type: "numberAdd2" })}
        >
          +2
        </Button>
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={() => dispatch({ type: "mult7" })}
        >
          x7
        </Button>
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={() => dispatch({ type: "div25" })}
        >
          %25
        </Button>
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={() => dispatch({ type: "div25" })}
        >
          Parse
        </Button>
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={() => dispatch({ type: "rem9", payload: 25 })}
        >
          - 9
        </Button>

        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={() => dispatch({ type: "add11", payload: 50 })}
        >
          + 11
        </Button>

        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          type="text"
          className="texto"
          onChange={(event) => setName(event.target.value)}
        />
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={handleName}
        >
          Nome
        </Button>
      </div>
    </div>
  );
};

export default UseReducer;
