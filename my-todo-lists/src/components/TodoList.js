import React from 'react';
import Todo from './Todo';
import {List} from 'semantic-ui-react';

const TodoList = ({ todos, onTodoClick, deleteTodo }) => (
  <List selection verticalAlign='middle' animated>
    {todos.map(todo => 
      <Todo 
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        deleteTodo={() => deleteTodo(todo.id)}
      />
    )}
  </List>
);

export default TodoList;