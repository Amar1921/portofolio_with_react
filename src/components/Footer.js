import React from "react";

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

export default Footer