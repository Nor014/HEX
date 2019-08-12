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
    event.persist()

    this.setState(prevState => {
      return { ...prevState, inputValue: event.target.value }
    }, () => console.log(this.state))
  }

  render() {

    const HEXToRGBA = (hex) => {
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {

        let r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);

        this.state.rgb = "rgb(" + r + ", " + g + ", " + b + ")"
      } else { this.state.rgb = "ошибка формата" }
    };

    (this.state.inputValue.length === 7) && HEXToRGBA(this.state.inputValue)

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
