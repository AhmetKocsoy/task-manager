import React, { createContext, useState, useEffect, useContext } from 'react'
import './App.css'
export const TaskListContext = createContext()




const TaskListContextProvider = props => {
  const initialCount = localStorage.getItem('count')
  const [count, setCount] = useState(initialCount+0)
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])



  // Add tasks
  const addTask = title => {
    setTasks([...tasks, { title, id: count }])
    setCount(count+1)
    localStorage.setItem("count",count)
  }

  // Remove tasks
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Clear tasks
  const clearList = () => {
    setTasks([])
  }

  const finishTask = id => {
    document.getElemetById(id).className="finishedTask"
  }
  

  return (
    <TaskListContext.Provider
      value={{
        count,
        tasks,
        addTask,
        removeTask,
        clearList,
        finishTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider
