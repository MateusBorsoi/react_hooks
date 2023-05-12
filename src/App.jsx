import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Content from "./components/layout/Content";
import DataContext, {Data} from "./data/DataContext";
import { useState } from "react";
import Store from "./data/Store";

function App() {

  const [state, setState] = useState(Data)

  return (
    <Store>
    <DataContext.Provider value={{state, setState}}>
    <div className="principal">
      <Router>
        <Navbar />
        <Content />
      </Router>
    </div>
    </DataContext.Provider>
    </Store>
  );
}

export default App;
