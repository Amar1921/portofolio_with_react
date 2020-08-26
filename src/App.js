import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './assets/style/App.css';
import 'bootstrap';
import 'jquery'
import 'popper.js'
import logo from './assets/img/developpeur-full-stack.jpg'
import execellence from './assets/img/certificats/Certificat_di_eccellenza.png'
import Git_And_Github from './assets/img/certificats/Certificat_Git_and_Github.png'
import Webpack from './assets/img/certificats/certificat_webpack4.png'
import Finished from './assets/img/certificats/Finished_FullStack_developer.png'
import Fullsatck from './assets/img/certificats/fullstack_developer.png'
import Java from './assets/img/certificats/java_les_fondamentaux.png'
import logojs from './assets/img/javascript/Javascript.jpg'
import logoht from './assets/img/html5-css3.png.webp'
import logenode from './assets/img/nodejs/nodejs-frameworks.webp'
import logophp from './assets/img/php_mysql/images.png'
import logowps from './assets/img/wordpress/wordpress_page.jpg'
import logoreact from './assets/img/reactjs/reactjs.png'
import {nodejs, javascrit,react_1,php_mysql,wordpress} from '../src/components/Work'
import MyWork from "./components/MyWork";


const Home = () => (
    <div>
        <div className="container mb-4">
            <div className="row  d-flex justify-content-center">
                <div className="col-8 d-flex justify-content-center mt-3 ">
                    <img src={logo} className="img-fluid img-amar" alt="amar"/>
                </div>
                <div className="col-8">
                    <h1 className="text-center">About me</h1>
                    <article className="aboutMe">
                        Ero uno studente di Master 2 in fisica, chimica e scienze dei materiali.
                        Sono sempre stato molto appassionato di computer, soprattutto di linguaggi
                        di programmazione. Ho iniziato ad imparare da solo. Ho comprato molti corsi
                        online per imparare le basi. Attraverso il training online per <span style={{fontWeight: "bold"}}>sviluppatori
                FullStack</span> su <a href="https://www.start2impact.it/percorsi/sviluppo-web-app/"
                                       target="_blank">Start2Impact</a>
                        sono stato in grado di consolidare le mie conoscenze
                        attraverso <Link to="work">progetti</Link> reali che ho portato a termine con successo<br/>.

                        <Link to="About" className="btn btn-outline-dark mt-4" href="about.html#suite">Learn more >></Link>
                    </article>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center py-3">
                    <h2>My SKILLS</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-around my-2 ">
                <div className="col-sm-4 d-flex justify-content-center">
                    <img src={logojs}
                         className="img-responsive my-1 zoom  rounded-circle image" alt="logo javascript"/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <img src={logoht} className="img-responsive my-1 zoom  rounded-circle image"
                         alt="logo html/css"/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <img src={logoreact} className="img-responsive my-1 zoom  rounded-circle image"
                         alt="Logo reactjs"/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <img src={logowps}
                         className="img-responsive my-1 zoom  rounded-circle image" alt="logo wordpress"/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <img src={logophp}
                         className="img-responsive my-1 zoom  rounded-circle image" alt="logo php_mysql"/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <img src={logenode}
                         className="img-responsive my-1 zoom  rounded-circle image" alt="logo nodejs"/>
                </div>
            </div>
            <hr style={{width: "80%"}}/>
        </div>
    </div>
);

const About = () => (
   <div>
       <div className="container mb-4">
           <div className="row d-flex justify-content-center">
               <div className="col-8 d-flex justify-content-center mt-3 ">
                   <img alt="logo" className="img-fluid img-amar" src={logo}/>
               </div>
               <div className="col-8">
                   <article className="aboutMe">
                           Ero uno studente di Master 2 in fisica, chimica e scienze dei materiali.
                           Sono sempre stato molto appassionato di informatica, soprattutto di linguaggi
                           di programmazione. Ho iniziato ad imparare da solo. Ho comprato molti corsi
                           online per imparare le basi. Attraverso il training online per <span style={{fontWeight: "bold"}}>sviluppatori
                           FullStack</span> su <a href="https://www.start2impact.it/percorsi/sviluppo-web-app/"
                                           target="_blank">Start2Impact</a>
                           sono stato in grado di consolidare le mie conoscenze
                           attraverso progetti reali che ho portato a termine con successo. <br/>
                           Ecco il certificato che ho ricevuto alla fine : <a
                           href="https://www.credential.net/7936eaec-0e3a-4eb4-b339-49f89a2bbb7e#gs.csp0su"
                           id="suite" target="_blank">Certificato</a>
                           Ora mi sento pronto ad entrare nel mondo del lavoro continuando a studiare
                           sapendo che il campo dello sviluppo del web è in continua evoluzione.
                           Sono molto adattabile e imparo molto velocemente, il che mi ha permesso
                           di studiare all' <a
                           href="https://www.ucad.sn/index.php?option=com_content&view=article&id=774&Itemid=370"
                           target="_blank">Università</a> Cheikh Anta Diop di Dakar(SN)
                           contemporaneamente
                           ad alcuni linguaggi di programmazione. <br/>
                   </article>

               </div>
           </div>
       </div>
       <div className="container">
           <div className="row d-flex justify-content-center py-3">
               <div className="col-5 pt-3">
                   <h1 className="text-center">
                       HTML/CSS
                   </h1>
               </div>
               <div className="col-5 pt-3">
                   <div className="progress">
                       <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" className="progress-bar bg-warning"
                            role="progressbar" style={{width: "80%"}}>80%
                       </div>
                   </div>
               </div>
               <div className="col-5 pt-3">
                   <h1 className="text-center">
                       JavaScript
                   </h1>
               </div>
               <div className="col-5 pt-3">
                   <div className="progress">
                       <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-warning"
                            role="progressbar" style={{width: "75%"}}>75%
                       </div>
                   </div>
               </div>
               <div className="col-5">
                   <h1 className="text-center">
                       PHP/MySQL
                   </h1>
               </div>
               <div className="col-5 pt-3">
                   <div className="progress ">
                       <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-warning"
                            role="progressbar" style={{width: "65%"}}>65%
                       </div>
                   </div>
               </div>
               <div className="col-5">
                   <h1 className="text-center">
                       NodeJs
                   </h1>
               </div>
               <div className="col-5 pt-3">
                   <div className="progress">
                       <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-warning"
                            role="progressbar" style={{width: "70%"}}>70%
                       </div>
                   </div>
               </div>
               <div className="col-5">
                   <h1 className="text-center">
                       ReactJS
                   </h1>
               </div>
               <div className="col-5 pt-3">
                   <div className="progress">
                       <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-warning"
                            role="progressbar" style={{width: "75%"}}>75%
                       </div>
                   </div>
               </div>
               <div className="col-5">
                   <h1 className="text-center">
                       Wordpress
                   </h1>
               </div>
               <div className="col-5 pt-3">
                   <div className="progress">
                       <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-warning"
                            role="progressbar" style={{width: "80%"}}>80%
                       </div>
                   </div>
               </div>
               <div className="col-8">

                       <ins><h1 className="text-center">Frameworks</h1></ins>
               </div>
               <div className="col-12 mt-3">
                   <h4 className="text-center"> Bootstrap, jquery, Ajax, Laravel, Symphony</h4>
               </div>
           </div>
           <div className="row d-flex justify-content-center py-3">
               <div className="col-8">

                       <ins><h2 className="text-center pb-3">Altri linguaggi di programazioni</h2></ins>
               </div>
               <div className="col-5">
                   <h2 className="text-center">Java</h2>
               </div>
               <div className="col-5 pt-3 ">
                   <div className="progress ">
                       <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-warning"
                            role="progressbar" style={{width: "80%"}}>50%
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div className="container">
           <div className="row d-flex justify-content-center">
               <div className="col-8">
                       <ins><h2 className="text-center ">Certificati</h2></ins>
               </div>
               <div className="col-md-6">
                   <div id="carouselBasicExample" className="carousel slide carousel-fade" data-ride="carousel">
                       <ol className="carousel-indicators ">
                           <li data-target="#carouselBasicExample" data-slide-to="0" className="active "> </li>
                           <li data-target="#carouselBasicExample" data-slide-to="1"> </li>
                           <li data-target="#carouselBasicExample" data-slide-to="2"> </li>
                           <li data-target="#carouselBasicExample" data-slide-to="3"> </li>
                           <li data-target="#carouselBasicExample" data-slide-to="4"> </li>
                           <li data-target="#carouselBasicExample" data-slide-to="5"> </li>
                       </ol>
                       <div className="carousel-inner">

                           <div className="carousel-item active">
                               <img
                                   src={Finished}
                                   className="d-block w-100"
                                   alt="..."
                               />
                           </div>
                           <div className="carousel-item">
                               <img
                                   src={Fullsatck}
                                   className="d-block w-100"
                                   alt="..."
                               />
                           </div>
                           <div className="carousel-item">
                               <img
                                   src={execellence}
                                   className="d-block w-100"
                                   alt="..."
                               />
                           </div>
                           <div className="carousel-item">
                               <img
                                   src={Git_And_Github}
                                   className="d-block w-100"
                                   alt="..."
                               />
                           </div>
                           <div className="carousel-item">
                               <img
                                   src={Webpack}
                                   className="d-block w-100"
                                   alt="..."
                               />
                           </div>
                           <div className="carousel-item">
                               <img
                                   src={Java}
                                   className="d-block w-100"
                                   alt="..."
                               />
                           </div>
                       </div>
                       <a
                           className="carousel-control-prev"
                           href="#carouselBasicExample"
                           role="button"
                           data-slide="prev"
                       >
                           <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"> </span>
                           <span className="sr-only">Previous</span>
                       </a>
                       <a
                           className="carousel-control-next"
                           href="#carouselBasicExample"
                           role="button"
                           data-slide="next"
                       >
                           <span className="carousel-control-next-icon bg-dark" aria-hidden="true">  </span>
                           <span className="sr-only">Next</span>
                       </a>
                   </div>
               </div>
           </div>
       </div>
   </div>
);

const Contact = () => (

        <div className="container-contact100 mb-3">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form">
				<span className="contact100-form-title">
					Contact Me
				</span>
                    <div className="wrap-input100 validate-input" data-validate="Please enter your name">
                        <input className="input100" name="name" placeholder="Full Name" type="text"/>
                            <span className="focus-input100"> </span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please enter your email: e@a.x">
                        <input className="input100" name="email" placeholder="E-mail" type="text"/>
                            <span className="focus-input100"> </span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
                        <input className="input100" name="phone" placeholder="Phone" type="text"/>
                            <span className="focus-input100"> </span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Please enter your message">
                        <textarea className="input100" name="message" placeholder="Your Message"> </textarea>
                        <span className="focus-input100"> </span>
                    </div>

                    <div className="container-contact100-form-btn mt-2">
                        <button className="contact100-form-btn">
                            <span>
                                <i aria-hidden="true" className="fa fa-paper-plane-o m-r-6"> </i>
                                Send
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

);

const Work = ({ match }) => (
    <div>
        <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse d-flex justify-content-center d-inline-flex" id="navbarNav">
                    <Link to="/Work/JavaScript" className="nav-item active">
                        <h3 className="nav-link" >JavaScript</h3>
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
        <Route exact path="/myWork" render={() => (MyWork)}/>
        <Route exact path="/Work/JavaScript" render={() => (javascrit())}/>
        <Route path="/Work/ReactJs" component={() => (react_1())}/>
        <Route path="/Work/Wordpress" component={() => (wordpress())}/>
        <Route path="/Work/PHP" component={() => (php_mysql())}/>
        <Route path="/Work/NodeJS" component={() => (nodejs())}/>
    </div>
);


const Footer =()=> <div className="container-fluid footer">
                        <div className="row">
                            <div className="col-lg-4">
                                <h4>My Bunker</h4>
                                <p>
                                    Desio via per Cesano Maderno,29<br/>
                                    +39 3884035746, <br/>
                                    Monza, Lombardia. <br/>
                                    Copyright&copy; <span id="date"> </span>
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <h4>My Links</h4>
                                <ul className="social">
                                    <li><a style={{color: "white"}} href="https://www.facebook.com/Amar.syll/" target={"_blank"}><i
                                        className="icon-facebook fa fa-facebook icon-social"> </i>Facebook</a></li>
                                    <li><a style={{color: "white"}} href="https://github.com/Amar1921" target="_blank"><i
                                        className="icon-github fa fa-github icon-social"> </i>Github</a>
                                    </li>
                                    <li><a style={{color: "white"}} href="https://www.linkedin.com/in/amar-syll-20b595198/"
                                           target="_blank"><i
                                        className="icon-linkedin fa fa-linkedin icon-social"> </i>Linkedin</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h4>Note</h4>
                                <p>Questo porofolio è stato realizzato con HTML/CSS anche con un po' di PHP e di JavScript. C'è
                                    anche una parte di bootstrap come base per il CSS. .</p>
                            </div>
                        </div>
                   </div>


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