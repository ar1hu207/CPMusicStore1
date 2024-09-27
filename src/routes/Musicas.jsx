import "../css/Musicas.css";
import Capa1 from "../assets/capa1.jpg";
import Matue from "../assets/matue.png";
import XXX from "../assets/xxxtentacion.png";
import fiftcent from "../assets/50cent.png"

const Musicas=()=>{
    return(
        <>
        <div className="Titulos">
            <h1>Top 3 Músicas de 2024</h1>
        <div className="container ">
            <div className="card-music">
                <div className="imagem-album">
                    <img src={Capa1} id="img" alt="" />
                </div>
                <h1>Amiga da minha mulher</h1>
                <p>Seu Jorge</p>
                <audio controls>
                    <source src="" type="" />
                </audio>
            </div>
            <div className="card-music">
                <div className="imagem-album">
                    <img src={Matue} id="img" alt="" />
                </div>
                <h1>777-666</h1>
                <p>Matue</p>
                <audio controls>
                    <source src="" type="" />
                </audio>
            </div>
            <div className="card-music">
                <div className="imagem-album">
                    <img src={XXX} id="img" alt="" />
                </div>
                <h1>Look at Me</h1>
                <p>XXX Tentacion</p>
                <audio controls>
                    <source src="" type="" />
                </audio>
            </div>
            <div className="card-music">
                <div className="imagem-album">
                    <img src={fiftcent} id="img" alt="" />
                </div>
                <h1>Cand Shop</h1>
                <p>50 cent</p>
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