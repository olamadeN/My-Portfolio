import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble} from "react-icons/fi";
const HeaderSocials = () => {
    return ( 
      <div className="headerSocials">
          <a href="https://linkdin.com" rel="noreferrer" target="_blank"><BsLinkedin /></a>
          <a href="https://github.com" rel="noreferrer" target="_blank"><FaGithub /></a>
          <a href="https://dribbble.com" rel="noreferrer" target="_blank"><FiDribbble /></a>
      </div>  
     );
}
 
export default HeaderSocials;