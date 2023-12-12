Node.js Task Manager

Este proyecto es una aplicación simple de gestión de tareas construida con Node.js que opera en la línea de comandos (CLI). Utiliza el paquete inquirer para proporcionar un menú interactivo que permite a los usuarios crear y borrar tareas de manera fácil y rápida. A continuación, se proporcionan instrucciones sobre cómo instalar y utilizar la aplicación.
Instalación

Antes de comenzar, asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo aquí.

    Clona este repositorio en tu máquina local:

    bash

git clone https://github.com/Felipelo94/node-console-todo-app.git

Navega al directorio del proyecto:

bash

cd node-console-todo-app

Instala las dependencias:

bash

    npm install

Estructura de carpetas

```
└── 📁ToDoApp
    └── app.js
    └── 📁db
        └── data.json
        └── data.txt
    └── 📁helpers
        └── guardarArchivo.js
        └── inquirer.js
        └── mensajes.js
    └── 📁models
        └── tarea.js
        └── tareas.js
    └── package-lock.json
    └── package.json
```

Uso

Una vez que hayas instalado las dependencias, puedes utilizar el menú interactivo ejecutando el siguiente comando:

bash

node app.js

Esto iniciará el menú interactivo que te guiará a través de las opciones disponibles.
Opciones del menú

    Crear tarea: Permite al usuario agregar una nueva tarea.

    Listar tareas: Permite al usuario ver todas las tareas.

    Listar tareas completadas: Permite al usuario ver todas las tareas completadas.

    Listar tareas pendientes: Permite al usuario ver todas las tareas pendientes.

    Completar tareas: Permite al usuario seleccionar las tareas a completar.

    Borrar tarea: Permite al usuario borrar una tarea existente.

    Listar tareas: Muestra la lista de tareas.

    Salir: Cierra la aplicación.

Nota: Sigue las instrucciones en pantalla para completar cada opción.
Contribuciones

Si encuentras algún problema o tienes sugerencias para mejorar la aplicación, no dudes en crear un problema o enviar una solicitud de extracción. ¡Las contribuciones son bienvenidas!
