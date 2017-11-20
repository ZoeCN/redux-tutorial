import React from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../actions';
import { Input, Icon, Button } from 'semantic-ui-react'

let AddTodo = ({dispatch}) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value))
        input.value = '';
      }}>
        <Input iconPosition='left' placeholder='add a todo'>
          <input ref={node => {
            input = node;
          }}/>
          <Icon name='add' />
        </Input>
        <Button content='Add todo' type='submit' color='teal'/>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;