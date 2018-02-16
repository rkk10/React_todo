import React, { Component } from 'react';
import Todo from './components/todo';
import data from './components/data'

import './App.css';


class App extends Component {

  componentWillMount(){

    this.setState({
      todo_list: data,
    })
  }
  addTodo = _ => {
    
    const { todo_list } = this.state;
    const id = todo_list[todo_list.length - 1].id + 1;
    const todo = this.refs.newItem.value;
    if (!Boolean(todo)) {
      return;
    }
    todo_list.push({ id, todo });
    this.setState({
      ...todo_list
    });
    
    this.refs.newItem.value = null;
  }

  newTodo = () => 
    <header>
      <h2>ToDo</h2>
      <input ref = "newItem"  type = "text" id = "input" />
      <button id = "add" onClick = {this.addTodo}>Add</button>
  </header>;

  render() {
    return (
      <div className="App">
        {this.newTodo()}
          <section>
              <div className = "newTodo">
               { this.state.todo_list.map( info => <Todo key = {info.id}{...info}/>) }
              </div>
          </section>
      </div>
    );
  }
}

export default App;
