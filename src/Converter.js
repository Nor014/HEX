import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input'
import Check from './Check'

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', rgb: '' };
  }

  onChange = (event) => {

    let value = event.target.value

    this.setState(prevState => {
      return { ...prevState, inputValue: value }
    }, () => {
      (this.state.inputValue.length === 7) && this.HEXToRGBA(this.state.inputValue)
    })
  }

  HEXToRGBA = (hex) => {
    this.setState(prevState => {
      return {
        ...prevState, rgb: /^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)
          ? "rgb(" + parseInt(hex.slice(1, 3), 16) + ", " + parseInt(hex.slice(3, 5), 16) + ", " + parseInt(hex.slice(5, 7), 16) + ")"
          : "ошибка формата"
       }
    })
  };

  render() {

    let containerStyle = {
      background: this.state.rgb === 'ошибка формата' ? "red" : this.state.rgb
    };

    return (
      <div className='container' style={containerStyle}>
        <div className='form-inner'>
          <Input value={this.state.inputValue} onChange={this.onChange} />
          <Check rgb={this.state.rgb} />
        </div>
      </div >
    );
  }
}

export default Converter;
