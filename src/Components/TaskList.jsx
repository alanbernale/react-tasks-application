import TaskCard from "./TaskCard"

function TaskList({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  )
}

export default TaskList
