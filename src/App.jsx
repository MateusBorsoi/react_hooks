import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Content from "./components/layout/Content";

function App() {
  return (
    <div className="principal">
      <Router>
        <Navbar />
        <Content />
      </Router>
    </div>
  );
}

export default App;
