import { useContext } from "react";
import DataContext from "../data/DataContext";
import { Button } from "@mui/material";

const UseContext = () => {
  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta,
    });
  }

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
      <Button variant="contained" disableElevation onClick={() => addNumber(-1)} className="button">
          - 1
        </Button>
        <Button variant="contained" disableElevation onClick={() => addNumber(1)} className="button">
          + 1
        </Button>
    </div>
  );
};

export default UseContext;
