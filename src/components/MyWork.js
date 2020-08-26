import React from "react";
import meteo1 from '../assets/img/javascript/meteo01.png'
import php1 from '../assets/img/php_mysql/php--1.png'
import word2 from '../assets/img/wordpress/wordpress-3.png'
import react1 from '../assets/img/reactjs/react01.png'
import node3 from '../assets/img/nodejs/nodejs-3.png'
import react5 from '../assets/img/reactjs/react--2.png'
function MyWork() {
return(
    <div className="container  my-5">
        <div className="row my-5">
            <div className="col-12">
                <h3 className="text-center">MY WORK</h3>
            </div>
        </div>
        <div className="row my-5 centered">
            <div className="col-lg-4 text-center">
             <img className="img-responsive img img-thumbnail"
                                                          src={meteo1} alt=""/>
            </div>
            <div className="col-lg-4 text-center">
                <img className="img-responsive img img-thumbnail"
                                                       src={php1} alt=""/>
            </div>
            <div className="col-lg-4 text-center">
               <img className="img-responsive img img-thumbnail"
                                                        src={node3} alt=""/>

            </div>
        </div>
        <div className="row mt centered">
            <div className="col-lg-4 text-center">
                <img className="img-responsive img img-thumbnail"
                                                      src={word2} alt=""/>
            <div className="col-lg-4 text-center">
            <img className="img-responsive img img-thumbnail"
                                                         src={react5} alt=""/>
            </div>
            <div className="col-lg-4 text-center">
                <img className="img-responsive img img-thumbnail"
                                                       src={react1} alt=""/>
            </div>
        </div>

    </div>
    </div>
)
}
export default MyWork