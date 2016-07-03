// This file is written in ES6.

// import npm module
import React from 'react';
import { render } from 'react-dom';


/***** This is a stateful component *****/
class <Component> extends React.Component {
  constructor(props) {
    super(props);
    this.state = { /* an object */ }
  }

  render () {
    return (
      /* JSX */
    )
  }
}


/***** This is a stateless component *****/
let <Component> = (props) => (
  /* JSX */
)


export default <Component>;