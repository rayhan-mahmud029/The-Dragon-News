import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import EditorInsights from './EditorInsights';

const News = () => {
    const { id } = useParams()
    const news = useLoaderData();
    const { title, image_url, details , category_id} = news;




    return (
        <div>
            <h3>Dragon News</h3>
               
            {/* News Detail Card */}
            <Card className='w-100 my-3'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='fw-bold fs-3 my-3'>{title}</Card.Title>
                    <Card.Text className='fs-5 text-secondary'>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger" className='px-
                    4 py-2 rounded-0 fw-bold fs-5 my-3'><FaArrowLeft className='me-1'/> All news in this category</Button></Link>
                </Card.Body>
            </Card>

            <EditorInsights/>
        </div>

    );
};

export default News;