import React, { useState } from 'react';
import Logo from '../img/kerim.jpg';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <header className='navbar'>
        <div className='logo-div'>
            <img src={Logo} alt="Kerim logo" className='logo-img' />
        </div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'><a href="/">Home</a></li>
            <li className='nav-item'><a href="/">About</a></li>
            <li className='nav-item'><a href="/">FAQ</a></li>
            <li className='nav-item'><a href="/">Contact</a></li>
        </ul>
        <div className='hamburger' onClick={handleNav}>
            { nav ? 
            (<FaTimes size={30} className='fa-times'/>) : (<FaBars size={30} className='fa-bars'/>) 
            }
        </div>
    </header>
  );
};

export default Navbar;





// 1. rafce i kliknemo enter 
// 2. header element -> roditelj element
// 3. dodajemo div element sa klasom logo
// 4. unutar div elementa sa klasom logo dodajemo img element
// 5. ispod div elementa dodajemo ul element
// 6. unutar ul elementa dodajemo li elemente
// 7. unutar li elemenata dodajemo a elemente
// 8. ispod ul elementa dodajemo div element sa klasom hamburger
// 9. unutar div elementa sa klasom hamburger dodajemo react ikonicu
// 10. dodajemo useState hook
// 11. dodajemo funkciju ispod useState hook
// 12. dodajemo uslov u div elementu sa klasom hamburger
// 13. div elementu sa klasom hamburger dodajemo onClick dogadaj
// 14. ul elementu dodajemo klasu kao uslov
// 15. 