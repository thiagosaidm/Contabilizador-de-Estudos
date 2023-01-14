function Assunto({assunto}) {
    
    function gerarAssunto(assuntoDigitado) {
        return `Você está estudando ${assuntoDigitado} há:`
    }


    return(
        <>
        <h3>{gerarAssunto(assunto)}</h3>
        </>
    )
}


export default Assunto;