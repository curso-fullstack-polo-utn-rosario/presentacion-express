var fs = require('fs');

var stream = fs.createReadStream(process.argv[2]);
var palabras = 0,
    lineas = 0,
    letras = 0;

stream.on('data', function (data) {
  var incremento = 0;
  letras = letras + data.length;
  palabras = data.length > 0 && palabras === 0 ? 1 : 0;
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
});

stream.on('end', function () {
  console.log('Letras', letras);
  console.log('Palabras', palabras);
  console.log('Lineas', lineas);
});
