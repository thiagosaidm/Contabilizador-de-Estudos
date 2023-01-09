function Assunto({assunto}) {
    
    function gerarAssunto(assuntoDigitado) {
        return `Você está estudando ${assuntoDigitado} há:`
    }


    return(
        <>
        <h4>{gerarAssunto(assunto)}</h4>
        </>
    )
}


export default Assunto;