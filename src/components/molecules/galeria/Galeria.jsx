import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Imagen from "../../atoms/imagen/Imagen.jsx";
import Lightbox from "yet-another-react-lightbox";
import { motion, AnimatePresence } from "framer-motion"
import "yet-another-react-lightbox/styles.css";
import './galeria.css';



const Galeria = ({data}) => {
  const fotos = data
  const [open,setOpen] = useState(false);
  const [fotoActual,setFotoActual] = useState(0);
  

  const abrirLightBox = index =>{
    setFotoActual(index);
    setOpen(true);
  }
  return (
    <div className="galeria">
      <Imagen ajustes={{imagen:'./img/galeria.webp', ancho:'100%', clase:'img-galeria'}} />
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 750: 2, 900: 3 }}>
        <Masonry gutter="12px">
          {fotos.map((foto, i)=>(
            <motion.img
              key={i}
              src={foto.src}
              alt={`foto-${i}`}
              style={{
                width: "100%",
                display: "block",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={() => abrirLightBox(i)}
              loading="lazy"

              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .8, ease: "easeOut", delay: i * 0.04 }}
              viewport={{once:true, amount:0.2}}
            />
          ))}
        </Masonry>

      </ResponsiveMasonry>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={fotoActual}
        slides={fotos}
      />
    </div>
  )
}

export default Galeria