import { useState } from 'react';
import {useLocation, Navigate} from 'react-router-dom';
import Modal from "react-modal";
import {
    Reproductor,
    Contador,
    Card,
    AnimarElemento,
    TimeLine,
    Detalles,
    Imagen,
    Banner,
    Galeria,
    Icono,
    Boton,
    Confirmacion,
    Hoteles,
    Footer ,
    Iglesia, 
    Recepcion, 
    Novia,
    Novio,
} from '../components/index.js';
import getData from '../../data.js';
import {obtnerTextoConfirmacion} from '../functions/obtenerTextoConfirmacion.js'
import '../styles/modal.css';
import '../styles/invitacion.css';

const Invitacion = () => {
  const data = getData('xv');
  
  const song = './music/song.mp3'

  const [play,setPlay] = useState(false); //estado para manejar la reproduccion del audio
  const [modalIsOpen, setModalIsopen] = useState(true);//estado para manejar el modal

  // VALIDACIÓN DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pasesParam = params.get("pases");

  const pases = Number(pasesParam); // lo convertimos a número
  let txt1 = "Lugar";
  let txt2 = "reservado";

  // Si pasesParam es null, no es un número, no es entero o está fuera de rango -> redirigir
  if (
    !pasesParam ||                // vacío o null
    Number.isNaN(pases) ||        // no es un número
    !Number.isInteger(pases) ||   // no es un entero
    pases < 1 || pases > 10       // fuera de rango
  ) {
    return <Navigate to="/notfound" />;
  }

  if (pases > 1) {
    txt1 = "Lugares";
    txt2 = "reservados";
  }

  //funcion para reproduccion de la musica cuando el modal se acepte
  const handlePlay = ()=>{
    setPlay(true);
    setModalIsopen(false)
  }
  return (
  <>
    
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={()=>setModalIsopen(false)}
      style={{
        content:{
          width:'80%',
          top:'50%',
          left:'50%',
          right:'auto',
          bottom:'auto',
          transform:'translate(-50%, -50%)',
          textAlign:'center',
          border:'none',
          boxShadow:'10px 10px 10px #bdbdbd',
          backgroundColor:'var(--colorPrincipal)',
        }
      }}
      contentLabel="Confirmacion de Reproducción"
      ariaHideApp={false} //necesario para evitar adverterncias en pruebas yu desarrollo
      shouldCloseOnOverlayClick={false}
    >
      <div className = 'modal-imagen-contenedor'>
        <Imagen ajustes={{imagen:'./img/modal.webp', ancho:'80%'}} />
      </div>
      <p className="modal-content">Para una mejor experiencia, por favor acepta la reproducción automática.</p>  
      <Boton ajustes={
        { texto:'Aceptar',
          funcion:handlePlay,
          estilos:{
            colorFondo:'#fff',
            forma:{
            arribaIzquierda:true,
            arribaDerecha:true,
            abajoIzquierda:true,
            abajoDerecha:true
          }
          },
          
        }} />
      
    </Modal>

    {
      
      play && (
        <>
          <Reproductor song={song} />
          <Banner 
            ajustes={{
                      imagen:'./img/images/2.webp', 
                      anchoImagen:'100%', 
                      anchoContenedor:'100%', 
                      clase:'banner-oracion', 
                      altoContenedor:'auto'}} />
          <AnimarElemento
            as={Card}
            ajustes={{variante:'papel', ancho:'80%',clase:'card-header'}}
            animacion={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            duracion={1}
          >
            <Imagen ajustes={{imagen:'./img/monograma.webp'}} />
            <h2>Celebremos juntos el día:</h2>
            <h1>{`${data.fechaDia} de ${data.fechaMes} de ${data.fechaYear}`}</h1>
            <div><Imagen ajustes={{imagen:'./img/flor1.webp', ancho:'80%'}} /></div>
          </AnimarElemento>

         

          <AnimarElemento 
            as={Card}
            ajustes={{variante:'papel', ancho:'80%',clase:'card-papas'}}
            animacion={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            duracion={1}>
            {data.type === "boda" && (
              <>
                <p>En compañia de nuestros padres</p>
                <h2>{data.padresNovio.papa}</h2>
                <h2>{data.padresNovio.mama}</h2>
                <h2>{data.padresNovia.papa}</h2>
                <h2>{data.padresNovia.mama}</h2>
                <p>Y de nuestros padrinos</p>
                <h2>{data.padrinos.padrino}</h2>
                <h2>{data.padrinos.madrina}</h2>
              </>
            )}
            {data.type === "xv" && (
              <>
                <p>En compañia de mis padres</p>
                <h2>{data.padres.papa}</h2>
                <h2>{data.padres.mama}</h2>
                <p>Y de mis padrinos</p>
                <h2>{data.padrinos.padrino}</h2>
                <h2>{data.padrinos.madrina}</h2>
              </>
            )}

            {data.type === "bautizo" && (
              <>
                <p>En compañia de mis padres</p>
                <h2>{data.padres.papa}</h2>
                <h2>{data.padres.mama}</h2>
                <p>Y de mis padrinos</p>
                <h2>{data.padrinos.padrino}</h2>
                <h2>{data.padrinos.madrina}</h2>
              </>
            )}
          </AnimarElemento>
          
          <Banner ajustes={{imagen:'./img/oracion.webp', anchoImagen:'100%', anchoContenedor:'100%', clase:'banner-oracion'}} />

          <AnimarElemento
            as={Card}
           ajustes={{ancho:'80%', variante:'papel', clase:'card-horarios'}}
          animacion={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          duracion={1}
           >
            <div>
              <p className='card-horarios-titulo'>Ceremonia Religiosa</p>
              <div className='card-horarios-item'>
                <Icono IconoSVG={Iglesia} ajustes ={{color:'var(--colorTexto)',ancho:'50px',alto:'50px'}}/>
                <h2>{data.religiosa.lugar}</h2>
              </div>
              <div className='card-horarios-direccion'>
                <p>{data.religiosa.direccion}, {data.religiosa.direccionCol}</p>
                <p>{data.religiosa.direccionCd} </p>
                <h3>{data.religiosa.hora}:{data.religiosa.minutos} Hrs.</h3>
              </div>
              <div className='card-horarios-boton'>
                <Boton ajustes={
                  { texto:'Cómo llegar',
                    link:`${data.religiosa.ubicacion}`, 
                    estilos:{
                      colorFondo:'var(--colorFondo)',
                      textColor:'var(--colorTexto)',
                      forma:{
                        
                        arribaIzquierda:true,
                        arribaDerecha:true,
                        abajoIzquierda:true,
                        abajoDerecha:true
                      }
                    }
                  }
                } 
                />
              </div>
            </div> {/* <------- */}


            <div style={{marginTop:'50px'}}>
              <p className='card-horarios-titulo'>Recepción</p>
              <div className='card-horarios-item'>
                <Icono IconoSVG={Recepcion} ajustes ={{color:'var(--colorTexto)',ancho:'50px',alto:'50px'}}/>
                <h2>{data.recepcion.lugar}</h2>
              </div>
              <div className='card-horarios-direccion'>
                <p>{data.recepcion.direccion}, {data.recepcion.direccionCol}</p>
                <p>{data.recepcion.direccionCd} </p>
                <h3>{data.recepcion.hora}:{data.recepcion.minutos} Hrs.</h3>
              </div>
              <div className='card-horarios-boton'>
                <Boton ajustes={
                  { texto:'Cómo llegar',
                    link:`${data.recepcion.ubicacion}`, 
                    estilos:{
                      colorFondo:'var(--colorFondo)',
                      textColor:'var(--colorTexto)',
                      forma:{
                        
                        arribaIzquierda:true,
                        arribaDerecha:true,
                        abajoIzquierda:true,
                        abajoDerecha:true
                      }
                    }
                  }
                } 
                />
              </div>
            </div> {/* <------- */}
            
          </AnimarElemento>
          
          <Contador 
            titulo={'¡Prepárate!'}
            subtitulo={'Nos vemos en: '}  
            fechaDia={data.fechaDia}
            fechaMes={data.fechaMes}
            fechaYear={data.fechaYear}
            hora={data.religiosa.hora}
            minutos={data.religiosa.minutos}
          />

          <Card ajustes={{ancho:'60%', variante:'papel', clase:'card-timeline'}}>
                <TimeLine timeLine={data.timeLine} tituloImagen={true} titulo={'./img/itinerario.webp'} anchoImagen={'80%'} />
          </Card>

          <Banner ajustes={{imagen:'./img/foto2.webp', anchoImagen:'100%', anchoContenedor:'100%', clase:'banner-foto2'}} />
          
          <Detalles tituloImagen={true} titulo={'./img/detalles.webp'} anchoImagen={'80%'} detalles={data.detalles} />

          <div className='lugares'>
            <p>Hemos reservado</p>
            <h2>{pases}</h2>
            <span>{txt1} en tu honor</span>
          </div>

          <Galeria data={data.imagenes} />

          <Confirmacion data = {data} pases = {Number(pases)} />

          <AnimarElemento
            as={Card}
            ajustes={{ancho:'80%', variante:'papel', clase:'card-hoteles'}} 
            animacion={
             { hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },}
            }
            duracion={1}
          >
            <Hoteles data = {data.hoteles} />
          </AnimarElemento>


          
          <Footer />
        </>
      )
    }
  </>
  )
}

export default Invitacion