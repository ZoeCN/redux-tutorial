import React from 'react';
import {ActionCreators as UndoActionCreators} from 'redux-undo';
import {connect} from 'react-redux';
import {Button, Segment} from 'semantic-ui-react';

let UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
  <Segment compact>
    <Button onClick={onUndo} disabled={!canUndo}>
      Undo
    </Button>
    <Button onClick={onRedo} disabled={!canRedo}>
      Redo
    </Button>
  </Segment>
);

const mapStateToProps = (state) => ({
  canUndo: state.todos.past.length > 0,
  canRedo: state.todos.future.length > 0,
});

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo,
});

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UndoRedo);

export default UndoRedo;