import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';

const NewsBoard = ({category}) => {
    const [state, setState] = useState([]);
    const [hasError, setHasError] = useState(false);
    const fetchData = () =>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a562a88e8c904d4a94319b5e7ce46397`)
    .then(response =>response.json())
    .then(res => {


        setState(res.articles)
        console.log(res);
    }
        
        )
    .catch(err => setHasError(true))

}


useEffect(()=>{
fetchData();
},[category])

    
  return (
    <div className='text-center'>
        <h2>Latest <span className='badge bg-danger'>News</span></h2>
        {state && state.map((news,index)=>{
        <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard
