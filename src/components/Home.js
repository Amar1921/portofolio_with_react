import React from "react";
import logo from "../assets/img/developpeur-full-stack.jpg";
import {Link} from "react-router-dom";
import logojs from "../assets/img/javascript/Javascript.jpg";
import logoht from "../assets/img/html5-css3.png.webp";
import logoreact from "../assets/img/reactjs/reactjs.png";
import logowps from "../assets/img/wordpress/wordpress_page.jpg";
import logophp from "../assets/img/php_mysql/images.png";
import logenode from "../assets/img/nodejs/nodejs-frameworks.webp";


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
export default Home