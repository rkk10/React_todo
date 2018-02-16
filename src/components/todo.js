import React, { Component } from 'react';

const Todo = props => 
  <div id = "todo">
    <h3 id = "item">{props.todo}</h3>
  </div>;

  export default Todo;