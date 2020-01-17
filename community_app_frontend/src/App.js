import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import CreatePosts from './Components/CreatePosts'
import Home from './Components/Home'
import { Routes } from './Components/Routes'
import PostDetails from './Components/PostDetails'

class App extends React.Component {
  state = {
    mode: ''
  };

  handleDarkMode = () => {
    if ((this.state.mode.length === 0)) {
      this.setState({
        mode: 'dark-mode'
      })
    } else if (this.state.mode.length > 0)
      this.setState({
        mode: ''
      })
  }

  render() {
    return (
      <div className={this.state.mode}>
        <button className='dark-mode-button' onClick={() => this.handleDarkMode()}>
          <img className='moon' src='https://i.imgur.com/jLrGDVl.png'></img>
        </button>
        <div className="App">
          <Nav />
          {/* <PostDetails/> */}
          {/* <CreatePosts/> */}
          {/* <Home/> */}

          <main>
            <Routes />
          </main>
        </div>
      </div>
    );
  }
}
export default App;
