import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard';

const Category = () => {
    const { id } = useParams()
    const category = useLoaderData();

    return (
        <div>
            {
                category.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>
                )
            }
        </div>
    );
};

export default Category;