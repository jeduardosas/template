import  Imagen from '../../atoms/imagen/Imagen.jsx'

const Banner = ({ajustes}) => {
  const {imagen,anchoImagen, altoImagen, anchoContenedor, altoContenedor, clase} = ajustes || {}
  return (
    <div 
    style={{width:{anchoContenedor},height:`${altoContenedor}`,display:'flex',justifyContent:'center',alignItems:'center'}} className={`${clase}`}>
      <Imagen ajustes={{imagen, ancho:anchoImagen, alto:altoImagen}} />
    </div>
  )
}

export default Banner