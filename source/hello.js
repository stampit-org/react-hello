import PropTypes from 'prop-types';
import stampit from 'react-stampit';

const {
  string,
  func
} = PropTypes;

export default React => stampit(React, {
  propTypes: {
    actions: PropTypes.shape({
      setWord: func.isRequired,
      setMode: func.isRequired,
    }),
    mode: string,
    word: string,
  },

  componentDidUpdate () {
    this.refs.wordInput.getDOMNode().focus();
  },

  render () {
    const {
      word,
      mode
    } = this.props;

    const {
      setMode,
      setWord
    } = this.props.actions;

    const styles = {
      displayMode: {
        display: (mode === 'display') ? 'inline' : 'none',
      },

      editMode: {
        display: (mode === 'edit') ? 'inline' : 'none',
      },
    };

    const onKeyUp = function (e) {
      if (e.key !== 'Enter') {
        return;
      }

      setWord(e.target.value);
      setMode('display');
    };

    return (
      <p>Hello,&nbsp;
        <span
          onClick = { () => setMode('edit') }
          style = { styles.displayMode }
        >
          { word }!
        </span>
        <input
          onKeyUp = { onKeyUp }
          placeholder = { word }
          ref = 'wordInput'
          style = { styles.editMode }
        />
      </p>
    );
  },
});
