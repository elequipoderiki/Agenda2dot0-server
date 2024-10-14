## Servidor to-do list 
#### Servicio para guardar, editar y eliminar tareas de usuarios en una base de datos. Una tarea pertenece a un usuario y incluye un nombre, su descripción, y estado. Este estado indica si la tarea está inactiva, en progreso o terminada. 
#### Implementado con tecnología Express, Mongoose, NodeJS y con motor de base de datos MongoDB.

### Crear servidor
- clonar repositorio y ejecutar npm install
- luego de que se haya terminado de ejecutar npm install ejecutar npm start
- una vez iniciado se puede acceder a los servicios mediante los endpoints enumerados a continuación

### Endpoints
#### En servidor local, puerto 3001


localhost:3001/tasks
> - tipo GET
> - devuelve todas las tareas del usuario actual
----------------------
localhost:3001/tasks/add
- parámetros
    - descripcion - string
    - nombre - string
    - usuario - string 
    - estado - string
> - tipo POST
> - crea tarea con los campos definidos en el body de la petición
----------------------
localhost:3001/tasks/edit/\<id de tarea>
- parámetros
    - descripcion - string
    - nombre - string
    - usuario - string 
    - estado - string
> - tipo PUT
> - actualiza, si existe la tarea con ese id, con los parámetros del body de la petición.
----------------------
localhost:3001/tasks/\<id de tarea>
> - tipo GET
> - obtiene, si existe la tarea con ese id, los datos de la tarea.
----------------------
localhost:3001/tasks/byuser/\<email de usuario>
> - tipo GET
> - obtiene, si existe el usuario con ese email, las tareas del usuario.
----------------------
localhost:3001/tasks/remove/\<id de tarea>
> - tipo DELETE
> - elimina, si existe la tarea con ese id, a la tarea.





