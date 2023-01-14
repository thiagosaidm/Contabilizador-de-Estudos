import { Link } from "react-router-dom";


function Form({setNome, setAssunto}) {
    return(
        <div className="form">
            <h3>Digite o seu nome e o que você vai estudar: 📚📖</h3>  

         
        
            <input type="text" name="name" placeholder="Seu nome!" 
            onChange={(e)=> setNome(e.target.value)}/>

            <input type="text" name="assunto" placeholder="Pode ser qualquer assunto, viu?!" 
            onChange={(e)=> setAssunto(e.target.value)} />

            <Link to='/timer'><button>OK</button></Link>
        </div>
    )
}


export default Form;