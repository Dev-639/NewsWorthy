import React, { Component } from 'react' 
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    let styleCard = {
      backgroundColor:'#0052ad' ,
    } 
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top" style={styleCard}>
          <div className="container-fluid">
            <Link className="navbar-brand fs-4 mx-3" to="/">NewsLetter</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto fs-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active  mx-3" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active  mx-3" aria-current="page" to="/about">About Us</Link>
                </li> 
                <li className="nav-item dropdown">
                  <Link className="nav-link active  mx-3 dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/general">General</Link></li>
                    <li><Link className="dropdown-item" to="/business">Buisness</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li> 
                  </ul>

                </li> 
                  <li className="nav-item">
                    <Link className="nav-link active fs-5 mx-3" aria-current="page" to="/contactus">Contact Us</Link>
                  </li>
              </ul>
              <form className="d-flex" role="search" >
                <input className="form-control me-2" type="search" placeholder="Enter a Keyword" aria-label="Search" />
                <button className="btn btn-primary" id="search" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
