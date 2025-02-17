import styles from './Skills.module.css'
import javascript from '../../image/skills/javascript.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import node from '../../image/skills/node-js.png'
import react from '../../image/skills/react.svg'


function Skills() {
    return(
        <div className={styles.skills} id="skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas habilidades e conhecimentos.</p>
            <div>
                <img src={javascript} alt="Javascript"/>
                <img src={html} alt="HTML"/>
                <img src={css} alt="CSS"/>
                <img src={react} alt="React"/>
                <img src={node} alt="Node"/>
            </div>
        </div>
    )
}

export default Skills;