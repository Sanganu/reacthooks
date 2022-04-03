import { useState,useEffect } from "react";
import Item from "react";


const TaskList =()=>{
    const[task,setTask]=useState([
        {
            tasktitle: "Worship",
            completed:false
         },
        {
            tasktitle:"Cook",
            completed:false
        }
    ])
    const[userTask,updateUserEntry]=useState("");
    const[userCheck, setUserTaskStatus]=useState(false);

    useEffect  (()=>{
        handleAddTask()
    },[])

    const handleAddTask = (event) => {
    
        var newData = [{tasktile:userTask,completed:userCheck}]
        setTask([...task,newData])
       
        console.log("Check",task)
    }
 

    return(<div className="container border p-8 m-2">

    <h1>TaskList</h1>
    <table className="container m-5 p-5">
        <thead>
        <tr>
            <th>Task</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
            
            {task.map((list,k) => (<tr key={k}>
                <td><p>{list.tasktitle}</p></td>
                <td><input type="checkbox" value={list.completed} onChange={setUserTaskStatus} /></td>
                </tr>))}
        </tbody>
        </table>
        <form>
            <label>Enter Task</label>
            <input id="userTask" value={userTask} type="text" onChange={(e) =>updateUserEntry(e.target.value)}/>
            <br />
            <label>completed</label>
            <input id="taskStatus" value={userCheck} type="checkbox"onChange={(event) => setUserTaskStatus(event.target.value)}/>
            <br />
            <button onClick ={handleAddTask}>Add</button>
        </form>    
     </div>)
}

export default TaskList; 
