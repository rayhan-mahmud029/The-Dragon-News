import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const allNews = useLoaderData();
    console.log(import.meta.env.VITE_INIT);

    return (
        <div>
            {
                allNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Home;