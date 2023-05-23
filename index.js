var libreria = require("tecsup-2023-venturaramirez");

var texto = "%a% %b% %c%";
var idioma = "en";
var reemplazos = {
    "en": {
        "a": "Testing",
        "b": "Replace",
        "c": "Module"
    },
    "es": {
        "a": "Probando",
        "b": "Modulo",
        "c": "Reemplazar"
    }
};

var resultado = libreria.replace(texto, reemplazos[idioma]);

console.log(resultado);