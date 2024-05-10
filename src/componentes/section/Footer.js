import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href="https://www.instagram.com/andressamesquitab/"><FaInstagram size={30}/></a></li>
                <li><a href="https://github.com/andressa-mb"><FaGithub size={30}/></a></li>
                <li><a href="https://www.linkedin.com/in/andressa-mbraga/"><FaLinkedin size={30}/></a></li>
            </ul>
            <p>andressamesquita26@gmail.com</p>
            <p>Andressa Mesquita © 2023</p>
        </div>
    )
}

export default Footer;