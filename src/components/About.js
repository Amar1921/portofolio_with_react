import React from "react";
import logo from "../assets/img/developpeur-full-stack.jpg";
import Finished from "../assets/img/certificats/Finished_FullStack_developer.png";
import Fullsatck from "../assets/img/certificats/fullstack_developer.png";
import execellence from "../assets/img/certificats/Certificat_di_eccellenza.png";
import Git_And_Github from "../assets/img/certificats/Certificat_Git_and_Github.png";
import Webpack from "../assets/img/certificats/certificat_webpack4.png";
import Java from "../assets/img/certificats/java_les_fondamentaux.png";

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

export default About