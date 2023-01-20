import TaskCard from "./TaskCard"

function TaskList({tasks, deleteTask}) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
      ))}
    </>
  )
}

export default TaskList
