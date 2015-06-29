/* global React */

import Cerebral from 'cerebral';

import cortexFactory from '../source/cortex';
import helloFactory from '../source/hello';

const Hello = helloFactory(React);
const cortex = cortexFactory({ Cerebral });

const actions = {
  setWord (w) {

  },

  setMode (m) {

  }
};

cortex.signal('setWord', actions.setWord);
cortex.signal('setMode', actions.setMode);

let Wrapper = cortex.injectInto(Hello);

React.render(
  <Wrapper />,
  document.getElementById('content')
);
