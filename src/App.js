import React from 'react';
import NavBar from './componets/NavBar.js'
import AboutMe from './componets/aboutMe.js'
import Services from './componets/services'
import RecentWork from './componets/recentWork'
import ContactMe from './componets/contactMe'
import Welcome from './componets/Welcome'
import InfiniteScroll from 'react-infinite-scroll-component'

import './App.css';



function App() {


  return (

    <div class = "App">
       <div class ='bg-overlay'></div>
      
       <NavBar> </NavBar>
      <div class ="content">
       <Welcome></Welcome>
       <AboutMe></AboutMe>
       <Services></Services>
       <RecentWork></RecentWork>
       <ContactMe></ContactMe>

      </div>


    </div>
  
  )
  
    
    // ========================================
}

export default App;
