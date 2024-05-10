import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react';

function Presentation() {
    const [text, setText] = useState('')

    const toRotate = ['Andressa Mesquita!', 'desenvolvedora front-end', 'profissional']
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
            <p>Sou desenvolvedora de front-end, frequento cursos na área <br/>
            de desenvolvimento de sistemas. Estou em busca de crescimento<br/>
            e evolução profissional.</p>
            <ButtonA link='https://github.com/andressa-mb' text='Conecte-se comigo!'/>
            
        </div>
    )
}

export default Presentation;