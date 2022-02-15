import './App.css';
import Tasks from './components/Tasks'
import Taskslist from './components/Taskslist';
import Navbar from './components/Navbar';
import {useEffect,useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [tasks,setTasksList]=useState(()=>{ 
    const data=localStorage.getItem('tasks')
    return data?JSON.parse(data):[]
})

useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(tasks));
},[tasks])

const appendTask=(value)=>{
    setTasksList([...tasks, {value}])
}
const deleteTask=(id)=>{
    setTasksList(tasks.filter((task,index)=>{return index!==id}))
}
  return (
    <Router>
    <div className='container' style={{margin:'30px 6px'}}>
      <Navbar/>
      <h1 style={{margin:'70px 0px'}}>TO-DO-APP</h1>
      <Routes>
      <Route exact path="/home" key="taskadd" element={<>
      <Tasks addTask={appendTask}/>
      <Taskslist tasks={tasks} deleteTask={deleteTask}/>
      </> }/>
      <Route exact path="/tasksList" key="tasks" element={<Taskslist tasks={tasks} deleteTask={deleteTask}/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
