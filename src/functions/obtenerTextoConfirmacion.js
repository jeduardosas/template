const obtnerTextoConfirmacion = (type,nombre1='',nombre2='',numero='')=>{

  
  
  if(type === 'xv'){
    return `https://api.whatsapp.com/send?phone=+52${numero}&text=¡Hola!👋%20Quiero%20confirmar%20mi%20asistencia%20a%20los%20XV%20de%20*${nombre1}*%20`
  }

  if(type=== 'boda'){
    return `https://api.whatsapp.com/send?phone=+52${numero}&text=¡Hola!👋%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20Boda%20de%20*${nombre1}*%20y%20*${nombre2}*%20💒🤵🏻👰🏻`
  }
  if(type === 'bautizo'){
    numero = nombre2
    return `https://api.whatsapp.com/send?phone=+52${numero}&text=¡Hola!👋%20Quiero%20confirmar%20mi%20asistencia%20al%20bautizo%20de%20*${nombre1}*%20`
  }
}

const obtenerTextoFormulario=({
  nombreInvitado,
  numero,
  tipoEvento,         // 'boda' | 'xv' | 'bautizo' | etc
  nombreNovio,
  nombreNovia,
  nombreQuinceañera,
  nombreBautizado,
  numeroTelefono
}) =>{

  let textoEvento = '';
  let textoNumero = 'asistencias'

  if(numero == 1) textoNumero = 'asistencia';

  // *** motor semántico ***
  switch(tipoEvento.toLowerCase()){
    case 'boda':
      textoEvento = `la boda de ${nombreNovio} y ${nombreNovia}`;
      break;
    
    case 'xv':
      textoEvento = `los XV años de ${nombreQuinceañera}`;
      break;
    case 'bautizo':
      textoEvento = `el bautizo de ${nombreBautizado}`;
      break;
    default:
      textoEvento = tipoEvento; // fallback inteligente
  }

  const texto = `Hola, soy ${nombreInvitado} y quiero confirmar ${numero} ${textoNumero} para ${textoEvento}`;
  const mensajeEncoded = encodeURIComponent(texto);

  return `https://wa.me/52${numeroTelefono}?text=${mensajeEncoded}`;
}

export  {obtnerTextoConfirmacion, obtenerTextoFormulario};