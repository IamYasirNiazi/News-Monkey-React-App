import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// React Class Component -RCC
export default class App extends Component {
  
  pageSize = "6"
  apiKey = "e70235fb583a4cf7b2505a69301f6ca1"
  
  state = {
    progress: 0
  }
  
  setProgressBar = (progressValue)=>{
      this.setState({
      progress: progressValue
    })
  }

  render() {
    return (
      <>
        <Router>

        <LoadingBar
        color='#f11946' height={2}
        progress={this.state.progress}
        />

          <Navbar />
          <Routes>
            
            <Route path="/" exact element={<News  topProgressBar={this.setProgressBar} key="homepage" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="general"  />} />
            <Route path="/general" exact element={<News  topProgressBar={this.setProgressBar} key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="general"  />} />
            <Route path="/business" exact element={<News  topProgressBar={this.setProgressBar} key="business" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="business"  />} />
            <Route path="/entertainment" exact element={<News  topProgressBar={this.setProgressBar} key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="entertainment"  />} />
            <Route path="/health" exact element={<News  topProgressBar={this.setProgressBar} key="health" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="health"  />} />
            <Route path="/science" exact element={<News  topProgressBar={this.setProgressBar} key="science" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="science"  />} />
            <Route path="/sports" exact element={<News  topProgressBar={this.setProgressBar} key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="sports"  />} />
            <Route path="/technology" exact element={<News  topProgressBar={this.setProgressBar} key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="technology"  />} />

          </Routes>

        </Router>
      </>
    )
  }
}
