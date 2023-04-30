import React from 'react';
import { useContext } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { AllNewsContext } from '../../contexts/NewsProvider';
import { Link } from 'react-router-dom';


const EditorInsights = () => {
    const { news, loading } = useContext(AllNewsContext);

    if (loading) {
        return <Spinner animation="border" size="xl" />
    }

    const pickNews = news.find(nws => nws.others_info.is_todays_pick === true);

    return (
        <div className='my-5'>
            <h3 className='text-danger fw-bold'>Todays Pick</h3>
            <Card className="bg-dark text-white">
                <Card.Img src={pickNews.image_url} alt="Card image" className='opacity-25' />
                <Card.ImgOverlay className='d-flex flex-column justify-content-end align-items-center mx-5 my-3'>
                    <Card.Title className='text-center fs-3 fw-bold text-warning'>{pickNews.title}</Card.Title>
                    <Card.Text className='text-center'>
                        {pickNews.details.slice(0, 250)} <span><Link
                            to={`/news/${pickNews._id}`}
                            className='ms-1 fw-bold text-capitalize text-see-more text-decoration-none'
                        >Read more</Link></span>
                    </Card.Text>

                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default EditorInsights;