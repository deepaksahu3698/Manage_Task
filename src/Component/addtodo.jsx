
import React, { useEffect } from 'react'
import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
// import { logout } from '../redux/auth/action'
// import SubTask from './SubTask'
import "./addtodo.css"
// l,incotherincpersonal,togglesubtodo,inctodo,incall,incdone,incprogress } from '../redux/todo/action'

const AddTodo = () => {
//   const dispatch = useDispatch()
  const navigate = useNavigate()

  // task
  const [title, setTitle] = useState("")
 

const[allTodo,SetAlltodo]=useState([])

  const handleAdd = (title) => {
    if(title==""){
      alert("Enter the task")
      
    }
    else{
    const data = {
      title,
      status:false,
      complet:false,
      
      id:uuid()
    }
    SetAlltodo(prev => (
        [...prev,data]
    ))
    setTitle("")
    
    
    
      
    alert("succefully added")
    
    }

  }
  const togglechange=(id)=>{
let new_todo=allTodo.map(e=>{
 
  if(e.id==id){
    return{...e,status:!e.status,complet:!e.complet}
  }
  else{
    return e
  }
})
SetAlltodo(new_todo)

}
// console.log(allTodo)
  const removetask=(id)=>{
    const updatedData = [...allTodo].filter((el) => el.id!==id )
    SetAlltodo(updatedData)

  }



   
  return (
     <div className='addtodocontainer'>
     

    <div className="entry_container">
      <div>
        <div className='inputbox'>
          
          <label htmlFor="">Enter the Task</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder=" Task..."/><br />
          
        </div>
       
       
      
      </div>

      <div className='addbutton'>
       
        <button onClick={() => handleAdd(title)} variant="contained">Add Task</button>

      </div>
    </div>
<div id='tododisplay'>
  {
    allTodo.map((el)=>(
      <div className='displaytodolist'>
        
        <h1>{el.title}</h1>
        <input type="checkbox" name="" id="" onChange={()=>togglechange(el.id)} checked={el.status}/>
        {el.complet?<h3>Completed</h3>:<h3>Not Completed</h3>}
        <button className='removetask' onClick={()=>{removetask(el.id)}}>Delete Task</button>
        </div>
    ))
  }
</div>
<br />
<br />

<div className='lsco'>

<h1 >List Of Completed Tasks</h1>
</div>
<div className='allcompletedtask'>
  {
    allTodo.map((el)=>el.status==true?<div className='checkcompletedornot'>
      <h1>{el.title}</h1>
    </div>:<div></div>
      
    )
  }

</div>
<br />
<br />

<div className='psco'>

<h1 >List Of Pending Tasks</h1>
</div>
<div className='allpendingtask'>
  {
    allTodo.map((el)=>el.status==false?<div className='checkcompletedornot'>
      <h1>{el.title}</h1>
    </div>:<div></div>
      
    )
  }

</div>
    </div>
    
  )
}

export default AddTodo