import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
 import Article from './pages/Article'; 
 import Article2 from './pages/Article2'; 
 import Article3 from './pages/Article3';

 class Routing extends Component { 
     render() { 
         return ( 
         <div> 
             <h1>Coba Routing</h1> 
             <ul> 
                 <li><Link to="/">Beranda</Link></li> 
                 <li><Link to="/header">Article 1</Link></li> 
                 <li><Link to="/article">Article 2</Link></li> 
                 <li><Link to="/footer">Article 3</Link></li> 
             </ul>
            <div> 
                <Route path="/" component={'Home'}/> 
                <Route path="/article" component={Article}/> 
                <Route path="/header" component={Article2}/> 
                <Route path="/footer" component={Article3}/> 
            </div> 
        </div> 
        ); 
    } 
} 
export default Routing;  