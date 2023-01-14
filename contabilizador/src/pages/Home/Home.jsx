import { Link } from "react-router-dom";


function Home() {
    
    return(
        <div className="home">
                <h1>
                    Olá, vamos estudar?👨🏾‍🏫 
                </h1>

                <p>Essa é uma ferramenta simples para cronometrar seus estudos e acompanhar seu progresso</p>

                <h2>Para começarmos, clique no botão abaixo</h2>

                <Link to='/form'><button>OK</button></Link>

        </div>
    )

}


export default Home;