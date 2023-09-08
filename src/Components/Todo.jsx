import { useState } from "react";

export const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const getTasks = () => {
    const myTask = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      name: newTask,
      active: false,
    };
    if (newTask === "") return false;
    else return  (setTaskList([...taskList, myTask]) , setNewTask(""),document.querySelector("input").value="")
    
  };

  const delFunc=(taskId)=>{
    setTaskList(taskList.filter((task)=>task.id !== taskId))
  }
  const doneFunc = (taskId)=>{
    setTaskList(taskList.map((task)=>
    {if(task.id === taskId) return {...task,active:!task.active}
    else return task}
    ))
  }
  console.log(taskList);
  return (
    <div className="container my-3">
    <h5>Kirjoita tehtäväsi ja lisää se. Jos tehtäväsi on tehty, klikkaa painiketta ja muuta sen tilannetta!</h5>
      <input
        className="form-control"
        type="text"
        placeholder="Lisää Tehtäväsi!"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="btn btn-primary my-1" onClick={getTasks}>
        Lisää Tehtäväsi
      </button>
      {taskList.map((task,index)=>{
        return (
          <div key={`div_${index}`} style={{backgroundColor:task.active?"rgb(7 189 255)":"",borderRadius:"9px"}} className="container border">
          <h5 key={`h5_${index}`} style={{textAlign:"center",paddingTop:"3px"}}>{task.name}</h5>
            <button key={`btn1_${index}`} onClick={()=>delFunc(task.id)}>Delete Task</button>
            <button key={`btn2_${index}`} onClick={()=>doneFunc(task.id)}>Done</button>
          </div>
        )
      })}
    </div>
  );
};
