import React from "react";
import "../styles/Skill.scss";
import computer from "../assets/Skills/computer.png"
import IT from "../assets/Skills/IT.png"
import SkillBar from "./SkillBar";
import { faHtml5, faCss3 , faJs, faReact, faSass, faBootstrap, faGithub, faFigma} from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
    return (
        <div className="skills container" id="expertise">
            <h3>Mon expertise</h3>
            <div className="row">
                <div className="col-md-6 col-12 d-flex flex-column justify-content-around align-items-center gap-0">
                    <SkillBar icon={faHtml5} skillName="HTML" skillLevel={75} />
                    <SkillBar icon={faCss3} skillName="CSS" skillLevel={75} />
                    <SkillBar icon={faJs} skillName="JS" skillLevel={60} />
                    <SkillBar icon={faReact} skillName="React" skillLevel={50} />
                </div>
                <div className="col-md-6 col-12">
                    <img src={computer} alt="skills" className="w-100 h-100" />
                </div>
            </div>

            <div className="row my-5">
                <div className="col-md-6 col-12 md-mt-2">
                    <img src={IT} alt="skills" className="w-100 h-100" />
                </div>
                <div className="col-md-6 col-12 d-flex flex-column justify-content-around align-items-center gap-0">
                    <SkillBar icon={faSass} skillName="Sass" skillLevel={60} />
                    <SkillBar icon={faBootstrap} skillName="Bootstrap" skillLevel={60} />
                    <SkillBar icon={faGithub} skillName="Github" skillLevel={70} />
                    <SkillBar icon={faFigma} skillName="Figma" skillLevel={50} />
                </div>
            </div>
        </div>
    );
}
