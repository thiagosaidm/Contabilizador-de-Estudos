import { useState } from "react";


function Form({setNome, setAssunto}) {
    return(
        <div>
            <h3>Digite o seu nome e o que você vai estudar: 📚📖</h3>  

         
        
            <input type="text" name="name" placeholder="Seu nome!" 
            onChange={(e)=> setNome(e.target.value)}/>

            <input type="text" name="assunto" placeholder="Pode ser qualquer assunto, viu?!" 
            onChange={(e)=> setAssunto(e.target.value)} />
        </div>
    )
}


export default Form;