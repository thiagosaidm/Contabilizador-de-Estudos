function Saudacao({nome}) {

    function saudarUser(nomeDigitado) {
        return `Olá, ${nomeDigitado}!`
    }

    return(
        <>
        {nome.length > 0 ? (<h3>{saudarUser(nome)}</h3>):(<h3>Olá, pequeno(a) gafanhoto!</h3>)}
        
        </>
    )
}


export default Saudacao;