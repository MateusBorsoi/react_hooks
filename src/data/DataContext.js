import React from "react";

export const Data = {
  number: 123,
  text: "Context API",
};

const DataContext = React.createContext(null);
export default DataContext;
