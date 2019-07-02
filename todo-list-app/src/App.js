import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    todos: [],
    todo: {
      name: "",
      time: "",
      task: ""
    }
  }

  componentDidMount = () => {
    this.getTasks();
  }

  getTasks = () => {
    fetch("http://localhost:3001/todos")
    .then(response => response.json())
    .then(response => this.setState({ todos: response.data }))
    .catch(err => console.log(err))
  }

  addTasks = () => {
    const { todo } = this.state
  }

  render() {
    const { todos, todo } = this.state

    return (
      <div className="App">
        <p>Add a new to-do!</p>
        <input value={todo.name} onChange={e => this.setState({ todo: {...todo, name: e.target.value} })} placeholder="Your name here..." />
        <input value={todo.time} placeholder="Time added" />
        <input value={todo.task} placeholder="Your task..." />
        <button onClick={this.addTasks()}>Add Task</button>
      </div>
    );
  }
}



export default App;
