import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <p>
            <footer>
                <p>Author: Hege Refsnes</p>
                <p><a href="mailto:hege@example.com">hege@example.com</a></p>
            </footer>
            </p>
        );
    }
}
  const imgBg = {
        height: 'auto',
        width: 'auto'
    }
export default Footer;