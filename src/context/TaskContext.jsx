import {createContext, useEffect, useState} from "react"
import {tasks as taskArray} from "../data/tasks"

export const TaskContext = createContext(null)

export function TaskContextProvider({children}) {
  const [tasks, setTasks] = useState([])

  const createTask = (task) => {
    setTasks([...tasks, {
      id: tasks.length,
      title: task.title,
      description: task.description
    },])
  }

  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  useEffect(() => {
    setTasks(taskArray)
  }, [])

  return <TaskContext.Provider value={{
    tasks, createTask, deleteTask
  }}>
    {children}
  </TaskContext.Provider>
}
