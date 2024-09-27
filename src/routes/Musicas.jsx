import "../css/Musicas.css";
import Capa1 from "../assets/capa1.jpg"

const Musicas=()=>{
    return(
        <>
        <div className="Titulos">
            <h1>10 Músicas de 2024</h1>
        <div className="container ">
            <div className="card-music">
                <div className="imagem-album">
                    <img src={Capa1} id="img" alt="" />
                </div>
                <h1>Nome da musica</h1>
                <p>artista</p>
                <audio controls>
                    <source src="" type="" />
                </audio>
            </div>
        </div>
        </div>
        </>
    )
}

export default Musicas