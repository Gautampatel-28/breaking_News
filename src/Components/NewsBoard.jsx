import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(`HTTP error! status: ${response.status}, message: ${err.message}`);
          });
        }
        return response.json();
      })
      .then(data => setArticles(data.articles || []))
      .catch(error => {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news.');
      });
  }, [category]);
  
  

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.length ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title || 'No title available'}
            description={news.description || 'No description available'}
            src={news.urlToImage || '/path/to/default/image.png'} // Adjust this to your default image path
            url={news.url}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default NewsBoard;
