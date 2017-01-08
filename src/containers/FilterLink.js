import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setVisibilityFilter } from '../ducks/filters';

const FilterLink = (props) => {
  if (props.active) {
    return <span>{props.children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         props.setVisibilityFilter(props.filter);
       }}
    >
      {props.children}
    </a>
  )
}

const mapStateToProps = (state, props) => ({
  active: props.filter === state.visibilityFilter,
})

const mapDispatchToProps =  (dispatch) => bindActionCreators({
  setVisibilityFilter
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
