import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  onChange = event => {
    this.props.onChange(event)
  }

  render() {
    const { value } = this.props;

    return (
      <form >
        <input className = 'form' id='hex' name='hex' placeholder = 'input HEX' value={value} onChange={this.onChange} />
      </form>
    )
  }
}

export default Input