import React from "react";
import {Link} from "react-router-dom";
import meteo1 from '../assets/img/javascript/meteo01.png'
import meteo2 from '../assets/img/javascript/meteo02.png'
import meteo3 from '../assets/img/javascript/meteo03.png'
import php1 from '../assets/img/php_mysql/php--1.png'
import php2 from '../assets/img/php_mysql/php--5.png'
import php3 from '../assets/img/php_mysql/php-11.png'
import word1 from '../assets/img/wordpress/wordpress-2.png'
import word2 from '../assets/img/wordpress/wordpress-3.png'
import word3 from '../assets/img/wordpress/wordpress-5.png'
import react1 from '../assets/img/reactjs/react01.png'
import react2 from '../assets/img/reactjs/react02.png'
import react3 from '../assets/img/reactjs/react03.png'
import react4 from '../assets/img/reactjs/react-1.jpg'
import react5 from '../assets/img/reactjs/react--2.png'
import react6 from '../assets/img/reactjs/react--4.png'
import node1 from '../assets/img/nodejs/nodejs-1.png'
import node2 from '../assets/img/nodejs/nodejs-2.png'
import node3 from '../assets/img/nodejs/nodejs-3.png'

/*JAVASCRIPT*/
export const javascrit=()=>(
    <div>
        <div className="container">
            <div className="row  d-flex justify-content-center py-4">
                <div className="col-sm-8">
                    <h4 className="text-black-50">Description project</h4>
                    <article className="description">
                        è un progetto di sito meteo che fornisce i dati meteorologici della
                        città in cui si trova l'utente utilizzando direttamente la sua geolocalizzazione,
                        o i dati di un'altra città utilizzando il nome di questa città.
                        Utilizza una chiave API openweather.
                        Ecco il link <a className="text-success-50"
                                        href="https://codeload.github.com/Amar1921/amar_syll_javascript/zip/master"
                                        style={{color: "blue" ,fontSize: "larger"}} target="_blank">Github</a> del progetto.
                    </article>
                </div>
            </div>
            <div className="row m-3 d-flex justify-content-center">
                <div className="col-sm-10">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"> </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"> </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"> </li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img alt="img1" className="d-block w-100 img-fluid"
                                     src={meteo1}/>
                            </div>
                            <div className="carousel-item">
                                <img alt="img2" className="d-block w-100 img-fluid"
                                     src={meteo2}/>
                            </div>
                            <div className="carousel-item">
                                <img alt="img3" className="d-block w-100 img-fluid"
                                     src={meteo3}/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="col-sm-12 d-flex justify-content-center my-3 p-2">
                    <Link to="work" >
                        <button className="btn btn-outline-dark">Back to Work</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>

    /*BIBLIOTHEQUE REACT*/
);
export const react_1=()=>(

   <div className="container">
    <div className="row d-flex justify-content-center py-4">
        <div className="col-sm-8 text-black-50">
            <h4>Description project</h4>
            <article className="description">
                Questo progetto è realizzato con React, è una sorta di biblioteca online con google book come risorsa.
                Ecco il link <a className="text-success-50"
                                href="https://codeload.github.com/Amar1921/amar-syll-react/zip/master?token=ANY7SAXOKHPIA7FYBN2BVQ27HAKL4"
                                style={{color: "blue" ,fontSize: "larger"}} target="_blank">Github</a> dell'intero progetto.
            </article>
        </div>
    </div>
    <div className="row m-3 d-flex justify-content-center">
        <div className="col-sm-10">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"> </li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"> </li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"> </li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img alt="img1" className="d-block w-100 img-fluid" src={react4}/>
                    </div>
                    <div className="carousel-item">
                        <img alt="img2" className="d-block w-100 img-fluid" src={react5}/>
                    </div>
                    <div className="carousel-item">
                        <img alt="img2" className="d-block w-100 img-fluid" src={react6}/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"> </span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon  bg-dark" aria-hidden="true"> </span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div className="col-sm-12 d-flex justify-content-center my-3 p-2">
            <a href="../work.html">
                <button className="btn btn-outline-dark">Back to Work</button>
            </a>
        </div>
    </div>
    <div className="row d-flex justify-content-center py-4">
        <div className="col-sm-8 ">
            <h4 className="text-black-50">Description project</h4>
            <article className="description">
                è un altro progetto di sito web di e-commerce, ma questa volta è stato fatto con REACT,
                non era uno dei progetti da fare durante la mia formazione ma React è un framework che mi piace
                quindi ho usato il mio tempo libero per fare altri progetti come questo per esempio
                Ecco il link <a href="https://codeload.github.com/Amar1921/e-commerce-react/zip/master"
                                target="_blank" className="text-success-50"
                                style={{color: "blue" ,fontSize: "larger"}}>Github</a> del progetto.
            </article>
        </div>
    </div>
    <div className="row m-3 d-flex justify-content-center">
        <div className="col-sm-10">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"> </li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"> </li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"> </li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img alt="img1" className="d-block w-100 img-fluid" src={react1}/>
                    </div>
                    <div className="carousel-item">
                        <img alt="img2" className="d-block w-100 img-fluid" src={react2}/>
                    </div>
                    <div className="carousel-item">
                        <img alt="img3" className="d-block w-100 img-fluid" src={react3}/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                   data-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark " aria-hidden="true"> </span>
                    <span className="sr-only ">Previous</span>
                </a>
                <a className="carousel-control-next " href="#carouselExampleIndicators" role="button"
                   data-slide="next">
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"> </span>
                    <span className="sr-only ">Next</span>
                </a>
            </div>
        </div>
        <div className="col-sm-12 d-flex justify-content-center my-3 p-2">
            <a href="../work.html">
                <button className="btn btn-outline-dark">Back to Work</button>
            </a>
        </div>
    </div>
</div>
    /*GROCERY */
);

/*TODO_LIST*/
export const php_mysql=()=>(
    <div className="container">
        <div className="row d-flex justify-content-center py-4">
            <div className="col-sm-8 ">
                <h4 className="text-black-50">Description project</h4>
                <article className="description">
                    Questo è il progetto PHP & MySQL, un sito TodoList che permette all'utente di creare un account
                    personale.
                    Dopo di che sarà in grado di creare una lista di compiti da fare e definire il loro stato, cioè se è
                    in corso,
                    finito ecc...
                    Ecco il link <a href="https://codeload.github.com/Amar1921/amar-syll-php/zip/master" target="_blank"
                                    className="text-success-50" style={{color: "blue" ,fontSize: "larger"}}>Github</a> del
                    progetto.
                </article>
            </div>
        </div>
        <div className="row m-3 d-flex justify-content-center">
            <div className="col-sm-10">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"> </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"> </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"> </li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img alt="img1" className="d-block w-100 img-fluid"
                                 src={php1}/>
                        </div>
                        <div className="carousel-item">
                            <img alt="img2" className="d-block w-100 img-fluid"
                                 src={php2}/>
                        </div>
                        <div className="carousel-item">
                            <img alt="img3" className="d-block w-100 img-fluid"
                                 src={php3}/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-sm-12 d-flex justify-content-center my-3 p-2">
                <a href="../work.html">
                    <button className="btn btn-outline-dark">Back to Work</button>
                </a>
            </div>
        </div>
    </div>

);
/* CHAT_APP*/
export const nodejs=()=>(
    <div className="container">
        <div className="row d-flex justify-content-center py-5">
            <div className="col-sm-8">
                <h4 className="text-black-50">Description project</h4>
                <article className="description">
                    è un progetto di web chat tra utenti connessi sullo stesso server. E' realizzato con Nodejs .
                    permette di chattare in tempo reale e di vedere chi è connesso come nel applicazione whatsapp.
                    Ecco il link <a className="text-success-50"
                                    href="https://codeload.github.com/Amar1921/amar-syll-nodejs/zip/master"
                                    style={{color: "blue", fontSize: "larger"}} target="_blank">Github</a> del progetto.
                </article>
            </div>
        </div>
        <div className="row m-3 d-flex justify-content-center">
            <div className="col-sm-10">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"> </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"> </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"> </li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img alt="img1" className="d-block w-100 img-fluid" src={node1}/>
                        </div>
                        <div className="carousel-item">
                            <img alt="img2" className="d-block w-100 img-fluid" src={node2}/>
                        </div>
                        <div className="carousel-item">
                            <img alt="img3" className="d-block w-100 img-fluid" src={node3}/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-sm-12 d-flex justify-content-center my-3 p-2">
                <a href="../work.html">
                    <button className="btn btn-outline-dark">Back to Work</button>
                </a>
            </div>
        </div>
    </div>

);
/* WORDPRESS*/
export const wordpress=()=>(
    <div className="container">
        <div className="row d-flex justify-content-center py-4">
            <div className="col-8 ">
                <h4 className="text-black-50">Description project</h4>
                <article className="description">
                    Questo è il mio progetto wordpress, mi è stato chiesto di realizzare un sito per promuovere
                    un'attività commerciale locale.
                    Mi sono ispirato a mia sorella per realizzare un sito di e-commerce.
                    Sono partito da un tema vuoto personalizzato da me stesso utilizzando l'estensione elementor.
                    Ecco il link <a
                    href="https://codeload.github.com/Amar1921/amar-syll-wordpress-1/zip/master?token=ANY7SASULKTTLWCTWRN5XR27HBMU6"
                    target="_blank" className="text-success-50" style={{color: "blue" ,fontSize: "larger"}}>Github</a> del
                    progetto.
                </article>
            </div>
        </div>
        <div className="row m-3 d-flex justify-content-center">
            <div className="col-sm-10">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"> </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"> </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"> </li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img alt="img1" className="d-block w-100 img-fluid"
                                 src={word1}/>
                        </div>
                        <div className="carousel-item">
                            <img alt="img2" className="d-block w-100 img-fluid"
                                 src={word2}/>
                        </div>
                        <div className="carousel-item">
                            <img alt="img3" className="d-block w-100 img-fluid"
                                 src={word3}/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span aria-hidden="true" className="carousel-control-prev-icon bg-dark"> </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span aria-hidden="true" className="carousel-control-next-icon bg-dark"> </span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-sm-12 d-flex justify-content-center my-3 p-2">
                <a href="../work.html">
                    <button className="btn btn-outline-dark">Back to Work</button>
                </a>
            </div>
        </div>
    </div>
);