import {arrayFotos} from './src/functions/arrayFotos.js';
const datosComunes = {
  frase:'',
  imagenes:arrayFotos(10),
  fechaDia:'27',
  fechaMes:'Diciembre',
  fechaYear:'2025',
  religiosa:{
    hora:'13',
    minutos:'00',
    lugar:'Parroquia de San Gerardo María Mayela',
    direccion:'Abasolo, 56',
    direccionCol:'Centro',
    direccionCd:'Iguala de la independencia, Gro.',
    ubicacion:'https://maps.app.goo.gl/uD3MnRiPXFR6LvoU6',

  },
  recepcion:{
    hora:'14',
    minutos:'30',
    lugar:'Finca Santa Ana',
    direccion:'Carretera Iguala-Taxco',
    direccionCol:'El Naranjo',
    direccionCd:'Iguala de la independencia, Gro.',
    ubicacion:'https://maps.app.goo.gl/6js4pwhXqLpfuuGe7'
  },
  detalles: [
    {
      titulo: 'Lluvia de Sobres',
      contenido: [
        { tipo: 'texto', texto: 'Tu presencia es el mejor regalo, pero si deseas tener un detalle conmigo, agradeceré sea en efectivo, gracias.' }
        
      ]
    },
    {
      titulo: 'Código de Vestimenta',
      contenido: [
        { tipo: 'texto', texto: 'FORMAL DE DÍA' },
        {tipo:'texto', texto:'El color verde se reserva para la quinceañera.'},
        {tipo:'texto', texto:'El evento será en jardín, sugerimos colores claros y calzado cómodo.'},
        
        
      ]
    },
    
  ],
  timeLine:{
    settings:{
      bgColor:'#fff',
      color:'#000',
      lineColor:'#000',
    },
    protocol:[
      {
        id:1,
        time:' 13:00 Hrs.', 
        name:'Ceremonia Religiosa',
        icon:'iglesia',
      },

      {
        id:2,
        time:'14:30 a 15:30 Hrs.',
        name:'Recepción',
        icon:'recepcion',
      },
      {
        id:3,
        time:'16:00 Hrs.',
        name:'Banquete',
        icon:'comida'
      },
      {
        id:4,
        time:'18:00 Hrs.',
        name:'Protocolo',
        icon:'brindis'
      },
      
      {
        id:5,
        time:'19:00 Hrs.',
        name:"Let's Dance",
        icon:'musica',
      },
    ]
  },
  hoteles:[ //PENDIENTE
    {
      nombre:'Hotel Grand Plaza',
      direccion:'Miguel Hidalgo,7',
      direccion_colonia:'Centro, Iguala de la Independencia',
      telefono:'7333326990',
      tiempo:'8-12 min. al evento',
      precio:'Desde $1,507 MXN por noche',
      rating:'4.4',
      ubicacion:'https://maps.app.goo.gl/F7diNYwonneRNgz8A'
    },
    {
      nombre:'Hotel Maria Isabel',
      direccion:'Constitución, 3',
      direccion_colonia:'Centro, Iguala de la Independencia',
      telefono:'7333333233',
      tiempo:'7-10 min. al evento',
      precio:'Desde $1,391 MXN por noche',
      rating:'4.1',
      ubicacion:'https://maps.app.goo.gl/6MTB65ZT6jRmLcAx7'
    },
    {
      nombre:'Hotel Real 1900',
      direccion:'Miguel Hidalgo, 6',
      direccion_colonia:'Centro, Iguala de la Independencia',
      telefono:'7331101106',
      tiempo:'9-13 min. al evento',
      precio:'Desde $1,715 MXN por noche',
      rating:'4.6',
      ubicacion:'https://maps.app.goo.gl/ZwmuWzaLaxGmzd2B9'
    },

  ]

}

const tipoevento={
  type:'',
  boda:{
    nombreNovia:'',
    nombreNovio:'',
    padresNovia:{
      papa:' ',
      mama:''
    },
    padresNovio:{
      papa:'',
      mama:'',
    },
    padrinos:{
      padrino:'',
      madrina:'',
    },
    confirmacion:{
      novio:'',
      novia:''
    },
  },
  
  bautizo:{
    type:'',
    nombre:'',
    padres:{
      papa:'',
      mama:''
    },
    padrinos:{
      padrino:'',
      madrina:''
    },
    confirmacion:''
  },
  
  xv:{
    type:'xv',
    nombre:'Aleida',
    padres:{
      papa:'Omar Antonio Zamilpa Bello',
      mama:'Aleides Fernández Morales'
    },
    padrinos:{
      padrino:'Héctor García Moreno',
      madrina:'Ana Margarita García Moreno'
    },
    confirmacion:'9844088408' //PENDIENTWE
  }
}

const getData = (type)=>{
  return {...datosComunes, ...tipoevento[type]}
}

export default getData

