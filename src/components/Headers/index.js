import {Link} from 'react-router-dom'
import './index.css'

const Headers=()=>(
    <ul className="background-1" >
      <li className="list-item"> 
      <Link to="/">Home</Link>
      </li>
      <li className="list-item">
        <Link to="/about">About</Link>
        </li>
      <li className="list-item">
        <Link to="/contact">Contact</Link>
        </li>
        <li className="list-item">
          <Link to="/login">LogIn</Link>
        </li>
      
    
  </ul>
)
export default Headers