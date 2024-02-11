import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { completeTask, undoCompleteTask } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../actions';


function Tasks({ task }) {
  const completedTasks = useSelector((state) => state.completeReducer)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteTask(task))
    dispatch(undoCompleteTask(task))
  }

  const handleComplete = ()=>{
    if(!completedTasks.includes(task)){
      dispatch(completeTask(task))
    }else{
      dispatch(undoCompleteTask(task))
    }
  }

  return (
    <div className='task-container'>
      <div className="task">
        <div onClick={handleComplete}
        style={{ fontSize: '24px', color: 'green', border: '1px solid green', borderRadius: '50%', width:'25px', height:'25px' }}>
          {
             completedTasks.includes(task) && <FaCheck />
          }
        </div>
        <h5 style={{ textDecoration: completedTasks.includes(task) ? 'line-through' : 'none', fontSize:'16px' }}>{task}</h5>
      </div>
      <RxCross2 className='cross' onClick={handleDelete} />
    </div>
  )
}

export default Tasks