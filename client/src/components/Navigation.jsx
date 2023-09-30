import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="flex justify-between py-3 border border-[#202020] border-b-indigo-400">
            <Link to="/tasks">
                <h1 className="font-bold text-3xl m-5">Tasks App</h1>
            </Link>

            <Link 
            className="bg-indigo-500 p-3 rounded-xl text-center m-5"
            to="/tasks-create">Create Task</Link>
        </div> 
    )
}

export default Navigation
