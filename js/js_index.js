function imprimir_tabla()
    { 
      $("#tabla_empleados")
    .find("tr")
    .remove()
    .end();

var tabla = $('#tabla_empleados table');
var listaDB = [ "12345", " Alex", "Activo", "Contador"];
var obj = { one: "12345", two: " Alex", three: "Activo", four: 4, five: 5 };

tabla.append('<thead class="thead-dark"><tr><th scope="col">Cedula</th><th scope="col">Nombre</th><th scope="col">Cargo</th><th scope="col">Estado</th></tr></thead>');

$.each(listaDB, function(i,val){
    tabla.append(
        $('<tr></tr>').append(
            $('<td></td>').append(val)            
        )
    );
});
    }