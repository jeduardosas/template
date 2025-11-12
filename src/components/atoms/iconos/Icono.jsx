import { div } from 'framer-motion/client';
import './iconoStyle.css';

/*ASI SE RENDERIZA UN ICONO
  <Icono 
      IconoSVG={Iglesia  } 
      ajustes ={
        {
          color:'#fc2600',
          ancho:'100px',
          alto:'100px',

        }
      }
  />
*/
const Icono = ({IconoSVG, ajustes}) => {
  const { color, ancho, alto } = ajustes;
  return (
    <div style={{color, display:'inline-block'}}>
      <IconoSVG 
        fill={color}
        stroke={color}
        width={ancho}
        height={alto}
      />
    </div>
  )
}

export default Icono