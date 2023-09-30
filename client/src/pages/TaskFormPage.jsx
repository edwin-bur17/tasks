import { useEffect } from 'react' // 
import { useForm } from 'react-hook-form' // el useForm Para capturar los datos de los inputs, textarea etc
import { createTask, deleteTask, getTask, updateTask } from '../api/tasks.api' // importar la funcion de eliminar, crear y editar
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'


const TaskFormPage = () => {
  const { register, handleSubmit, setValue, formState: {
    errors // Objeto que se llena si existe un error
  } } = useForm()
  // register: capturar el contenido del input en lugar de usar el useState y el onchange
  // handleSubmit: para el evento del envio del formulario
  // formState: estado del formulario
  // setValue: permite colocar valores al formulario

  const navigate = useNavigate() // Para la navegacion
  const params = useParams() // Extraer parametros

  // Envio del formulario
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) { // Editar tarea
      await updateTask(params.id, data) // Recibe el id y la data de los cambios si los hay
      toast.success('Tarea Actualizada', {
        position: "top-center",
        style: {
          background: "#101010",
          color: "#ffffff"
        }
      }) // Alerta success
    } else {// Crear la tarea
      await createTask(data)
      toast.success('Tarea creada', {
        position: "top-center",
        style: {
          background: "#101010",
          color: "#ffffff"
        }
      }) // Alerta success
    }
    navigate('/tasks') // reedirecion luego de editar o crear
  })

  // Llenar los campos con la informacion de cada tarea al editar
  useEffect(() => {
    async function loadTask() { // Funcion para cargar los datos
      if (params.id) {
        const { data: { title, description } } = await getTask(params.id)
        setValue('title', title) // cargar el valor de cada input
        setValue('description', description) // cargar el valor de cada input
      }
    }
    loadTask(); // ejecutar la funcion cargar datos
  }, [])

  return (
    <div className='max-w-xl mx-auto'>

      <form onSubmit={onSubmit} className='m-5'>
        <input
          type="text"
          className='bg-zinc-700 rounded-lg p-3 block w-full mb-3'
          placeholder='title'
          {...register("title", { required: true })} // Implemetacion del useForm
        />
        {errors.title && <span>This filed is required</span>}
        <textarea
          rows="3"
          className='bg-zinc-700 rounded-lg p-3 block w-full mb-3'
          placeholder='Description'
          {...register("description", { required: true })} // Implemetacion del useForm
        ></textarea>
        {errors.description && <span>This filed is required</span>}
        <button
          className='bg-indigo-500 hover:bg-indigo-600 p-3 rounded-lg w-full mt-3'
        >Save</button>
      </form>
      {/*  mostrar boton de eliminar cuando haya un id */}
      {params.id &&
        <div className='flex justify-end'>
          <button
            className='bg-red-500 hover:bg-red-600 p-3 rounded-lg w-48 mt-3'
            // eliminar tarea
            onClick={async () => {
              const accepted = window.confirm('are you sure?')
              if (accepted) {
                await deleteTask(params.id)
                toast.success('Tarea eliminada', {
                  position: "top-center",
                  style: {
                    background: "#101010",
                    color: "#ffffff",
                    padding: "5px 10px"
                  }
                }) // Alerta success
                navigate('/tasks') // navegacion luego de eliminar
              }
            }}

          >
            Delete
          </button>
        </div>
      }
    </div>
  )
}

export default TaskFormPage
