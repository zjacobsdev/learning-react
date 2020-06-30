import React from 'react';
import '../App.css';

function Header() {

  const style ={
    
    
    color: 'red',

  }

  return (
    <div class ="header">

      <img class = "profile" src= {process.env.PUBLIC_URL + '/img/buddy-placeholder-square.jpg'} alt={"Profile Pic"}/> 
      <div class ="name-tag">
        
        <h1> Zahmir Jacobs</h1>
      <span>Software Developer/Technologist</span>
      </div>
      
      
    </div>

  )

    
}

export default Header;
