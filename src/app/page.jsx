import { prisma } from '@/libs/prisma'
import TaskCard from '@/components/TaskCard'
async function loadTasks() {
  //obteniendo de la base de datos
  return await prisma.task.findMany()

  //haciendo una peticion HTTP /api/tasks
  //------------------------------------------
  /*
  const res = await fetch('http://localhost:3000/api/tasks')
  const data = await res.json()
  */
}

async function Tareas() {

  const tasks = await loadTasks()
  console.log(tasks)

  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>
        {tasks.map(task => (
          <TaskCard task={task} key={(task.id)} />
        ))}
      </div>
    </section>
  )
}

export default Tareas