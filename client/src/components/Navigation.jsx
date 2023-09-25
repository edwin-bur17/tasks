import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="flex justify-between py-3">
            <Link to="/tasks">
                <h1 className="font-bold text-3xl mb-4">Tasks App</h1>
            </Link>

            <Link 
            className="bg-indigo-500 px-2 py-2 rounded-xl text-center"
            to="/tasks-create">Create Task</Link>
        </div> 
    )
}

export default Navigation
