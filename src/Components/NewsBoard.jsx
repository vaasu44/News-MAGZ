import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=defab679781e4ebaa4b7f38d353dad4a`;
        fetch(url).then(res => res.json()).then(data => setArticles(data.articles));
    },[category])
  return (
    <div className="mx-5">
          <h2 className="text-center text-dark">Latest <span className="badge text-bg-danger fs-15">News</span></h2>
          {articles.map((news, index) => {
              return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={ news.url} />
          })}
    </div>
  )
}

export default NewsBoard
