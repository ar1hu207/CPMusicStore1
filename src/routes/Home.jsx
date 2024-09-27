import Artista1 from '../assets/artista1.jpg'
import Artista2 from '../assets/artista2.webp'
import Artista3 from '../assets/artista3.webp'
import Album1 from '../assets/capa2.jpg'
import Album2 from '../assets/capa3.jpg'
import Album3 from '../assets/capa4.webp'
import Album4 from '../assets/capa5.webp'
import "../css/Home.css"

const Home = () => {
  return (
    <>

      <div className="container">
        <div className="card">

          {/* <div className="musical-notes">
            <span>♪</span>
            <span>♫</span>
            <span>♬</span>
            <span>♪</span>
          </div> */}
          <div className="image">
            <img src={Album1} alt="cbd" />
          </div>
          <div className="card-content">
            <h2>Mind Games</h2>
            <h2>John Lennon</h2>
          </div>
          <div className="btn">
            <button className="card-button">Gostei</button>
          </div>
        </div>
        <div className="card">

          {/* <div className="musical-notes">
            <span>♪</span>
            <span>♫</span>
            <span>♬</span>
            <span>♪</span>
          </div> */}
          <div className="image">
            <img src={Album2} alt="cbd" />
          </div>
          <div className="card-content">
            <h2>NeverMind</h2>
            <h2>Nirvana</h2>
          </div>
          <div className="btn">
            <button className="card-button">Gostei</button>
          </div>
        </div>
        <div className="card">
          {/* <div className="musical-notes">
            <span>♪</span>
            <span>♫</span>
            <span>♬</span>
            <span>♪</span>
          </div> */}
          <div className="image">
            <img src={Album3} alt="cbd" />
          </div>
          <div className="card-content">
            <h2>Breakfast in America</h2>
            <h2>Supertramp</h2>
          </div>
          <div className="btn">
            <button className="card-button">Gostei</button>
          </div>
        </div>
        <div className="card">
          {/* <div className="musical-notes">
            <span>♪</span>
            <span>♫</span>
            <span>♬</span>
            <span>♪</span>
          </div> */}
          <div className="image">
            <img src={Album4} alt="cbd" />
          </div>
          <div className="card-content">
            <h2>The dark side </h2>
            <h2>Pink Floyd</h2>
          </div>
          <div className="btn">
            <button className="card-button">Gostei</button>
          </div>
        </div>
      </div>
      <div className="section">
        <h1>Artistas do momento</h1>
        <div className="">
          <img src={Artista1} alt="" className='img-artista' />
          <img src={Artista2} alt="" className='img-artista' />
          <img src={Artista3} alt="" className='img-artista' />
        </div>
      </div>
    </>
  )
}

export default Home