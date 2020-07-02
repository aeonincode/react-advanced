import React, { Component } from 'react';
import WithTooltip from './withTooltip';

class Movie extends Component {
  render() {
    return (
      <div>
        Movie
        {this.props.showTooltip && <div>Some tooltip</div>}
      </div>
    );
  }
}

export default WithTooltip(Movie);
