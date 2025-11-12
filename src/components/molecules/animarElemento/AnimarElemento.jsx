import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimarElemento = ({
  children,
  ajustes,
  as: Componente = "div", // puedes pasar el componente a renderizar
  animacion = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }, // animación por defecto
  duracion = 0.8,
  delay = 0,
  threshold = 0.4,
  triggerOnce = true,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animacion}
      transition={{ duration: duracion, delay, ease: "easeOut" }}
    >
      <Componente ajustes={ajustes}>
        {children}
      </Componente>
    </motion.div>
  );
};

export default AnimarElemento;
