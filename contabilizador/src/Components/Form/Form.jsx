

function Form({name}) {
    
    return (
        <div className="content-form">
            <h1>O que você vai estudar hoje, {name}?</h1>
            

            <input type="text" name="matéria" id="materia" placeholder="Digite o nome da matéria aqui" />

        
        </div>
    )
}


export default Form;