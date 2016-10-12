var fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
  var palabras,
      lineas = 0,
      incremento;
  if (err) {
     return console.error(err);
  }
  palabras = data.length > 0 ? 1 : 0;
  data.forEach(function (each) {
    if (each !== 32 && incremento === 1) {
      palabras = palabras + 1;
      incremento = 0;
    }
    switch(each) {
      case 10: // LF
      lineas = lineas + 1;
      break;
      case 32: // Space
        incremento = 1;
      break;
    }
  });
  console.log('Letras', data.length);
  console.log('Palabras', palabras);
  console.log('Lineas', lineas);
});
