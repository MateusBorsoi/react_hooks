import React from "react";

export const Data = {
  number: 1000,
  text: "Context API",
  message: "Testando o Context API"
};

const DataContext = React.createContext(null);
export default DataContext;
