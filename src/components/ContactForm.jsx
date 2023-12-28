import React from "react";
import Contact from "../assets/Contact/Contact.jpg";

export default function ContactForm() {
    return (
        <div className="container bg-light my-5">
            <h2 className="text-center">Une idée de création web ? </h2>
            <h3 className="text-center mb-5">Contactez moi !</h3>
            <div className="row">
                <div className="col-md-6 text-center">
                    <img src={Contact} alt="Contact" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Prénom</label>
                            <input type="text" className="form-control" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="surname"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Adresse email</label>
                            <input type="email" className="form-control" id="email"/>
                            <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
