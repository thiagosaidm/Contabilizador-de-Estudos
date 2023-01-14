
import styles from './Home.module.css'

import { Link } from "react-router-dom";


function Home() {
    
    return(
        <div className={styles.homeContainer}>
                <h1>
                    Olá, vamos estudar?
                </h1>
                <span>👨🏾‍🏫</span>
                <p>Essa é uma ferramenta para cronometrar seus estudos e acompanhar seu progresso.</p>

                <h2>Para começarmos, clique no botão abaixo</h2>

                <Link to='/form'><button>OK</button></Link>

        </div>
    )

}


export default Home;