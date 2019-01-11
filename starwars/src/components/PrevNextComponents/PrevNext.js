import React from 'react';

function PrevNext(props) {
  let buttons = [];
  if (props.previous) {
    buttons.push(<button 
      className="prev" 
      name="previous"
      key="previous-button"
      onClick={props.clickHandle}
      >
        Previous
      </button>);
  }
  if (props.next) {
    buttons.push(<button 
      className="next" 
      name="next"
      key="next-button"
      onClick={props.clickHandle}
      >
        Next
      </button>);
  }
  
  return (
    <form className="next-prev">
      {buttons}
    </form>
  );
}

export default PrevNext;