import "./UseEffect.css"

import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const UseEffect = () => {
  function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFatorial(n - 1) * n;
  }

  const [num, setNum] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  useEffect(
    function () {
      setFatorial(calcFatorial(num));
    },
    [num]
  );

  return (
    <div>
      <p>Use Effect</p>
      <div>
        <span className="text">Fatorial: {fatorial < 0 ? 'Não Existe' : fatorial} </span>
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

export default UseEffect;
