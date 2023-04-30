import React, { useEffect, useState } from 'react';
import {  NavLink } from 'react-router-dom';
import Trending from './Trending';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err.message))
    }, [])


    return (
        <div>

            {/* categories section */}
            <section className="mb-3">
                <h1 className="fs-4 fw-semibold mb-2">All Categories</h1>

                <div className="d-flex flex-column my-3">
                    {
                        categories.map(cat => <CategoryLink
                            key={cat.id}
                            cat={cat} />)

                    }
                </div>
            </section>

            {/* Trending News */}
            <section className="my-3">
                <Trending />
            </section>
        </div>
    );
};

const CategoryLink = (props) => {
    const { cat } = props;

    return (
        <>
            <div className='d-flex  category-box ' id='left-nav'>
                <NavLink
                    id='right-nav'
                    className={({ isActive, isPending }) => `${isPending ? "pending" : isActive ? "active" : "pending"} ps-5 text-start text-decoration-none fw-semibold p-3 w-100`
                    }
                    to={`/category/${cat.id}`}

                >{cat.name}</NavLink>
            </div >

        </>
    );

}

export default LeftNav;