import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';

const NewsBoard = ({category}) => {
    const [articles,setArticles]=useState([]);
   useEffect(() => {
        const fetchNews = async () => {
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=a562a88e8c904d4a94319b5e7ce46397`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchNews();
    }, [category]);
  return (
    <div className='text-center'>
        <h2>Latest <span className='badge bg-danger'>News</span></h2>
        {articles.map((news,index)=>{
        <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard
