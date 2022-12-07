import "./Description.scss";
import Arrow from "@/assets/icons/arrow.svg";

export default function Description() {
    return (
        <div className="skills-description">
            <h2>SOME <span className="strong">SKILLS</span></h2>
            <p>
                Combine patience, determination, and persistence to troubleshoot client issues. 
                Dynamic, results-oriented problem solver. Strong analytical skills
                Talented at abstracting problems and generating solutions. 
            </p>
            <p>
                Enjoy working as a team member as well as independently. 
                Dedication to every client’s success.
            </p>
            <p>
                Ability to talk and conduct project in French and English. 
                Proven adaptability to differing cultural and business environments.
            </p>
            <p><a href="#experiences-section"><button>read more&nbsp;
                <img className="arrow" src={Arrow}></img></button></a></p>
        </div>
    );
}