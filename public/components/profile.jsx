import React, { Component } from 'react';

class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={imgBg}>
            <div style = {test}> </div>
        </div> 
        );
    }
}
 const test = {
    margin: 0,
    padding: 0,
    maxWidth: '100%',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundImage: `url(${require("../img/background-2.jpg")})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',  
    backgroundSize: 'cover'
 }
  const imgBg = {
        maxWidth: '100%',
        height: 'auto',
        width: 'auto'
    }
export default Profile;