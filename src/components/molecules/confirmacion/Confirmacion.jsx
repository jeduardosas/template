import {useState} from 'react'
import AnimarElemento from '../animarElemento/AnimarElemento.jsx'
import Boton from '../../atoms/button/Boton.jsx'
import Imagen from '../../atoms/imagen/Imagen.jsx'
import Card from '../../molecules/card/Card.jsx'
import {obtenerTextoFormulario} from '../../../functions/obtenerTextoConfirmacion.js'
import './confirmacion.css'

const Confirmacion = ({data, pases}) => {
  
  let arrayPases = [];
  for(let i = 1 ; i<= pases ; i++){
    arrayPases.push(i);
  }
  
  const [abierto, setAbierto] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [nombre, setNombre] = useState('');
  const [numeroPersonas, setNumeroPersonas] = useState(1);
  const [error, setError] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();
    if(nombre === ''){
      setError(true);
      setTimeout(()=>{
        setError(false);
      },2000)
      return;
    }
    const link = obtenerTextoFormulario({
    nombreInvitado: nombre,
    numero: numeroPersonas,
    nombreQuinceañera:data.nombre,
    tipoEvento: data.type,
    numeroTelefono: data.confirmacion // <-- tu data ya la tiene si no me equivoco
  });

  window.open(link, '_blank');
  setAbierto(false);
  setEnviado(true);
}
  
  return (
    <AnimarElemento
            as={Card}
            ajustes={{ancho:'80%', variante:'papel', clase:'card-confirmacion'}} 
            animacion={
             { hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },}
            }
            duracion={1}
          >
              <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'30px'}}><Imagen ajustes={{imagen:'./img/confirmacion.webp', ancho:'80%'}} /></div>
              <p>Tu presencia hará inolvidable este día. Te pedimos amablemente confirmar tu asistencia, gracias.</p>
              <div className='card-confirmacion-boton'>
                {abierto || enviado ?  '' : <button onClick={()=>{setAbierto(true)}} >Confirmar</button>}
              </div>


              <form className= {`formulario ${abierto ? 'mostrar' : ''}`}>
                <legend>Llena el formulario para confirmar asistencia</legend>
                <div className="formulario-item">
                  <label>Tu nombre: </label>
                  <input type="text" placeholder='Tu nombre aqui' onChange={(e)=>{setNombre(e.target.value)}} />
                </div>
                <div className="formulario-item">
                  <label>Elige el numero de personas que asitirán</label>
                  <select onChange={(e)=>{setNumeroPersonas(e.target.value)}}>
                   {arrayPases.map((p,i)=>(
                    <option key={i} value={p}>{p}</option>
                   ))}
                  </select>
                </div>

                <input className='formulario-boton' type='submit' onClick={(e)=>{enviarFormulario(e)}} value={'enviar'}/>
                {error ? (
                  <div className='div-mensaje'>
                    <p>Debes anotar tu nombre para Confirmar Asistencia</p>
                  </div>
                ):''}
              </form>
              
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}><Imagen ajustes={{imagen:'./img/flor3.webp', ancho:'80%'}} /></div>
          </AnimarElemento>
  )
}

export default Confirmacion


/*
                <Boton 
                  ajustes={{texto:'Confirmar', 
                            link:obtnerTextoConfirmacion('bautizo', data.nombre, data.confirmacion),
                            estilos:{
                              colorFondo:'var(--colorFondo)',
                              textColor:'var(--colorTexto)',
                              forma:{
                                arribaDerecha:true,
                                arribaIzquierda:true,
                                abajoDerecha:true,
                                abajoIzquierda:true
                              },
                            }
                          }} 
                />


*/