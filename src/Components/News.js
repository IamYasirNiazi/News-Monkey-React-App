import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static protoTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }


  // articles= [
    //     {
    //         "source": {
    //             "id": "bbc-sport",
    //             "name": "BBC Sport"
    //         },
    //         "author": null,
    //         "title": "Rafiq & Gale among five reprimanded for posts",
    //         "description": "Azeem Rafiq and former Yorkshire coach Andrew Gale are among five players reprimanded by the England & Wales Cricket Board for historical social media posts of a racist nature.",
    //         "url": "http://www.bbc.co.uk/sport/cricket/63134685",
    //         "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/843D/production/_127035833_andrewgaleandazeemrafiq.png",
    //         "publishedAt": "2022-10-10T14:22:26.4459415Z",
    //         "content": "Andrew Gale and Azeem Rafiq were team-mates at Yorkshire\r\nAzeem Rafiq and former Yorkshire coach Andrew Gale are among five players to have been reprimanded by the England &amp; Wales Cricket Board f… [+1435 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]

    CapCategoryTitle = (text)=>{
      return text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); 
    }


    constructor(props){
        super(props);
        this.state = ({
            articles : [],
            loading : true,
            page: 1,
            totalResults: 0
        })

        document.title = `${this.CapCategoryTitle(this.props.category)} News | NewsMonkey`;
    }



   async componentDidMount(){

      this.update();

        // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true})
        // let data = await fetch(url)
        // let parsedData = await data.json()
        // // console.log(parsedData)
        // this.setState({articles: parsedData.articles,
        //   totalResults: parsedData.totalResults,
        //   loading: false
        // })
    }


    update = async ()=>{

      this.props.topProgressBar('20')

      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true})

      let data = await fetch(url)
      this.props.topProgressBar('50')

      let parsedData = await data.json()
      this.props.topProgressBar('70')


      this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false
      })

      this.props.topProgressBar('100')

    }


    // prevBtnFunc = async ()=>{

    //   //All the work is doing in update function
    //     // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({loading: true})
    //     // let data = await fetch(url)
    //     // let parsedData = await data.json()
    //     // // console.log(parsedData)
    //     // console.log("Previous Button Clicked")
    //     // this.setState({
    //     //     articles: parsedData.articles,
    //     //     page: this.state.page - 1,
    //     //     loading: false
    //     // })

    //     this.setState({page: this.state.page - 1});
    //     this.update();
    // }


    // nextBtnFunc = async ()=>{

    // //   //All the work is doing in update function
    //   // if(this.state.page + 1 > Math.ceil(!this.state.totalResults/this.props.pageSize)){

    //   //     let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   //     this.setState({loading: true})
    //   //     let data = await fetch(url)
    //   //     let parsedData = await data.json()
    //   //     // console.log(parsedData)
    //   //     console.log("Next Button Clicked");
    //   //     this.setState({
    //   //         articles: parsedData.articles,
    //   //         page: this.state.page + 1,
    //   //         loading: false
    //   //     })

    //   // }

    //   this.setState({page: this.state.page + 2});
    //   this.update();
    // }


    fetchMoreData = async ()=>{
      
      // this.setState({page: this.state.page + 1}) This not worked because it gives repeated news on page 1 & 2.
      // this.setState({page: ++this.state.page}) Fixed the code using this.


      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${++this.state.page}&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true})
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
          page: this.state.page
          // loading: false
      })
    }


  render() {
    return (
      <>

        {/* <div className="container py-2 mx-auto d-flex flex-column justify-content-center"> */}
        
            <h1 className='text-center fw-bold my-4 pb-1'>NewsMonkey | Top {this.CapCategoryTitle(this.props.category)} Headlines</h1>
            
            {this.state.loading && <Spinner />}
                
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
            >
            
            <div className="container">

              <div className="row">
              {/* {!this.state.loading && this.state.articles.map((element)=>{  */}
              {this.state.articles.map((element)=>{ 
                  
                  return <div className="cols col-md-4 mt-2" key={element.url}>
                      <NewsItem imageUrl={!element.urlToImage? 'https://c.ndtvimg.com/2022-10/8lnadu7_mili_625x300_12_October_22.jpg' : element.urlToImage } title={element.title} description={element.description} readMore={element.url} publishedAt={element.publishedAt} source={!element.source.id? 'Unknown' : element.source.id} />
                  </div>
              
              })}
              </div>
            </div>
            
            </InfiniteScroll>
            
            {/* <div className="container d-flex justify-content-center my-5">

            <button type="button" className="btn btn-sm btn-primary me-3" disabled={this.state.page<=1} onClick={this.prevBtnFunc} >&larr; Prev</button>
            <button type="button" className="btn btn-sm btn-primary" id="next-button" disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.nextBtnFunc} >Next &rarr;</button>

            </div> */}


            {/* Container End */}
        {/* </div> */}
      
      </>
    )
  }
}

export default News