import './content.css'
import Home from '../../routes/Home';
import { Route, Routes } from 'react-router-dom';
import UseState from '../../routes/UseState';
const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/UseState" element={<UseState />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
