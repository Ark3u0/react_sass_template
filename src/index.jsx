import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello.jsx';
import World from './world.jsx';

import StyleSheet from './master.scss';

const { Component } = React;

class Index extends Component {

  render() {
    return <div>
        <Hello/> <World/>
      </div>
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);

