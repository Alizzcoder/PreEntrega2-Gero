import './styles.css';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';



const NavBar = () => {
   
  const active = {
    color: 'black',
    fontWeight: "bold",
    }
    const disactive = {
            color: 'black',
    }
  
  return (
    <div className='navBarContainer'>
        <div>
        <h2> Handmade Pottery</h2>
        </div>
        <ul >
            <NavLink to={"/productos"} style={({ isActive }) => isActive ? active : disactive}>ALL</NavLink>
            <NavLink to={"/category/Colecciones"} style={({ isActive }) =>isActive ? active : disactive}>Colecciones</NavLink>
            <NavLink to={"/category/Tazas"} style={({ isActive }) =>isActive ? active : disactive}>Tazas</NavLink>
            <NavLink to={"/category/Platos"} style={({ isActive }) =>isActive ? active : disactive}>Platos</NavLink>
            <NavLink to={"/category/Jarrones"} style={({ isActive }) =>isActive ? active : disactive}>Jarrones</NavLink>
        </ul>
            <Link to="/cart"><CartWidget/></Link>
          
      </div>
  )
}

export default NavBar

