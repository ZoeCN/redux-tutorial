import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import UndoRedo from './containers/UndoRedo';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <UndoRedo />
      </div>
    );
  }
}

export default App;
