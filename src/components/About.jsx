import React from "react";
import Profil from "../assets/About/Profil.jpg";

export default function About() {
    return (
        <div className="py-5" id="lucas">
            <div className="about container w-50h-50">
                <div className="row d-flex align-items-center gy-4 gy-md-0">
                    <div className="col-12 col-md-6"> 
                        <h1 className="fw-bold">Bonjour, je suis Lucas Développeur Front-end</h1>
                        <h2 className="fw-light">Bienvenue sur mon portfolio</h2>
                        <button type="button" className="btn btn-info my-5">Mes compétences</button>
                    </div>
                
                    <div className="col-12 col-md-6"> 
                        <img src={Profil} alt="Lucas Durietz" className="w-100 h-65"/> 
                    </div>
                </div>
             </div>
        </div>
    );
}
