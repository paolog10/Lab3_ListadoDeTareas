window.onload=iniciar;

let tareas=[];

function iniciar() {
  let btnAgregar=document.getElementById("btnAgregar");
  btnAgregar.addEventListener("click", clickBtnAgregar);
}

function clickBtnAgregar() {
  let txtTarea=document.getElementById("txtTarea");
  let tarea=txtTarea.value;

  tareas.push(tarea);
  mostrarTareas();
}

function mostrarTareas() {
  let listado=document.getElementById("listado");
  let html="";
  let contador=1; //agregado por mí, quiero mostrar el número de tareas

  for (const tarea of tareas) {
    html += `${contador}. `+ tarea + "<br>";

    contador++;
  }

  listado.innerHTML=html;
}