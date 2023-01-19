import { useState } from "react"

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({
      title,
      description,
    })
    setTitle("")
    setDescription("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
      </div>
      <div>
        <textarea
          placeholder="Escribe tu descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>
      <button type="submit">Guardar</button>
    </form>
  )
}

export default TaskForm
