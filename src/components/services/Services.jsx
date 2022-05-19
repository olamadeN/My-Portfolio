import "./services.css"
import { BiCheck } from "react-icons/bi";


const Services = () => {
    return (    

        <section id="services">
            <h5>What I Offer</h5>
            <h2> My Services</h2>

            <div className="container servicesContainer">
                <article className="service">
                    <div className="serviceHead">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="serviceList">
                        <li>
                            <BiCheck className="serviceList-icon" />
                            <p>Coming Soon. </p>
                        </li>
                        {/*<li>
                            <BiCheck className="serviceList-icon" />
                            <p>Lorem ipsum dolor sit reiciendis corporis. </p>
                        </li>
                        <li>
                            <BiCheck className="serviceList-icon" />
                            <p>Lorem ipsum dolor sit reiciendis corporis. </p>
                        </li>
                        <li>
                            <BiCheck className="serviceList-icon" />
                            <p>Lorem ipsum dolor sit reiciendis corporis. </p>
                        </li>
                        <li>
                            <BiCheck className="serviceList-icon" />
                            <p>Lorem ipsum dolor sit reiciendis corporis. </p>
                        </li>*/}
                    </ul>
                </article>


                <article className="service">
                    <div className="serviceHead">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="serviceList">
                        <li>
                            <BiCheck className="serviceList-icon" />
                            <p>Front End Web Development with React js</p>
                        </li>
                        <li>
                            <BiCheck className="serviceList-icon" />
                            <p> Responsive websites </p>
                        </li>
                        <li>
                            <BiCheck className="serviceList-icon" />
                            <p>Backend Web Development with Django </p>
                        </li>
                        <li>
                            <BiCheck className="serviceList-icon" />
                            <p>Website Template Building </p>
                        </li>
                    </ul>
                </article>


                <article className="service">
                    <div className="serviceHead">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="serviceList">
                        <li>
                            <BiCheck className="serviceList-icon" />
                            <p>Coming Soon </p>
                        </li>
                        {/*<li>
                            <BiCheck className="serviceList-icon" />
                            <p>Lorem ipsum dolor sit reiciendis corporis. </p>
                        </li>
                        <li>
                            <BiCheck className="serviceList-icon" />
                            <p>Lorem ipsum dolor sit reiciendis corporis. </p>
                        </li>
                        <li>
                            <BiCheck className="serviceList-icon" />
                            <p>Lorem ipsum dolor sit reiciendis corporis. </p>
                        </li>
                        <li>
                            <BiCheck className="serviceList-icon" />
                            <p>Lorem ipsum dolor sit reiciendis corporis. </p>
                        </li>*/}
                    </ul>
                </article>
            </div>
        </section>
    );
}
 
export default Services;