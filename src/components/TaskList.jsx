import TaskItem from "./TaskItem"
import TasksContext from '../context/task'
import { useContext } from "react"

function TaskList() {
  const {tasks} = useContext(TasksContext)
  
  return (
    <div className="task-list">
        {tasks.map((task,index)=>{
          return(
            <TaskItem key={index} task={task}/>
          )
        })}
    </div>
  )
}

export default TaskList