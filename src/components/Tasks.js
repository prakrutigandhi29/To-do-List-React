import React,{useEffect, useRef, useState} from 'react'

function Tasks() {
    const inputType=useRef('');
    const [tasks,setTasksList]=useState(()=>{
        const data=localStorage.getItem('tasks')
        return data?JSON.parse(data):[]
    })
    useEffect(()=>{
      localStorage.setItem('tasks',JSON.stringify(tasks));
    },[tasks])
    
    const appendTask=(event)=>{
        event.preventDefault();
        setTasksList([...tasks,
          {
            task:inputType.current.value
          }])
        inputType.current.value="";
    }
    const deleteTask=(event,id)=>{
        event.preventDefault();
        setTasksList(tasks.filter((task,index)=>{return index!==id}))
    }
    console.log(tasks);
  return (
    <div>
          <form>
            <div className="mb-3 my-5 mx-6"> 
            <h5>Task:</h5>
            <input ref={inputType}type="text" className="form-control" id="task" aria-describedby="task"/>
            </div>
            <button type="button" className="btn btn-primary" onClick={appendTask}>Submit</button>
          </form>
          <table className="table my-5">
            <thead>
              <tr>
              <th scope="col">Task List</th>
              <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((element,index)=>{
              return <tr key={index}>
                  <td>{element.task}</td>
                  <td><button className="btn btn-primary" onClick={(e)=>deleteTask(e,index)}>Complete</button></td>
              </tr>
            })}
            </tbody>
          </table>

     </div>
  )
}

export default Tasks
