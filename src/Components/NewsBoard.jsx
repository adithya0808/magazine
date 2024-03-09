import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';

const NewsBoard = ({category}) => {
    const [articles,setArticles]=useState([]);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=a562a88e8c904d4a94319b5e7ce46397}`
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    },[category])
  return (
    <div className='text-center'>
        <h2>Latest <span className='badge bg-danger'>News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard
