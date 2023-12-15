
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import React, { useEffect, useState } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am OnDelete of todo", todo)
    //Deleting this way in react does not work
    // let index = todos.indexOf(todo)
    // todos.splice(index, 1)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos))

  }

  const addTodo = (Title, Desc) => {
    console.log("I am adding todo", Title, Desc);
    let SrNo;
    if (todos.length === 0) {
      SrNo = 1;
    }
    else {
      SrNo = todos[todos.length - 1].SrNo + 1
    }
    const myTodo = {
      SrNo: SrNo,
      Title: Title,
      Desc: Desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="My-Todos-List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

