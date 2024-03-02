
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card"  style={{maxWidth:"345px"}}>
  <img src={src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
  <p className="card-text">{description?description.slice(0,50):"Breaking: Major Event Unfolds, Stay Tuned for Updates!"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem