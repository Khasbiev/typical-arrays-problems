
exports.min = function min (array) {
  if ((typeof array === 'object')&&(array.length !== 0)){
  return Math.min.apply(null, array)
  }

  else{ 
  	return 0;
  }
}

exports.max = function max (array) {
  if ((typeof array === 'object')&&(array.length !== 0)){
  return Math.max.apply(null, array)
  }

  else{ 
  	return 0;
  }
}

exports.avg = function avg (array) {
  if ((typeof array === 'object')&&(array.length !== 0)){
    let summa = 0;
    let kolVo = 0;
for( let i = 0; i < array.length; i++)
{
  summa += array[i];
  kolVo++;
}
return summa/kolVo;
  
  }
  else{ return 0;}
}
