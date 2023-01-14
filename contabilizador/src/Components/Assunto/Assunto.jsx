function Assunto({assunto}) {
    
    function gerarAssunto(assuntoDigitado) {
        return `Você está estudando ${assuntoDigitado} há:`
    }


    return(
        <>
        <h2>{gerarAssunto(assunto)}</h2>
        </>
    )
}


export default Assunto;