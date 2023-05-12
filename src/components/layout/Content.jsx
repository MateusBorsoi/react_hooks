import './Content.css'
import Home from '../../routes/Home';
import { Route, Routes } from 'react-router-dom';
import UseState from '../../routes/UseState';
import UseEffect from '../../routes/UseEffect'
import AtvuseEffect from '../../routes/Atv_useEffect';
import UseRef from '../../routes/UseRef'
import UseMemo from '../../routes/UseMemo';
const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/UseState" element={<UseState />}></Route>
        <Route path="/UseEffect" element={<UseEffect />}></Route>
        <Route path="Atv_useEffect" element={<AtvuseEffect/>}></Route>
        <Route path="UseRef" element={<UseRef/>}></Route>
        <Route path="UseMemo" element={<UseMemo/>}></Route>
      </Routes>
    </div>
  );
};

export default Content;
