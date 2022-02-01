import React, { useState, useEffect } from "react";
import Axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=8d7a900306b34a278dc3f8c835b91f1a"
      );
      setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  }, []);

  return (
    <div className="p-4 w-screen h-auto bg-red-50">
      <h1 className="text-2xl font-semibold text-center p-4">All Updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 justify-items-center px-20">
        {/* 1st card */}
        {articles.map(({ title, description, urlToImage, author, url }) => (
          <div className="py-8 ">
            <div className="overflow-hidden rounded shadow-lg max-w-sm">
              <img
                src={urlToImage}
                alt="building"
                className="w-full h-52 mx-auto"
              />
              <div className="px-6 py-6">
                <div className="font-extrabold text-xl">{title}</div>
                <div>{description}</div>
                <div className="font-medium">{author}</div>
                <a className="font-bold" href={url}>
                  {url}
                </a>
                <br />
                <button
                  className="h-fit
                 w-fit bg-gray-300 text-red-900 p-1 rounded-lg"
                >
                  Read...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
