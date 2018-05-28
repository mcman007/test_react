import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import TodoInput from "./TodoInput";
import Todolist from "./Todolist";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoItems : ["Hello" , "World"]
    }
  }
  render() {
    let {todoItems} = this.state;
    return (
      <div>
        <TodoInput />
        <Todolist items = {todoItems} />
      </div>
    );
  }
}

export default App;
