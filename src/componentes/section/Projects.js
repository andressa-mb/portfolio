import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lparq from '../../image/projects/lparq.png'
import advogados from '../../image/projects/advogados.png'
import spotify from '../../image/projects/spotify.png'

function Projects() {
    return(
        <div className={styles.projects} id='project'>
            <h1>Projetos</h1>
            <Card 
            className={styles.card}
            img={advogados}
            title="Advogados"
            tech="HTML, Saas, JS, Axios"
            description="Este projeto foi desenvolvido em grupo como parte de um desafio colaborativo para criar um site institucional para o escritório de advocacia Morais & Ribeiro. A página apresenta informações sobre os serviços jurídicos oferecidos, os profissionais do escritório e formas de contato, com um design focado na seriedade e credibilidade da marca."
            repo="https://github.com/DNC-Tech13/Morais-Ribeiro-Advocacia"
            site="https://morais-ribeiro-advocacia.vercel.app/"
            />
            <Card 
            className={styles.card}
            img={spotify}
            title="Spotify"
            tech="HTML, CSS, JS"
            description="Desenvolvi um clone do Spotify utilizando React, onde os usuários podem buscar e visualizar artistas a partir de um arquivo JSON. O projeto simula a experiência de navegação de uma plataforma de streaming, permitindo que os usuários realizem pesquisas por artistas e visualizem suas informações, incluindo imagens."
            repo="https://github.com/andressa-mb/spotify/tree/main"
            site="https://spotify-project-khaki.vercel.app/"
            />
            <Card 
            className={styles.card}
            img={lparq}
            title="Landing Page - Escritório de Arquitetura"
            tech="HTML, CSS, JS"
            description="Este projeto é uma landing page desenvolvida para um escritório de arquitetura, com o objetivo de apresentar de maneira elegante os serviços e projetos da empresa. A página é totalmente responsiva e foi projetada com foco na experiência do usuário, utilizando uma paleta de cores moderna e tipografia limpa que reflete o estilo e a sofisticação da marca."
            repo="https://github.com/andressa-mb/Desafio-LandingPage"
            site="https://desafio1-landingpage1.netlify.app/"
            />

            <ButtonB text='Acesse meu repositório' link='https://github.com/andressa-mb?tab=repositories'/>
        </div>
    )
}

export default Projects;
