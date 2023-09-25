import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api"
import { TaskCard } from "./TaskCard"


const TasksList = () => {

    const [tasks, setTasks] = useState([]) // inicia como un arreglo vacio y luego se llena

    useEffect(() => {
        async function loadTasks() {
            const respuesta = await getAllTasks();
            console.log(respuesta)
            setTasks(respuesta.data) // Acceder al arreglo de las tareas del backend
        }
        loadTasks() // llamar la funcion
    }, []) // deben ir los corchetes

  return (
    <div className="grid grid-cols-3 gap-3">
      {/* iterar sobre el arreglo */}
      {tasks.map((task) =>(
        <TaskCard key={task.id} task={task}/>
        ))}
    </div>
  )
}

export default TasksList
