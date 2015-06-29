/* global React */

import Cerebral from 'cerebral';

import cortexFactory from '../source/cortex';
import helloFactory from '../source/hello';

const Hello = helloFactory(React);
const cortex = cortexFactory({ Cerebral });

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
  }
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
