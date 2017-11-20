import React from 'react';
import {List, Icon} from 'semantic-ui-react';

const Todo = ({ onClick, deleteTodo, completed, text }) => (
  <List.Item
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <Icon name='smile' size='large'/>
    <List.Content>
      {text} 
    </List.Content>
    <Icon onClick={deleteTodo} name='delete'></Icon>
  </List.Item>
);

export default Todo;