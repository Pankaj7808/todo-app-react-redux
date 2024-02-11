import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { undoCompleteTask , deleteTask} from "../actions";
import { context } from '../App'



function Footer() {
  const completedTasks = useSelector(state => state.completeReducer)
  const tasks = useSelector(state => state.taskReducer)
  const dispatch = useDispatch()

  const { active, completed, setActive, setCompleted } = useContext(context)


  const setItemNumber = () => {
    const count = tasks.length - completedTasks.length
    if (count === 0) {
      return 'No items left'
    } else if (count === 1) {
      return `1 item left`
    } else {
      return `${count} items left`
    }
  }

  const handleCompleted = () => {
    setActive(false)
    setCompleted(true)
  }

  const handleActive = () => {
    setActive(true)
    setCompleted(false)
  }

  const handleAll = () => {
    setActive(false)
    setCompleted(false)
  }

  const handleClear = () => {
    completedTasks.forEach(element => {
      dispatch(undoCompleteTask(element))
      dispatch(deleteTask(element))
    });
  }


  return (
    <div className='footer-container'>
      <p>{setItemNumber()}</p>
      <div className="status">
        <button className={` ${!active && !completed ? 'active-list' : ''} `} onClick={handleAll}>All</button>
        <button className={`${active ? 'active-list' : ''} `} onClick={handleActive}>Active</button>
        <button className={` ${completed ? 'active-list' : ''}`} onClick={handleCompleted}>Completed</button>

      </div>
      <button onClick={handleClear}>clear completed </button>
    </div>
  )
}

export default Footer