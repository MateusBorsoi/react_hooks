import { useMemo, useState } from "react";
import "./UseMemo.css";

const UseMemo = () => {
  const sum = (vlr1, vlr2) => {
    const delay = Date.now() + 500;
    while (Date.now() < delay) {
      //
    }
    return vlr1 + vlr2;
  };

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const result = useMemo(() => sum(n1, n2), [n1, n2]);

  return (
    <div>
      <h3>Use Memo</h3>
      <div className="texto">
        <input
          type="number"
          className="input"
          onChange={(event) => setN1(parseInt(event.target.value))}
          value={n1}
        />
        <input
          type="number"
          className="input"
          onChange={(event) => setN2(parseInt(event.target.value))}
          value={n2}
        />
        <input
          type="number"
          className="input"
          onChange={(event) => setN3(parseInt(event.target.value))}
          value={n3}
        />
        <span>{result}</span>
      </div>
    </div>
  );
};

export default UseMemo;
