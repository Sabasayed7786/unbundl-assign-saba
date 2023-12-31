import React from 'react';
import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Material-UI icon for shopping cart
import PersonIcon from '@mui/icons-material/Person'; // Material-UI icon for user
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const Navbar = () => {
  

  return (
    <div className="sticky-nav">
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Shop Now</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Health Experts</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Naked Way
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Naked Philosophy</a></li>
            <li><a className="dropdown-item" href="#">Naked Research</a></li>
            
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nack Journals
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Community</a></li>
            <li><a className="dropdown-item" href="#">Mental Wellbeing</a></li>
            <li><a className="dropdown-item" href="#">Recipes</a></li>
            <li><a className="dropdown-item" href="#">Health and Fitness</a></li>
            
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
      <a className="nav-link active" aria-current="page" href="#" style={{marginRight:"10px"}}>About Us</a>
      <a className="nav-link active" aria-current="page" href="#" style={{marginRight:"10px"}}><PersonIcon /></a>
      <a className="nav-link active" aria-current="page" href="#"><ShoppingCartIcon /></a>
      </form>
    </div>
  </div>
</nav>
</div>
  );
};

export default Navbar;

