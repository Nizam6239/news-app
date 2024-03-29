import React from "react";

const NewsItems = (props) => {
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card" style={{border:'2px solid black'}}>
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span className="badge rounded-pill bg-danger">
                {source}
        </span>
        </div>
          <img
            src={
              !imageUrl
                ? "https://img.assets-d.propublica.org/v5/images/20230123-Turbo-Tax-Free_maxWidth_3000_maxHeight_3000_ppi_72_quality_95_embedColorProfile_true.jpg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5484&h=630&imgixProfile=propublicaAssetsV5&q=90&w=1200&s=490ebf1ef031a8ddf3454e12d2586341"
                : imageUrl
            }
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItems;
