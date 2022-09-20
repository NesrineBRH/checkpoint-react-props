import logo from './logo.svg';
import './App.css';
import React from 'react';
import Profilecomponent from './Profile/Profilecomponent';
import fonction from './Profile/fonction.js';
//import PropTypes from 'prop-types';


    function App (){
    function handleName()
        { alert ('hey')}

    return (
<div classname="App">
<Profilecomponent fullName="Nesrine Ben" bio='expirience since' profession='SEO'  data={handleName}>
<img src={"Me.jpg"} width={200} alt="Nes.BRH"/></Profilecomponent>

<fonction data={handleName}/>
      </div>
      );}
 
// Applica.propTypes = {
//   fullName, bio, profession: PropTypes.string
//   //handleName:PropTypes.func
// };
export default App;



