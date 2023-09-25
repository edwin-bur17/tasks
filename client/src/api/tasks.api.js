import axios from 'axios'

// PETICIONES A LA API REST_FRAMEWORK

// creacion de la variable de entorno entre comillas
const tasksApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/tasks/"
})

// Listar las tareas
export const getAllTasks = () => tasksApi.get("/")

// Obtener cada tarea individualmente
// Recibe un parametro id
// Importante que termine en un slash
export const getTask = (id) => tasksApi.get(`/${id}/`)

// Crear tarea
// recibe un parametro task que es donde esta contenido de la tarea a crear
export const createTask = (task) => tasksApi.post("/", task)

// Eliminar tarea
// Recibe el id de la tarea a eliminar
export const deleteTask = (id) => tasksApi.delete(`/${id}`)

// Editar tarea
// recibe el id y los datos a actualizar
// Importante que termine en un slash
export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task) 
