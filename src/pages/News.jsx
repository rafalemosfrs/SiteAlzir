import React, { useEffect, useState } from 'react';

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/news');
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Carregando notícias...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Notícias e Novidades</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{new Date(item.pubDate).toLocaleDateString()}</p>
              <p className="text-gray-600 mb-4">{item.contentSnippet}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                Ler mais →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
