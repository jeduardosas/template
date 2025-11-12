import './hoteles.css';

function StarRating({rating}) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="star-rating">
      {Array(fullStars)
        .fill()
        .map((_, i) => <span key={`f${i}`}>&#9733;</span>)}
      {halfStar && <span>&#9733;</span>}
      {Array(emptyStars)
        .fill()
        .map((_, i) => <span key={`e${i}`}>&#9734;</span>)}
      <span className="rating-number">{Number(rating).toFixed(1)}</span>
    </div>
  );
}

const Hoteles = ({data}) => {
  const hotelesArr = data
  console.log(hotelesArr)
  return (
    <div className="hotel-wrapper">
      <h2 className="hotel-title">Sugerencia de Hospedaje</h2>

      <div className="hotel-grid">
        {hotelesArr.map((h, i) => (
          <div className="hotel-card" key={i}>
            <h3>{h.nombre}</h3>
            <div className="hotel-direccion">
              <p>{h.direccion}</p>
              <p>{h.direccion_colonia}</p>
            </div>
            <StarRating rating={h.rating} />
            <p>{h.tiempo}</p>
            <p>{h.precio}</p>

            <div className="hotel-btns">
              <a href={h.ubicacion} target="_blank" rel="noopener noreferrer" className="btn">
                Ver ubicación
              </a>

              <a href={`tel:${h.telefono}`} className="btn call">
                Llamar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hoteles