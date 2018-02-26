function main () {
    oFormulario = {
        oDatos : {},
        oParrafo : document.getElementById("parrafo_1"), // referencia del párrafo donde escribir
        escribeDatos : function () {
            //ocultar formulario
            document.getElementById("form_1").classList.toggle("oculto")
            //mostrar bloque div para el resultado
            document.getElementById("resultado").classList.toggle("oculto");
            //incorporamos a la lista cada elemento del objeto		
            for (var i in this.oDatos) {
                this.oParrafo.innerHTML += "<li>" + i + ": <strong>" +
                    this.oDatos[i] + "</strong></li>";
            };
        }, // Fin de la funcion escribeDatos
        getTextos: function () {
            var inputs = document.querySelectorAll("input[type='text']")
            for (var i=0; i<inputs.length; i++) {
                this.oDatos[inputs[i].name] = inputs[i].value;
            }
            this.oDatos.Comentarios = document.getElementById("coment").value;
            }, //Fin de la función getTextos 
        getRRadiobuttons : function () {
            var aRadio = document.getElementsByName("pregunta");
                for(var i=0; i < aRadio.length; i++) {
                    if (aRadio[i].checked) {
                        this.oDatos["Preparado para dar Joomla!"] = 
                            aRadio[i].value.toUpperCase();
                     };
                };
            }, //Fin de la función getRRadiobuttons
        getCheckbox : function () {        
            this.oDatos["Condiciones del contrato leidas"] =
                (document.getElementById("condiciones").checked) ? 
                    "SI" : "NO";		
            this.oDatos["Condiciones de confidencialidad leidas"] =
                (document.getElementById("condiciones").checked) ?
                    "SI" : "NO";
        }, //Fin de la función getCheckbox

        getSelectOptions: function () {
            var oOpciones = document.getElementById("opciones");
            var sOpcion = oOpciones.options[oOpciones.selectedIndex];
            var textoSeleccionado = sOpcion.text; // Segundo valor
            //var valorSeleccionado = sOpcion.value; // 2
            this.oDatos["Nivel de JavaScript"] = textoSeleccionado;
            }, //Fin de la función getSelectOptions
        recogeDatos : function (oE) {
                // Llamada a las funciones get de cada conjunto de controles
            this.getTextos();
            this.getRRadiobuttons();
            this.getCheckbox();
            this.getSelectOptions();
            //llamada a la función que procesara el arry presentandolo en pantalla
            this.escribeDatos();
            //oE.preventDefault();
        } // Fin de la funcion recogeDatos
    }; // Fin del objeto oFormulario

    document.getElementById("submit").onclick = oFormulario.recogeDatos.bind(oFormulario)
}

document.addEventListener("DOMContentLoaded", main, false);	
//metodo de DOM nivel 2  que indica al agente de usuario que permanezca atento:
// evento: en este caso la carga completa de la página
// función a lanzar: en este caso iniciaBoton
// orden del flujo de eventos: false salta la fase de captura