import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime : 0
    }
    this.handleFooterClicked = this.handleFooterClicked.bind(this);
  }

  handleFooterClicked(time) {
    this.setState({currentTime : time});
  }
  render() {
    let { currentTime } = this.state;
    return (
      <div>
      <Header currentUser="Kiatkumjorn"/>
      <div>CurrentTime : {currentTime}</div>
      <Footer onTimerClick={this.handleFooterClicked} />
      </div>
    );
  }
}

export default App;
