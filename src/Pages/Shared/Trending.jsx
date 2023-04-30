import React from 'react';
import { useContext } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { AllNewsContext } from '../../contexts/NewsProvider';

const Trending = () => {
    const { news, loading } = useContext(AllNewsContext);
    console.log(news);
    if (loading){
        return  <Spinner animation="border" size="xl" />
    }
    const trendingNews = news.filter(nws => nws.others_info.is_trending === true)

    return (
        <div className='my-5'>
            <h3 className='text-danger fw-bold'>Trending</h3>
            <Row xs={1} md={1} className="g-4">
                {trendingNews.map((news) => (
                    <Col key={news._id}>
                        <Card>
                            <Card.Img variant='top' src={news.image_url} />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Text>
                                    {news.details.slice(0, 100)}..
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Trending;