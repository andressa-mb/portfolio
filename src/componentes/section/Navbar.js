import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/esm/NavLink';

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href="#presentation">Apresentação</Nav.Link></li>
                <li><Nav.Link href="#skills">Habilidades</Nav.Link></li>
                <li><Nav.Link href='#project'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href="https://www.instagram.com/andressamesquitab/"><FaInstagram size={30}/></a></li>
                <li><a href="https://github.com/andressa-mb"><FaGithub size={30}/></a></li>
                <li><a href="https://www.linkedin.com/in/andressa-mbraga/"><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar;