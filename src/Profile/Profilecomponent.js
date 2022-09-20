import React from 'react';
function Applica(props) {
  
    return (
    <div style={{ color: 'green',  padding: 20 }}>
    <h2>Hi, {props.fullName}</h2>
    <h2>Your, {props.bio}</h2>
    <h2>And your profession is, {props.profession}</h2>
     {props.children}
     
    </div>
    )}

  export default Applica;
 

  
  