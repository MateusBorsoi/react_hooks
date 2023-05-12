import { useEffect, useRef, useState } from "react";
import "../routes/UseRef.css";

const UseRef = () => {
  const [valor, setValor] = useState("");
  const [valor2, setValor2] = useState("");
  const count = useRef(0);

  const InputVlr = useRef(null);
  const InputVlr2 = useRef(null);

  const merge = function (vlr1, vlr2) {
    return [...vlr1]
      .map((e, i) => {
        return `${e.concat(vlr2[i] || "")}`;
      })
      .join("");
  };

  useEffect(
    function () {
      count.current = count.current + 1;
      InputVlr2.current.focus();
    },
    [valor]
  );

  useEffect(
    function () {
      count.current++;
      InputVlr.current.focus();
    },
    [valor2]
  );

  return (
    <div>
      <p>Use Ref</p>
      <div>
        <input
          type="text"
          className="input"
          onChange={(event) => setValor(event.target.value)}
          ref={InputVlr}
        />
      </div>
      <div>
        <span>Valor:</span>
        <span>{merge(valor, valor2)}[ </span>
        <span>{count.current} ]</span>
      </div>
      <div>
        <input
          type="text"
          className="input"
          onChange={(event) => setValor2(event.target.value)}
          ref={InputVlr2}
        />
      </div>
    </div>
  );
};

export default UseRef;
