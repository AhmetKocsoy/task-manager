import React, { useState, useContext } from 'react'
import { TaskListContext } from './TaskListContext'

const TaskForm = () => {
  const { addTask, clearList } = useContext(TaskListContext)
  
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTask(title)
    setTitle('')
  }
  const handleChange = e => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="taskInput"
      />
      <div className="buttons">
        <button type="submit" className="submitBtn">
          add task
        </button>
        <button className="clearBtn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm