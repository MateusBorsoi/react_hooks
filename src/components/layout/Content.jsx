import "./Content.css";
import Home from "../../routes/Home";
import { Route, Routes } from "react-router-dom";
import UseState from "../../routes/UseState";
import UseEffect from "../../routes/UseEffect";
import AtvuseEffect from "../../routes/Atv_useEffect";
import UseRef from "../../routes/UseRef";
import UseMemo from "../../routes/UseMemo";
import UseCallback from "../../routes/UseCallback";
import UseContext from "../../routes/UseContext";
import UseReducer from "../../routes/UseReducer";
const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/UseState" element={<UseState />}></Route>
        <Route path="/UseEffect" element={<UseEffect />}></Route>
        <Route path="Atv_useEffect" element={<AtvuseEffect />}></Route>
        <Route path="UseRef" element={<UseRef />}></Route>
        <Route path="UseMemo" element={<UseMemo />}></Route>
        <Route path="UseCallback" element={<UseCallback />}></Route>
        <Route path="UseContext" element={<UseContext />}></Route>
        <Route path="UseReducer" element={<UseReducer/>}></Route>
       </Routes>
    </div>
  );
};

export default Content;
