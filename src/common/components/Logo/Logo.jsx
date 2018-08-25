import React, {Component} from 'react';
import logo from './logo.png';

class Logo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img src={logo} alt={'logo'} className={this.props.logoClassName} />
        {
          this.props.hasText &&
          <div>DOGify</div>
        }
      </div>
    )
  }
}

export default Logo;