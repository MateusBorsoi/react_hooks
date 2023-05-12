import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <ul className="menu">
                <li>
                    <Link to ="/">Home</Link>
                    <Link to ="/UseState">UseState()</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar