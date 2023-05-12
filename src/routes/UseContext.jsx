import { useContext } from "react"
import DataContext from "../data/DataContext"

const UseContext = () => {

   const context = useContext(DataContext)

    return (
        <div>
            <h3>Use Context</h3>
            <p><span>{context.text}</span></p>
            <p><span>{context.number}</span></p>
        </div>
    )
}

export default UseContext