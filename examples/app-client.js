import React from 'react';

/*eslint-disable no-unused-vars*/
import helloFactory from '../source/hello';
/*eslint-enable no-unused-vars*/

const Hello = helloFactory(React);

let word = 'world';
let mode = 'display';
let render;

const actions = {
  setWord (w) {
    word = w;
    render();
  },

  setMode (m) {
    mode = m;
    render();
  },
};

render = () => {
  React.render(
    <Hello
      actions = { actions }
      mode={ mode }
      word={ word }
    />,
    document.getElementById('content')
  );
};

render();
