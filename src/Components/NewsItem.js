// Class Based Component

// import React, { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
    
//     let {title, description, imageUrl, readMore, publishedAt, source} = this.props
    
//     // Source Capitalization
//     let Capitalize = ()=>{
//       let sourceData = source.split("-")
//       for(let i=0; i < sourceData.length; i++){
//         sourceData[i] = sourceData[i].charAt(0).toUpperCase() + sourceData[i].slice(1).toLowerCase() ;
//       }
//       return sourceData.join(" ")
//     }

    
//     return (
//       <>
      
//       <div className="card">
//         <span className="d-flex position-absolute top-0 end-0 badge rounded-pill bg-danger">{Capitalize()}</span>
//         <img src={imageUrl} className="card-img-top img-fluid" alt="News" />
//         <div className="card-body">
//             <p>{new Date(publishedAt).toGMTString()}</p>
//             <h5 className="card-title">{title}...</h5>
//             <p className="card-text">{description}...</p>
//             <a href={readMore} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
//         </div>
//       </div>

//       </>
//     )
//   }
// }

// export default NewsItem





import React from 'react'

const NewsItem = (props)=>{
    
    let {title, description, imageUrl, readMore, publishedAt, source} = props
    
    // Source Capitalization
    let Capitalize = ()=>{
      let sourceData = source.split("-")
      for(let i=0; i < sourceData.length; i++){
        sourceData[i] = sourceData[i].charAt(0).toUpperCase() + sourceData[i].slice(1).toLowerCase() ;
      }
      return sourceData.join(" ")
    }

    
    return (
      <>
      
      <div className="card">
        <span className="d-flex position-absolute top-0 end-0 badge rounded-pill bg-danger">{Capitalize()}</span>
        <img src={imageUrl} className="card-img-top img-fluid" alt="News" />
        <div className="card-body">
            <p>{new Date(publishedAt).toGMTString()}</p>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={readMore} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>

      </>
    )
}

export default NewsItem