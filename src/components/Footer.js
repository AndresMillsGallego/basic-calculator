import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      <a title="My Github" href="https://github.com/AndresMillsGallego">
        <FontAwesomeIcon icon={faGithub} color='yellow' className="footer-links" />
      </a>
      <p>&copy; Andres Mills Gallego</p>
      <a title="My LinkedIn" href="https://www.linkedin.com/in/andres-mills-gallego/">
        <FontAwesomeIcon icon={faLinkedin} color='yellow' className="footer-links"/>
      </a>
    </footer>
  );
}

export default Footer;
