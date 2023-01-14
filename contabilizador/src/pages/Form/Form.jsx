import { Link } from "react-router-dom";
import styles from './Form.module.css'

function Form({setNome, setAssunto}) {
    return(
        <div className={styles.form}>
            <h1>Deixa eu saber... 📚</h1>
            <h2>O seu nome e o que você vai estudar agora: </h2>  

         
        
            <input type="text" name="name" placeholder="Seu nome!" 
            onChange={(e)=> setNome(e.target.value)}/>

            <input type="text" name="assunto" placeholder="Pode ser qualquer assunto, viu?!" 
            onChange={(e)=> setAssunto(e.target.value)} />

            <Link to='/timer'><button>Avançar</button></Link>
        </div>
    )
}


export default Form;