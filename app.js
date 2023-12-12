const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarTareasCompletadas();
        break;
      case "4":
        tareas.listarTareasPendientes();
        break;
      case "5":
        const ids = await mostrarListadoChecklist(tareas.listadoArray);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArray);
        if (id !== "0") {
          const confirmation = await confirmar("Estas seguro?");
          if (confirmation) {
            tareas.borrarTarea(id);
            console.log("Tarea Borrada");
          }
        }

        break;
    }

    guardarDB(tareas.listadoArray);

    await pausa();
  } while (opt !== "0");
};

main();
