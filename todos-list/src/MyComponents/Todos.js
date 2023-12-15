import React from 'react'
import TodoItems from './TodoItems'


const Todos = (props) => {
  const myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-3'>Todos-List</h3>
      {props.todos.length === 0 ? "your Todo-List is empty" :
        props.todos.map((todo) => {

          return (
            <TodoItems todo={todo} key={todo.SrNo} onDelete={props.onDelete} />
          )
        })
      }
    </div>
  )
}

export default Todos;
