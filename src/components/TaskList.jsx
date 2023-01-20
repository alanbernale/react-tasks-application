import TaskCard from "./TaskCard"
import {TaskContext} from "../context/TaskContext"
import {useContext} from "react"

function TaskList() {
  const {tasks} = useContext(TaskContext)

  return <>
    {tasks.map((task) => <TaskCard key={task.id} task={task}/>)}
  </>
}

export default TaskList
