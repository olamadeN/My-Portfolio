import  "./about.css";
import me from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container aboutContainer">
                <div className="aboutMe">
                    <div className="aboutMeImage">
                        <img src={me} alt=" About Me" />
                    </div>
                </div>

                <div className="aboutContent">
                    <div className="aboutCards">
                        <article className="aboutCard">
                            <FaAward className="aboutIcon" />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className="aboutCard">
                            <FiUsers  className="aboutIcon" />
                            <h5>Clients</h5>
                            <small> Worldwide</small>
                        </article>

                        <article className="aboutCard">
                            <VscFolderLibrary className="aboutIcon" />
                            <h5>Projects</h5>
                            <small>5+ Completed</small>
                        </article>
                    </div>

                    <p>
                    Hello, i'm Olamade Nissi Olumuyiwa, I am a web developer. I like building websites, especialy those with challenging designs, I like that satisfactory feeling I get when I reproduces a very complex design.
                        I like learning new things and tricks and i am ready to work with you.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>            
        </section>
    );
}
 
export default About;