import React from 'react';
import {List, Icon} from 'semantic-ui-react';

const Todo = ({ onClick, completed, text }) => (
  <List.Item
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <Icon name='smile' size='large'/>
    <List.Content>
      <List.Header>
        {text} 
      </List.Header>
    </List.Content>
  </List.Item>
);

export default Todo;