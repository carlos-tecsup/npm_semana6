var parametros = require('./lib/modulos')
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = parametros;
    }
    exports.parametros = parametros;
} else {
    root.parametros = parametros;
}