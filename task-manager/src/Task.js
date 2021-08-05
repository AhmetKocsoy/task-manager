import React, { useContext } from 'react'
import { TaskListContext } from './TaskListContext'

const Task = ({ task }) => {
  const { removeTask, finishTask } = useContext(TaskListContext)
  return (
    <li className="listItem" id={task.id}>
      <span>{task.title} </span>
      <div>
        <button
          className="deleteTask"
          onClick={() => removeTask(task.id)}
        >
          remove task
        </button>{' '}
        <button className="finishTask" onClick={() => finishTask(task.id)}>
          finish task
        </button>
      </div>
    </li>
  )
}

export default Task