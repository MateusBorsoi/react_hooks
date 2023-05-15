import { Button, TextField } from "@mui/material";
import { useReducer } from "react";
import "./UseReducer.css";
import { useState } from "react";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "mult7":
      return { ...state, number: state.number * 7 };
    case "div25":
      return { ...state, number: state.number / 25 };
    case "parse":
      return { ...state, number: parseFloat(state.number) };
    case "nameAdd":
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}

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
          onClick={() => dispatch({ type: "div25", number: 35 })}
        >
          Parse
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
