import React,{useEffect, useRef, useState} from 'react'

function Tasks(props) {
    const inputType=useRef('');
    const submitHandler=(event)=>{
      event.preventDefault();
      props.addTask(inputType.current.value);
      inputType.current.value='';
    }
  return (
    <div>
          <form>
            <div className="mb-3 my-5 mx-6"> 
            <h5>Task:</h5>
            <input ref={inputType}type="text" className="form-control" id="task" aria-describedby="task"/>
            </div>
            <button type="button" className="btn btn-primary" onClick={submitHandler}>Submit</button>
          </form>
    </div>
  )
}
export default Tasks
