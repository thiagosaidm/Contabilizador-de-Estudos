function Saudacao({nome}) {

    function saudarUser(nomeDigitado) {
        return `Olá, ${nomeDigitado}!`
    }

    return(
        <>
        {nome.length > 0 ? (<h2>{saudarUser(nome)}</h2>):(<h2>Olá, pequeno(a) gafanhoto!</h2>)}
        
        </>
    )
}


export default Saudacao;