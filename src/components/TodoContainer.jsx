import React, { useContext } from 'react'
import Header from './Header'
import InputField from './InputField'
import Tasks from './Tasks'
import Footer from './Footer'
import { useSelector} from 'react-redux'
import { context } from '../App'

function TodoContainer() {

  const {active, completed} = useContext(context)

  const tasks = useSelector(state=>state.taskReducer)
  const completedTasks = useSelector(state=>state.completeReducer)

  const displayData = () => {
    let display = [...tasks];
    if (active) {
      display = display.filter((item) => !completedTasks.includes(item));
    } else if (completed) {
      display = [...completedTasks];
    }
    return display;
  };
  

  const display = displayData()


  return (
    <div className='todo-container'>
        <Header/>
        <InputField/>
        {
          display.map((item)=>{
            return <Tasks task={item} key={item}/>
          })
        }
        {
          (tasks && tasks.length>0) && <Footer/>
        }
        
    </div>
  )
}

export default TodoContainer