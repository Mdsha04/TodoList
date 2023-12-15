import React, { useState } from 'react'

const AddTodo = (props) => {
    const [Title,setTitle] = useState("")
    const [Desc,setDesc] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!Title || !Desc ){
            alert("Your Title and Description cannot be empty")
        }
        else{
           props.addTodo(Title,Desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add Todo_List</h3>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="Title" className="form-label">Todo Title</label>
                    <input type="text" value={Title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="Title" aria-describedby="emailHelp" />
                </div>
                <div>
                    <label htmlFor="Desc" className="form-label">Todo Description</label>
                    <input type="text"  value={Desc}  onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="Desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success my-3">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
