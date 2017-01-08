import React from 'react';

const FilterLink = (props) => {
  return (
    <button href="#"
       onClick={props.onClick}
       disabled={props.active}
    >
      {props.children}
    </button>
  )
}

export default FilterLink;
