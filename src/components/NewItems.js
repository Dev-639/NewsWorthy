import React, { Component } from 'react'
import News from './News'
import PropTypes from 'prop-types'
import Spinner from './Spinner' 
import InfiniteScroll from 'react-infinite-scroll-component'

export default class NewItems extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: '12',
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0,
    }
    document.title = `${this.CapitalizeFirstLetter(this.props.category)}-NewsLetter`;
  } 
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b67b2ce19444d3482fe78aff878800b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true, });
    let data = await fetch(url);
    let response = await data.json();
    console.log(response.articles);
    this.setState({
      page: this.state.page,
      articles: response.articles,
      totalResults: response.totalResults,
      loading: false,
    });
  }
  CapitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b67b2ce19444d3482fe78aff878800b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({page:this.state.page+1,});
    this.setState({ loading: true, });
    let data = await fetch(url);
    let response = await data.json();
    console.log(response.articles);
    this.setState({
      articles: this.state.articles.concat(response.articles),
      totalResults: response.totalResults,
      loading: false,
    });
  }

  render() {
    return (
      <div className="container my-5">
        <h2 className="text-center" style={{marginTop:"5rem",}}>NewsWorthy Top-Headlines From {this.CapitalizeFirstLetter(this.props.category)}</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
      dataLength={this.state.articles?this.state.articles.length:10}
      next={this.fetchMoreData}
      hasMore={this.state.articles?this.state.articles.length!==this.state.totalResults:false}
      loader={this.state.loading&&<Spinner />}  
    >
      <div className="container">
          <div className="row">
            {this.state.articles?.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <News title={element.title ? (element.description !== null ? (element.title).slice(0, 50) : element.title) : ""} des={element.description ? (element.description).slice(0, 100) : ""} imageUrl={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll> 
      </div>
    )
  }
}
