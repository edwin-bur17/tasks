import { useNavigate } from "react-router-dom"

const TaskCard = ({ task }) => {
    const navigate = useNavigate() // Navegacion
    return (
        <div    
            onClick={() => {
                navigate(`/tasks/${task.id}`) // ruta concatenar el id de cada tarea
            }}
            className="bg-neutral-950 rounded-xl p-5 hover:bg-zinc-900 cursor-pointer"
            
        >
            <h1 className="font-bold uppercase">{task.title}</h1>
            <p>{task.description}</p>
        </div>
    )
}
export default TaskCard


