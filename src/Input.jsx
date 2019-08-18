import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value } = this.props;

    return (
      <form >
        <input className='form' id='hex' name='hex' placeholder='input HEX' value={value} onChange={this.props.onChange} />
      </form>
    )
  }
}

export default Input