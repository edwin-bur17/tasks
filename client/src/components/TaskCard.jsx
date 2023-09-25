import { useNavigate } from "react-router-dom"

export function TaskCard({ task }) {
    const navigate = useNavigate() // Navegacion
    return (
        <div
            style={{ background: "black" }}
            onClick={() => {
                navigate(`/tasks/${task.id}`) // ruta concatenar el id de cada tarea
            }}
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
        >
            <h1 className="font-bold uppercase">{task.title}</h1>
            <p>{task.description}</p>
        </div>
    )
}


