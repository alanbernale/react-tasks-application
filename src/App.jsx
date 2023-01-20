import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import {useEffect, useState} from "react"
import {tasks as taskArray} from "./data/tasks"

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(taskArray)
  }, [])

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ])
  }

  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  )
}

export default App
