import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillBar = ({ icon, skillName, skillLevel }) => {
    return (
        <div className="bar container bg-light d-flex align-items-center justify-content-between" style={{ height: '50px' }}>
            <div className="progressbar-title d-flex align-items-center justify-content-center gap-2" style={{ minWidth: '150px' }}>
                <div className="icon-container">
                    <FontAwesomeIcon icon={icon} className="icon"/>
                </div>
                <div className="text-container">
                    <p className="pt-3 pe-1">{skillName}</p>
                </div>
            </div>
            <div className="progress w-100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={skillLevel} aria-valuemin="0" aria-valuemax="100" style={{ width: `${skillLevel}%` }}></div>
            </div>
        </div>
    );
};

export default SkillBar