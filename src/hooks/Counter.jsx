import React, { useState, Fragment } from 'react';

function Counter(props) {
  const [count, setState] = useState(0);
  // const count = array[0]; // this is equivalent to this.state.count in class component
  // const setState = array[1];  // this.setState()

  return (
    <Fragment>
      <div>Counter: {count}</div>
      <button onClick={() => setState(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
