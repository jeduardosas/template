import React, { useEffect, useRef, useState } from 'react';
import Icono from '../../atoms/iconos/Icono.jsx';
import Imagen from '../../atoms/imagen/Imagen.jsx';
import {Banda, Iglesia, Recepcion, Comida, Brindis, Musica, Votos, Fin, Cruz, Pastel } from '../../atoms/iconos/Index.jsx';
import './Timeline.css';

const iconMap = {
  banda:Banda,
  cruz:Cruz,
  iglesia: Iglesia,
  recepcion: Recepcion,
  comida: Comida,
  brindis: Brindis,
  musica: Musica,
  votos:Votos,
  fin:Fin,
  pastel:Pastel
};

const TimeLineItem = ({ event, index, isVisible, lineColor, timeLine, eventFontFamily, timeFontFamily, eventFontSize, timeFontSize, eventFontWeight, timeFontWeight, eventColor, timeColor, dotBorderColor }) => {
  const IconSVG = iconMap[event.icon];
  const isEven = index % 2 === 0;
  
  return (
    <div className={`timeline-item ${isEven ? 'left' : 'right'} ${isVisible ? 'visible' : ''}`}>
      <div className="timeline-content">
        {isEven ? (
          <>
            <div 
              className="timeline-time"
              style={{
                fontFamily: timeFontFamily,
                fontSize: timeFontSize,
                fontWeight: timeFontWeight,
                color: timeColor
              }}
            >
              {event.time}
            </div>
            <div className="timeline-dot">
              {IconSVG && (
                <Icono
                  IconoSVG={IconSVG}
                  ajustes={{
                    color: 'var(--colorTexto)' || "#000",
                    ancho: "40px",
                    alto: "40px",
                  }}
                />
              )}
            </div>
            <div 
              className="timeline-event"
              style={{
                fontFamily: eventFontFamily,
                fontSize: eventFontSize,
                fontWeight: eventFontWeight,
                color: eventColor,
              }}
            >
              {event.name}
            </div>
          </>
        ) : (
          <>
            <div 
              className="timeline-event"
              style={{
                fontFamily: eventFontFamily,
                fontSize: eventFontSize,
                fontWeight: eventFontWeight,
                color: eventColor,
              }}
            >
              {event.name}
            </div>
            <div className="timeline-dot">
              {IconSVG && (
                <Icono
                  IconoSVG={IconSVG}
                  ajustes={{
                    color: 'var(--colorTexto)' || "#000",
                    ancho: "40px",
                    alto: "40px",
                  }}
                />
              )}
            </div>
            <div 
              className="timeline-time"
              style={{
                fontFamily: timeFontFamily,
                fontSize: timeFontSize,
                fontWeight: timeFontWeight,
                color: timeColor
              }}
            >
              {event.time}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const TimeLine = ({ 
  timeLine, 
  tituloImagen,
  titulo,
  anchoImagen,
  lineColor = "var(--colorSecundario)", 
  eventFontFamily = "inherit", 
  timeFontFamily = "inherit",
  eventFontSize = "14px",
  timeFontSize = "14px",
  eventFontWeight = "normal",
  timeFontWeight = "bold",
  eventColor = "#333",
  timeColor = "#333",
  eventBackground = "#f9f9f9",
  dotBorderColor = "#acacac"
}) => {
  const timelineRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState({});
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setVisibleItems(prev => ({ ...prev, [index]: true }));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const items = timelineRef.current.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
      item.setAttribute('data-index', index);
      observer.observe(item);
    });

    return () => {
      items.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, [timeLine.protocol.length]);

  return (
    <>
      {tituloImagen ? <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}><Imagen ajustes={{imagen:titulo,ancho:anchoImagen }} /></div>  :<p className='timeline-titulo'>{titulo}</p>}
      <div className="timeline-container" ref={timelineRef}>
      
        <div 
          className="timeline"
          style={{ '--line-color': lineColor, '--dot-border-color': dotBorderColor }}
        >
          {timeLine.protocol.map((event, index) => (
            <TimeLineItem
              key={index}
              event={event}
              index={index}
              isVisible={visibleItems[index]}
              timeLine={timeLine}
              lineColor={lineColor}
              eventFontFamily={eventFontFamily}
              timeFontFamily={timeFontFamily}
              eventFontSize={eventFontSize}
              timeFontSize={timeFontSize}
              eventFontWeight={eventFontWeight}
              timeFontWeight={timeFontWeight}
              eventColor={eventColor}
              timeColor={timeColor}
              dotBorderColor={dotBorderColor}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeLine;