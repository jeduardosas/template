
import './imagenStyle.css'

/*
Asi se renderiza una imagen
<Imagen 
      ajustes = {{
        imagen:'./img/2.webp',
        ancho:'100%',
        alto:''
      }}
  />
 */

const Imagen = ({ajustes}) => {
  const { imagen, ancho, alto, clase } = ajustes || {}

  const nombreImagen = (img)=>{
    const nombre = img.split('/').pop().split('.')[0];
    return nombre

  }
  return (
      <img 
        loading='lazy'
        src={imagen} 
        alt={`${nombreImagen(imagen)}-img`} 
        className={clase}
        style={{
          width:ancho || '100%',
          height:alto || 'auto'
        }}
      />
  )
}

export default Imagen