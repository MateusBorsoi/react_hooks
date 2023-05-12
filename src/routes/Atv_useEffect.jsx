import "./UseEffect.css";

import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const AtvuseEffect = () => {
  const [num, setNum] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (num % 2 === 0) {
      setStatus("Par");
    } else setStatus("Impar");
  }, [num]);

  return (
    <div>
      <h3>Atividade Use Effect</h3>
      <div>
        <span className="text">Status: {status && status}</span>
      </div>
      <TextField
        id="outlined-basic"
        label="Numero"
        variant="outlined"
        type="number"
        className="texto"
        onChange={(event) => setNum(event.target.value)}
      />
    </div>
  );
};

export default AtvuseEffect;
