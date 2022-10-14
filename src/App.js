import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// React Class Component -RCC
export default class App extends Component {
  pageSize = "6"
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            
            <Route path="/" exact element={<News key="general" pageSize={this.pageSize} apiKey="ab7b0fca79f341c7843c22ba1cf8ecdc" country="us" category="general"  />} />
            <Route path="/general" exact element={<News key="general" pageSize={this.pageSize} apiKey="ab7b0fca79f341c7843c22ba1cf8ecdc" country="us" category="general"  />} />
            <Route path="/business" exact element={<News key="business" pageSize={this.pageSize} apiKey="ab7b0fca79f341c7843c22ba1cf8ecdc" country="us" category="business"  />} />
            <Route path="/entertainment" exact element={<News key="entertainment" pageSize={this.pageSize} apiKey="ab7b0fca79f341c7843c22ba1cf8ecdc" country="us" category="entertainment"  />} />
            <Route path="/health" exact element={<News key="health" pageSize={this.pageSize} apiKey="ab7b0fca79f341c7843c22ba1cf8ecdc" country="us" category="health"  />} />
            <Route path="/science" exact element={<News key="science" pageSize={this.pageSize} apiKey="ab7b0fca79f341c7843c22ba1cf8ecdc" country="us" category="science"  />} />
            <Route path="/sports" exact element={<News key="sports" pageSize={this.pageSize} apiKey="ab7b0fca79f341c7843c22ba1cf8ecdc" country="us" category="sports"  />} />
            <Route path="/technology" exact element={<News key="technology" pageSize={this.pageSize} apiKey="ab7b0fca79f341c7843c22ba1cf8ecdc" country="us" category="technology"  />} />
          
          </Routes>

        </Router>
      </>
    )
  }
}
