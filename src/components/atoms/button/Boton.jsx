import './botonStyle.css';

/*asi se renderiza un boton
<Boton 
    ajustes={{
      texto:'click aquí',
      estilos:{
        colorFondo:'Secundario',
        forma:{arribaIzquierda:true,
              arribaDerecha:false,
              abajoIzquierda:false,
              abajoDerecha:true},
        sombra:false,
        textBold:true,
        textColor:'Fondo'
      }
    }} /> */
const Boton = ({ajustes}) => {
  
  const { texto,estilos, link, funcion } = ajustes || {};
  const { colorFondo, forma, sombra, textBold, textColor } = estilos || {};
  const { arribaIzquierda, arribaDerecha, abajoIzquierda, abajoDerecha } = forma || {};


  
  const clases = [
    'atom-boton',
    arribaIzquierda && 'redondoArribaIzquierda',
    arribaDerecha && 'redondoArribaDerecha',
    abajoIzquierda && 'redondoAbajoIzquierda',
    abajoDerecha && 'redondoAbajoDerecha',
    sombra && 'sombra',
    textBold && 'textBold',
    
  ].join(' ')
  return (
    <a 
      onClick={funcion}
      target='_blank'
      href={link}
      style={{backgroundColor:`${colorFondo}`, color:`${textColor}`}}
      className={clases}
    >{texto}</a>
  )
}

export default Boton