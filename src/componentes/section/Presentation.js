import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react';

function Presentation() {
    const [text, setText] = useState('')

    const toRotate = ['Andressa Mesquita!', 'desenvolvedora', 'profissional que procura']
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const period = 100
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=>{clearInterval(ticker)}
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

        setText(updatedText)

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setDelta(period)
            setLoop(loop+1)
        }
    }

    return(
        <div className={styles.presentation} id="presentation">
            <h4>Bem-vindo ao meu Portfólio</h4>
            <h1>Olá, eu sou a {text}</h1>
            <p>Sou apaixonada por aprender novas tecnologias e aprimorar minhas habilidades de desenvolvimento. Estou sempre aberta a novas oportunidades e colaborações. Se você gostaria de saber mais sobre meus projetos ou discutir como posso contribuir para sua equipe, fique à vontade para entrar em contato!</p>
            <ButtonA link='https://github.com/andressa-mb' text='Conecte-se comigo!'/>
            
        </div>
    )
}

export default Presentation;