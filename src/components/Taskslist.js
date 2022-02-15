import React from 'react'

function Taskslist(props) {
  return (
    
    <div>
       <table className="table my-5">
            <thead>
              <tr>
              <th scope="col">Task List</th>
              <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {props.tasks.map((element,index)=>{
              return <tr key={index}>
                  <td>{element.value}</td>
                  <td><button className="btn btn-primary" onClick={(e)=>props.deleteTask(index)}>Complete</button></td>
              </tr>
            })}
            </tbody>
          </table>

    </div>
  )
}

export default Taskslist
