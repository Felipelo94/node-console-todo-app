const Tarea = require("./tarea");
const colors = require("colors");

class Tareas {
  _listado = {};

  get listadoArray() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  borrarTarea(id) {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc) {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    this.listadoArray?.map((tarea, index) =>
      console.log(
        colors.green(`${index + 1}.`),
        "::",
        tarea.desc,
        tarea.completadoEn !== null
          ? colors.green("Completada")
          : colors.red("Pendiente")
      )
    );
  }

  listarTareasCompletadas() {
    let contador = 0;

    this.listadoArray?.map(
      (tarea) =>
        tarea.completadoEn !== null &&
        console.log(
          colors.green((contador += 1) + ".").toString(),

          tarea.desc,
          "::",
          colors.green(tarea.completadoEn)
        )
    );
  }
  listarTareasPendientes() {
    let contador = 0;
    this.listadoArray?.map(
      (tarea) =>
        tarea.completadoEn === null &&
        console.log(
          colors.green((contador += 1) + ".").toString(),

          tarea.desc,
          "::",
          colors.red("Pendiente")
        )
    );
  }

  toggleCompletadas(ids) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArray.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
