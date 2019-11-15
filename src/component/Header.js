import React, { Component } from 'react'; 
import {ButtonToolbar, Button} from 'react-bootstrap'

class Header extends Component {   
    render() {     
        return (       
        <div> 
            <ButtonToolbar>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="info">Info</Button>
  <Button variant="light">Light</Button>
  <Button variant="dark">Dark</Button>
  <Button variant="link">Link</Button>
</ButtonToolbar>        
            <button className="btn-primary">Submit</button>
            <ul>           
                <li>Beranda</li>           
                <li>Tentang</li>           
                <li>Kontak</li>         
            </ul>       
        </div>     
        );   
    } 
} 
export default Header;