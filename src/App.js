import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './assets/style/App.css';
import 'bootstrap';
import 'popper.js'
import Contact from '../src/components/Contact'
import {nodejs, javascrit,react_1,php_mysql,wordpress} from './components/Work'
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";


const Work = ({ match }) => (
    <div>
        <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse d-flex justify-content-center d-inline-flex" id="navbarNav">
                    <Link to="/Work/JavaScript" className="nav-item active">
                        <h3 id="hide"  className="nav-link" >JavaScript</h3>
                    </Link>
                    <Link to="/Work/Wordpress" className="nav-item">
                        <h3 className="nav-link" >Wordpress</h3>
                    </Link>
                    <Link className="nav-item" to="/Work/PHP">
                        <h3 className="nav-link "  >Php-MySQL</h3>
                    </Link>
                    <Link to="/Work/ReactJs" className="nav-item">
                        <h3 className="nav-link" >ReactJs</h3>
                    </Link>
                    <Link to="/Work/NodeJS" className="nav-item">
                        <h3 className="nav-link" >NodeJs</h3>
                    </Link>
            </div>
        </nav>
         <div className="container " id="accueil-work">
             <div className="row d-flex justify-content-center">
                 <div className="col-10 d-flex justify-content-center">
                     {javascrit()}
                 </div>
             </div>
         </div>
        <Route exact path="/Work/JavaScript" render={() => (javascrit())}/>
        <Route path="/Work/ReactJs" component={() => (react_1())}/>
        <Route path="/Work/Wordpress" component={() => (wordpress())}/>
        <Route path="/Work/PHP" component={() => (php_mysql())}/>
        <Route path="/Work/NodeJS" component={() => (nodejs())}/>
    </div>
);





class App extends Component {
    render() {
        return (
           <div>
               <nav className="navbar bg-dark navbar-dark " id="navbar">
                   <div>
                       <h1 className="am"><a className="navbar-brand amar" >AMAR SYLL</a></h1>
                   </div>
                   <div className="collapse navbar-collapse d-flex justify-content-end mr-3" id="navbarNav">
                       <h3 className=""><Link to="/" className="nav-link" href="">Home</Link></h3>
                       <h3 className=""><Link to="/Work" className="nav-link" >Work</Link></h3>
                       <h3 className=""><Link to="/About" className="nav-link">About</Link></h3>
                       <h3 className=""><Link to="/Contact" className="nav-link" >Contact</Link></h3>
                   </div>
               </nav>
               <Route path="/" exact component={Home}/>
               <Route path="/About"  component={About}/>
               <Route path="/Work" component={Work}/>
               <Route path="/Contact"  component={Contact}/>
               <Footer/>
           </div>
        );
    }
}

export default App;