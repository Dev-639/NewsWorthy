import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import NewItems from './components/NewItems';
import About from './components/About';
import ContactUs from './components/ContactUs';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
export default class App extends Component {
  pageSize=9;
  countryname="in";
  render() {
    return (
      <div>
         <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<NewItems pageSize={this.pageSize} country={this.countryname} category="general" />} />
            <Route exact path="/general" element={<NewItems key="general" pageSize={this.pageSize} country={this.countryname} category="general" />} />
            <Route exact path="/science" element={<NewItems key="science" pageSize={this.pageSize} country={this.countryname} category="science" />} />
            <Route exact path="/sports" element={<NewItems key="sports" pageSize={this.pageSize} country={this.countryname} category="sports" />} />
            <Route exact path="/entertainment" element={<NewItems key="entertainment" pageSize={this.pageSize} country={this.countryname} category="entertainment" />} />
            <Route exact path="/business" element={<NewItems key="business" pageSize={this.pageSize} country={this.countryname} category="business" />} />
            <Route exact path="/health" element={<NewItems key="health" pageSize={this.pageSize} country={this.countryname} category="health" />} />
            <Route exact path="/technology" element={<NewItems key="technology" pageSize={this.pageSize} country={this.countryname} category="technology" />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            </Routes> 
        </BrowserRouter> 
      </div>
    )
        // }
        // 2.Search mei keyword daalke news display karni hai 
        // 4.Jab website open ho to smooth rendering karani hai like ppt slides ki animation 
        // 5.images jo front page per render hui hai unka size fix karna hai 
  }
}
