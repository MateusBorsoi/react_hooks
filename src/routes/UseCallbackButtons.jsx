import { Button } from "@mui/material";
import React from "react";

const UseCallbackButtons = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        onClick={() => props.inc(6)}
        className="button"
      >
        + 6
      </Button>
      <Button
        variant="contained"
        disableElevation
        onClick={() => props.inc(12)}
        className="button"
      >
        + 12
      </Button>
      <Button
        variant="contained"
        disableElevation
        onClick={() => props.inc(18)}
        className="button"
      >
        + 18
      </Button>
    </div>
  );
};

export default React.memo(UseCallbackButtons);
