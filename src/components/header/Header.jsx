import "./header.css"
import CTA from "./CTA"
import me from "../../assets/me.jpg"
import HeaderSocials from "./HeaderSocials"
const Header = () => {
    return (    
        <header>
            <div className="container headerContainer">
                <h5>Hello I'm</h5>
                <h1>Olamade Nissi</h1>
                <h5 className="text-light">Front-End Web Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="header-img">
                    <img className="me" src={me} alt="me" />
                </div>
                <a href="#contact" className="scrollDown">Scroll Down</a>
                
            </div>
        </header>
    );
}
 
export default Header;