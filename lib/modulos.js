let moment = require('moment');
exports.navidad = function() {
    const hoy = moment();
    const formato = "DD/MM/YYYY";
    const navidad = moment("25-12-2020", "DD-MM-YYYY");
    let dias = navidad.diff(hoy, "days")
    return "FALTAN :" + dias + "DIAS PARA NAVIDAD";
}

exports.calcularEdad = function(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}


// exports.replace = function(objetivo, reemplazos) {
//     var param_encontrados = objetivo.match(/%(.*?)%/g);
//     if (param_encontrados) {
//         var nombre_param = null,
//             valor_reemplazo = null;
//         for (var i = 0; i < param_encontrados.length; i++) {
//             nombre_param = param_encontrados[i].replace(/%/g, '');
//             valor_reemplazo = reemplazos[nombre_param];
//             objetivo = objetivo.replace(param_encontrados[i], valor_reemplazo);

//         }
//         return objetivo;
//     }
// }