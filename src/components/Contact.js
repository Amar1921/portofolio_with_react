import React from "react";

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
export default Contact