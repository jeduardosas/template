import './cardStyle.css'

const Card = ({ tipo, ajustes, children }) => {
  
  const { ancho, variante, clase } = ajustes || {};

  return (
    <div 
      className={`card  ${variante ? `card-${variante}` : ''} ${clase}`} 
      style={{ width: ancho || '100%' }}
    >
      {children}
    </div>
  );
};

export default Card;
