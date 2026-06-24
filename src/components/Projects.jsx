import {NavLink } from 'react-router-dom'
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});


function Projects(){
  return(
    <>
    <h1>This is Projects Page!</h1>
    <NavLink to={'/todo'} style={navLinkStyles}>Todo</NavLink>
    </>
  )
}
export default Projects