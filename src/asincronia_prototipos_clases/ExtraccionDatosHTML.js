let html = "<html><body><h1 class=\"h1 font text\">Formacion tecnica</h1></body></html>";

let expresion = new RegExp(/<h1.*class=".*">.*<\/h1>/);
let resultado = expresion.exec(html);

console.log(resultado);