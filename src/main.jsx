import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataContext , {Data} from './data/DataContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <DataContext.Provider value={Data}>
    <App />
    </DataContext.Provider>
  </React.StrictMode>,
)
