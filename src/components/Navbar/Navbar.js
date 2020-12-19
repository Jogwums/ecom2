import React from 'react'
import logo from './logo512.png'

const Navbar = () => {
    return (
        <>
         <nav className="" style={navbarStyle}>
             <span style={navbarLogo}>
                 <img src={logo} alt="logo-image" width="40" height="40" />
                 <a>Logo</a>
             </span>
             <span style={navbarLinks}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
             </span>
        </nav>   
        </>
    )
}

const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#ccc',
    fontSize: '1.5rem',
};
const navbarLogo = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'start',
    color: 'green',
    marginLeft: '.5rem',
    width: '320px',
    
};
const navbarLinks = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'green',
    marginLeft: '.5rem',
    width: '320px',
    
};

const linkItem = {
    textDecoration: 'none',
    
};

export default Navbar
