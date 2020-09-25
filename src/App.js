import React, { Component } from 'react';
import Todos from './Todos.js';

export class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'buy some bread'}
    ]
  }
  render () {
    return (
      <div className="todo-app container">
        <h1 className='center blue-text'>Todo`s</h1>
        <Todos todos={ this.state.todos }/>
      </div>
    );
  }
}

export default App;
