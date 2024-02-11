import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addTask, completeTask, undoCompleteTask } from '../actions';

function InputField() {

  const tasks = useSelector((state) => state.taskReducer)
  const dispatch = useDispatch()
  const completedTasks = useSelector((state) => state.completeReducer)
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!tasks.includes(task)) {
      dispatch(addTask(task))
      setTask('')
    } else {
      alert(`${task} is already in list`)
    }
  }

  const handleSelectAll = () => {
    if (tasks.length !== completedTasks.length) {
      tasks.forEach(element => {
        !completedTasks.includes(element) && dispatch(completeTask(element))
      });
    }else if(tasks.length === completedTasks.length){
      completedTasks.forEach(element=>{
        dispatch(undoCompleteTask(element))
      })
    }

  }

  return (
    <div className='input-container border'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FaAngleDown onClick={handleSelectAll} style={{ fontSize: '25px' }} />
        <input type="text" placeholder='Add some task' value={task} onChange={(e) => setTask(e.target.value)} />
      </form>
    </div>
  )
}

export default InputField