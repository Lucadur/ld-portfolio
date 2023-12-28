import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="mb-2">Connectez-vous avec moi sur les réseaux sociaux</p>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
