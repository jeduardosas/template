import { useState } from 'react';
import Card from '../card/Card.jsx';
import Boton from '../../atoms/button/Boton.jsx'
import Banner from '../banner/Banner.jsx';
import Imagen from '../../atoms/imagen/Imagen.jsx';
import './detalles.css';

const Detalles = ({tituloImagen, anchoImagen, titulo, detalles})=>{
  const [abierto, setAbierto] = useState(false);

  const toggleDetalles = ()=>setAbierto(!abierto);

  return(
    <div className="detalles-container">
      <Card ajustes={{ variante: "papel", ancho: "80%", clase:'card-detalles' }}>
        {
          tituloImagen ? (
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <Imagen ajustes={{imagen:`${titulo}`, ancho:`${anchoImagen}`}} />
            </div>
          ):
          <h2>{titulo}</h2>
        }
        <div>
          <Boton 
            ajustes={{
                      texto:abierto ? "Ver menos ↑" : "Ver más ↓", 
                      funcion:toggleDetalles,
                      estilos:{
                        colorFondo:'var(--colorFondo)',
                        textColor:'var(--colorTexto)',
                        forma:{
                          arribaDerecha:true,
                          arribaIzquierda:true,
                          abajoDerecha:true,
                          abajoIzquierda:true
                        }
                      }
                    }} 
          />
        </div>
          
        

        

        <div className={`detalles-contenido ${abierto ? "mostrar" : ""}`}>
          <ul>
            {
              detalles.map((detalle, index)=>(
                <li key={index} className='detalles-item'>
                  <h3>{detalle.titulo}</h3>
                  
                  {detalle.contenido.map((c, j)=>{
                    if(c.tipo === 'link') return (
                      <div key={j}>
                        <p>{c.texto}</p>
                        <Boton 
                          ajustes={{
                                    texto:'Ir al sitio', 
                                    link:c.url,
                                    estilos:{
                                      colorFondo:'var(--colorSecundario)',
                                      forma:{
                                        arribaDerecha:true,
                                        arribaIzquierda:true,
                                        abajoDerecha:true,
                                        abajoIzquierda:true
                                      }
                                    }
                                  }} 
                        />
                      </div>
                    )

                    if(c.tipo === 'texto') return (
                      <p>{c.texto}</p>
                    )
                  })}
                </li>
                
              ))
              
            }
            
          </ul>
        </div>
      </Card>
    </div>
  )
}



export default Detalles