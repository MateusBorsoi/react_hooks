import "./UseState.css"
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  const [texto, setTexto] = useState();

  const Incrementar = () => {
    setCount(count + 1);
  };

  const Decrementar = () => {
    setCount(count - 1);
  };

  return (
    <div className="componente">
      <h3>Use State</h3>
      <p>{count}</p>
      <div className="buttons">
        <Button variant="contained" disableElevation onClick={Incrementar} className="button">
          + 1
        </Button>
        <Button variant="contained" disableElevation onClick={Decrementar} className="button">
          - 1
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={() => setCount((current) => current + 1000)}
          className="button"
        >
          + 1000
        </Button>
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Texto"
          variant="outlined"
          onChange={(event) => setTexto(event.target.value)}
        />
      </div>
      <h3>{texto}</h3>
    </div>
  );
}
