import { useState,useContext  } from "react"
import TaskCreate from "./TaskCreate"
import TasksContext from '../context/task'

function TaskItem({task}) {

    const {deleteTaskById,updateTaskById} = useContext(TasksContext)
    const [showEdit,setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        deleteTaskById(task.id)
    }
    const handleEditClick = () => {
        setShowEdit(true)
    }
    const handleSubmit = (id,updatedTitle,updatedTaskDesc) =>{
        setShowEdit(false)
        updateTaskById(id,updatedTitle,updatedTaskDesc)
    }


    if(showEdit){
        return(
           <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/> 
        )
    }
    else{
        if(task.title!="" && task.taskDesc!=""){
            return (
                <div className="task-item">
                    <h3>Title</h3>
                    <p>{task.title}</p>
                    <h3>Description</h3>
                    <p>{task.taskDesc}</p>
                    <div className="buttons">
                        <button id="delete-button" onClick={handleDeleteClick}>Delete</button>
                        <button id="edit-button" onClick={handleEditClick}>Edit</button>
                    </div>
                </div>
              )
        }
    }
    
    
}

export default TaskItem