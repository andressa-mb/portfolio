import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import arqlpdnc from '../../image/projects/arqlpdnc.svg'
import ccxp from '../../image/projects/ccxp.svg'

function Projects() {
    return(
        <div className={styles.projects} id='project'>
            <h1>Projetos</h1>
            <Card 
            img={lpdnc}
            title="Landing Page - DNC"
            tech="HTML, CSS, JS"
            description="Este é o projeto de desenvolvimento do módulo base do curso de Tecnologia da Escola DNC."
            repo="https://github.com/andressa-mb/Projeto-landing-page"
            site="https://projeto1-landing-page.netlify.app/"
            />
            <Card 
            img={arqlpdnc}
            title="Desafio Landing Page - DNC"
            tech="HTML, CSS, JS"
            description="Este é o primeiro desafio do projeto de desenvolvimento do módulo base do curso de Tecnologia da Escola DNC."
            repo="https://github.com/andressa-mb/Desafio-LandingPage"
            site="https://desafio1-landingpage1.netlify.app/"
            />
            <Card 
            img={ccxp}
            title="Desafio CCXP - DNC"
            tech="HTML, CSS, JS"
            description="Este é o Desafio do projeto de desenvolvimento do módulo iniciante do curso de Tecnologia da Escola DNC."
            repo="https://github.com/andressa-mb/desafio-ccxp"
            site="https://desafio-ccxp.netlify.app/"
            />

            <ButtonB text='Acesse meu repositório' link='https://github.com/andressa-mb?tab=repositories'/>
        </div>
    )
}

export default Projects;
