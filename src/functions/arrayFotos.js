

export const arrayFotos = (numero) =>{
  let array = [];
  for (let i = 1 ; i <= numero ; i++){
    const object = {src:`./img/images/${i}.webp`}
    array.push(object);

  }
  return array;
}