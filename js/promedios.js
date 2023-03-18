let actividades= [
    {id:1, nombre:'Actividad 1', nota:0.0},
    {id:2, nombre:'Actividad 2', nota:1.5},
    {id:3, nombre:'Actividad 3', nota:5.0}
];

function mostrarMensaje(promedio){
    let mensaje=promedio>=3?'Felicitaciones, aprobó':'Lo sentimos, vuelva a intentarlo'
    document.getElementById('mensajeNota').innerText=mensaje;
}
function mostrarActividades(){
    let filas = '';
    let sumatoria = 0;
    for(let actividad of actividades){
        filas += '<tr>'
        filas += '  <td>'+actividad.id+'</td>';
        filas += '  <td>'+actividad.nombre+'</td>';
        filas += '  <td>'+actividad.nota+'</td>';
        filas += '  <td>';
        filas += '      <button>Modificar</button>';
        filas += '      <button>Eliminar</button>';
        filas += '  </td>';
        filas += '</tr>';
        sumatoria+=actividad.nota;
    }
    let promedio=sumatoria/actividades.length;
    document.getElementById('promedioTb')
        .getElementsByTagName('tbody')[0]
        .innerHTML=filas;
        document.getElementById('promedioText')
            .innerText='Su promedio es: '+promedio;
            mostrarMensaje(promedio);
}

mostrarActividades();