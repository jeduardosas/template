import React, { useState, useEffect } from 'react';
import convertirMes from '../../../functions/convertirMes.js';
import './contador.css'


const CountDown = ({titulo,subtitulo, fechaDia, fechaMes, fechaYear, hora, minutos}) => {
  //Destructurar la data
  

  //convertir mes en numero
  const number = convertirMes(fechaMes);

  const targetDate = new Date(Number(fechaYear),number, Number(fechaDia), Number(hora), Number(minutos));

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  function calculateTimeRemaining(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      // Si la fecha objetivo ya pasó, devolvemos todos los valores como 0
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
      <div className='contador-contenedor'>
        <div className = 'contador-titulo-contenedor'>
          <h3>{titulo}</h3>
          <p>{subtitulo}</p>
        </div>
        <div className='contador' >
          <div className='contador-item'>
            <p>{timeRemaining.days}</p>
            <span>Días</span>
          </div>

          <div className="contador-item">
            <p>{timeRemaining.hours}</p>
            <span>Horas</span>
          </div>

          <div className="contador-item">
            <p>{timeRemaining.minutes}</p>
            <span>Minutos</span>
          </div>

          <div className="contador-item">
            <p>{timeRemaining.seconds}</p>
            <span>Segundos</span>
          </div>
        </div>
      </div>
  );
};

export default CountDown;
