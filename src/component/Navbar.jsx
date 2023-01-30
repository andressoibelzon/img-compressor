import React from 'react';
import logo from '../assets/logo-femora.png';
import img from '../assets/process.png';

const Navbar = () => {
  return (

    <div className="container text-center my-5">
      <div className='row'>
        <div className='col col-sm-3'>
          <img src={logo} className="d-block mx-lg-auto img-fluid " alt="Logo Femora" width="200px" loading="lazy"></img>
        </div>
        <div className='col col-sm-1'></div>
        <div className='col col-sm-8 '>
          <img src={img} class="d-block mx-lg-auto img-fluid " alt="Process"  loading="lazy"></img>
        </div>
      </div>
    </div>
  )
}

export default Navbar