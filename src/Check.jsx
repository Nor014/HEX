import React from 'react';

class Check extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { rgb } = this.props;

    return (

      <div className='form' >{rgb}</div>

    )
  }
}

export default Check