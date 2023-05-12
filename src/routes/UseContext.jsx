import "./UseContext.css";
import { useContext } from "react";
import DataContext from "../data/DataContext";
import { Button } from "@mui/material";
import { AppContext } from "../data/Store";

const UseContext = () => {
  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta,
    });
  }

  const { number, text, setNumber } = useContext(AppContext);

  return (
    <div>
      <p>
        <span>{context.state.text}</span>
      </p>
      <p>
        <span>{context.state.number}</span>
      </p>
      <p>
        <span>{context.state.message}</span>
      </p>
      <Button
        variant="contained"
        disableElevation
        onClick={() => addNumber(-1)}
        className="button"
      >
        - 1
      </Button>
      <Button
        variant="contained"
        disableElevation
        onClick={() => addNumber(1)}
        className="button"
      >
        + 1
      </Button>
      <div className="texto">
        <span>{number}</span>
        <span>{text}</span>
        <div className="buttons">
          <Button
            variant="contained"
            disableElevation
            className="button"
            onClick={() => setNumber(number - 1)}
          >
            - 1
          </Button>
          <Button
            variant="contained"
            disableElevation
            className="button"
            onClick={() => setNumber(number + 1)}
          >
            + 1
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
