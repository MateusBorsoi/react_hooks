import { Button } from "@mui/material";
import { useCounter } from "../hooks/useCounter";
import './useCustom.css'

const UseCustom = () => {
  const [count, inc, dec] = useCounter();

  return (
    <did>
      <h3>Use Custom</h3>
      <div className="content">
        <span>{count}</span>
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={() => inc()}
        >
          Inc
        </Button>
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={() => dec()}
        >
          Dec
        </Button>
      </div>
    </did>
  );
};

export default UseCustom;
