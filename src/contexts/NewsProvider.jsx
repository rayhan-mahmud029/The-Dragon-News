import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const AllNewsContext = createContext(null);


const NewsProvider = ({ children }) => {
    const [news, setNews] = useState('');
    const [loading, setLoading] = useState(false);


    const loadNews = async () => {
        try {
            const resp = await fetch('http://localhost:5000/news');
            const data = await resp.json();
            setNews(data)
            setLoading(false)
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        loadNews()
        setLoading(true)
    }, [])

    const contextData = {
        news,
        loading
    }
    return (
        <AllNewsContext.Provider value={contextData}>
            {children}
        </AllNewsContext.Provider>
    );
};

export default NewsProvider;