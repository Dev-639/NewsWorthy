import React, { Component } from 'react'
import defaultImg from './defaultImg.jpeg'

export default class News extends Component {
  render() {
    let { title, des, imageUrl, url, author, time } = this.props;
    return (
      <div>
        <div className="card rounded-4" >
          <img src={imageUrl ? imageUrl : defaultImg} className="card-img-top rounded-4" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.length > 47 && des.length !== 0 ? title + "..." : title}</h5>
            <p className="card-text">{des ? des + "..." : ""}</p>
            <p className="">By {author} on {new Date(time).toGMTString()}</p>
            <a href={url} className="btn btn-success">Read More</a>
          </div>
        </div> 
      </div>

    )
  }
}
