import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor(){
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7bf5dbc155bc458db3802d32b6b9a5ce&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }
  handlePrevClick= async () =>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7bf5dbc155bc458db3802d32b6b9a5ce&page=${this.state.page -1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
   }
  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else {
      console.log("Next");
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7bf5dbc155bc458db3802d32b6b9a5ce&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
   }
  render() {
    return (
      <div className="container my-3">
      <h1>NewsApp - Top headlines</h1>
        <div className="row">
            {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
          <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News