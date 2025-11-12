import { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import './reproductor.css'


const Reproductor = ({song}) => {

  const [isPlaying,setIsPlaying]=useState(true);
  const [isVisible, setIsVisible] = useState(false);

  //funciones para controlar el play pause de la música
  const handlePlayRepro = ()=>{
    document.querySelector('audio').play();
    setIsPlaying(true);
  }

  const handlePauseRepro = ()=>{
    document.querySelector('audio').pause();
    setIsPlaying(false);
  }

  //funcion para mostrar ocultar el reproductor
  const toggleReproductor = ()=>{
    setIsVisible(!isVisible);
  }

  //funcion para ocultar el reproductor al hacer click en cualquier parte 
  const hideReproductor = ()=>{
    if(isVisible) setIsVisible(false)
  }

  //funcion para ocultar el reproductor al hacer scroll
  const handleScroll = () => {
    if (isVisible) setIsVisible(false);
  };

  //efecto para agregar/remover el evento de scroll dinamicamente
  useEffect(()=>{
    if(isVisible){
      window.addEventListener('scroll',handleScroll);
    }else{
      window.removeEventListener('scroll',handleScroll);
    }

    //limpiar el evento 

    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    };

  },[isVisible])


  return (
    <>
      {/* overlay que detecta clicks fuera*/}
        <div 
          className={`reproductor-overlay ${isVisible ? 'active' : ''}`}
          onClick={hideReproductor}>
        </div>

        <div className={`reproductor ${isVisible ? 'show' : ''}`}>
        <ReactAudioPlayer
          src={song} 
          autoPlay={true}
          preload="auto"
          />
        
        <button
          className={`reproductor-boton ${!isPlaying ? 'push' : ''}`} 
          onClick={handlePauseRepro}>
          <img src="./icons/pausa.svg" alt="pausa-icon" />
        </button>
        <button 
          className={`reproductor-boton ${isPlaying ? 'push' : ''}`} 
          onClick={handlePlayRepro}>
          <img src="./icons/play.svg" alt="play-icon" />
        </button>

        {/* pestaña para mostrar ocultar */}
        <div 
          className="reproductor_pestana" 
          onClick={toggleReproductor}>
            {isPlaying ? ( <img src="./icons/pausa.svg" alt="pausa-icon" /> ) : ( <img src="./icons/play.svg" alt="play-icon" /> )}
          </div>
        
        
      </div>
    </>
  )
}

export default Reproductor