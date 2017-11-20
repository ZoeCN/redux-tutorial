import React from 'react';
import FilterLink from '../containers/FilterLink';
import {connect} from 'react-redux';
import {Divider} from 'semantic-ui-react';



let Footer = ({leftItems}) => (
  <div>
    <Divider horizontal>{leftItems} items left</Divider>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </div>
);

const mapStateToProps = (state, ownProps) => {console.log(state.todos.present.length); return({
  leftItems: state.todos.present
    .filter(t => t.completed === false)
    .length
})};

Footer = connect(
  mapStateToProps
)(Footer);

export default Footer;
