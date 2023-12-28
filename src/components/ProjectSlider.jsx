import React from "react";
import ProjectCard from "./ProjectCard";
import SS1 from "../assets/SS/SS1.png"
import SS2 from "../assets/SS/SS2.png"
import FE1 from "../assets/FE/FE1.png"
import FE2 from "../assets/FE/FE2.png"
import FE3 from "../assets/FE/FE3.png"
import FE4 from "../assets/FE/FE4.png"
import FE5 from "../assets/FE/FE5.png"
import AB1 from "../assets/AB/AB1.png"
import AB2 from "../assets/AB/AB2.png"
import AB3 from "../assets/AB/AB3.png"
import BA1 from "../assets/BA/BA1.png"
import BA2 from "../assets/BA/BA2.png"

export default function ProjectSlider() {
    return (
        <div className="container project-slider" id="portfolio">
            <div className="row d-flex justify-content-between align-items-center flex-wrap">
                <div className="col-lg-3 col-md-6 col-12 mb-4">
                    <ProjectCard 
                        title="Sportsee" 
                        description="Création d'un tableau de bord d'analytics avec React, Redux, Recharts, Node.js" 
                        imageUrl={SS1}
                        additionalImages={[SS2]}
                    />
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                    <ProjectCard 
                        title="Fisheye" 
                        description="Création d'un site accessible pour une plateforme de photographes avec Sass, HTML & CSS" 
                        imageUrl={FE1}
                        projectUrl="https://lucadur.github.io/Fisheye/" 
                        additionalImages={[FE2, FE3, FE4, FE5]}
                    />
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                    <ProjectCard 
                        title="Argent Bank" 
                        description="Création d'une application bancaire avec React, Redux et relation via une API externe" 
                        imageUrl={AB1}
                        additionalImages={[AB2, AB3]}
                    />
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                    <ProjectCard 
                        title="Billed App" 
                        description="Débuggage d'une solution SAAS RH, mise en place des tests unitaires & d'intégration"
                        imageUrl={BA1}
                        additionalImages={[BA2]}
                    />
                </div>
            </div>
        </div>
    );
}
