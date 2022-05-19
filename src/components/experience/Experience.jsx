import './experience.css';
import { BsPatchCheckFill} from "react-icons/bs";
const Experience = () => {
    return ( 
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2> My Experience</h2>
            <div className="container experienceContainer">
                <div className="experienceFrontend">
                    <h3>Frontend Development</h3>
                    <div className="experienceContent">
                        <article className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                            
                        </article>
                        <article className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">intermediate</small>
                            </div>
                            
                        </article>
                        <article className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>Java Script</h4>
                                <small className="text-light">intermediate</small>
                            </div>
                            
                        </article>
                        <article className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                            
                        </article>
                        <article className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            
                        </article>
                    </div>
                </div>
                <div className="experienceBackend">
                <h3>Backend Development</h3>
                    <div className="experienceContent">
                        <article className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                            
                        </article>
                        <article className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>Django</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            
                        </article>
                        <article className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>mySQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            
                        </article>
                        <article className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                            
                        </article>
                    </div>
            
                </div>
            </div>
        </section>
     );
}
 
export default Experience;