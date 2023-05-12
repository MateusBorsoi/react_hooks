import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <ul className="menu">
                <li>
                    <Link to ="/">Home</Link>
                    <Link to ="/UseState">UseState()</Link>
                    <Link to ="/UseEffect">UseEffect()</Link>
                    <Link to ="/Atv_useEffect">Atv UseEffect</Link>
                    <Link to ="/UseRef">UseRef()</Link>
                    <Link to ="/UseMemo">UseMemo()</Link>
                    <Link to ="/UseCallback">UseCallback()</Link>
                    <Link to ="/UseContext">UseContext()</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar