import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegShareSquare, FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import moment from 'moment';
import Rating from 'react-rating';


const NewsCard = ({ news }) => {
    const { title, details, thumbnail_url, image_url, _id, author, rating, total_view } = news;
    const { name, published_date, img } = author;
    const { number, badge } = rating;





    return (
        <article className='mb-3'>
            <Card>
                <Card.Header className='d-flex gap-3 align-items-center w-100'>
                    <img style={{ height: '40px' }} src={img} alt="author-image" className='rounded-circle' />

                    <div className="d-flex  justify-content-between flex-grow-1 align-items-center">
                        <div className='align-self-center'>
                            <h3 className="fs-5 fw-semibold">{name}</h3>
                            <p className="text-secondary mb-0">{moment(author?.published_date).format("YYYY-MM-DD")}</p>
                        </div>

                        <div className='flex-shrink-0 d-flex gap-2'>
                            <FaRegBookmark className='fs-5' />
                            <FaRegShareSquare className='fs-5'></FaRegShareSquare>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='fw-bold'>{title}</Card.Title>
                    <Card.Img src={image_url} alt="Card image" className='my-3' />
                    <Card.Text>
                        {details.length < 250 ? <p className='my-1 text-secondary'>{details}</p> :
                            <> <p className='my-1 text-secondary'> {details.slice(0, 250)}..</p>

                                <Link
                                    to={`/news/${_id}`}
                                    className='m-0 fw-semibold text-capitalize text-see-more text-decoration-none'
                                >Read more</Link>
                            </>

                        }
                    </Card.Text>
                    <Card.Footer className='text-muted d-flex justify-content-between p-3'>
                        <div className='d-flex gap-1 align-items-center'>

                            {/* ---------------- React rating with looping ----------------*/}
                            {/* 
                            This will create an array of size number using Array(parseInt(number)).fill(), and then loop through each item in the array using map. Inside the map function, you can return the FaStar component with a unique key for each iteration using key={i}. */}
                            {/* {
                                Array(parseInt(number)).fill().map((_, i) => (
                                    <FaStar key={i} className='text-warning fs-5 ' />
                                ))

                            }
                            <FaStarHalf className='text-warning fs-5 ' /> */}

                            {/* React rating with REACT RATING */}
                            <Rating
                                placeholderRating={number}
                                readonly
                                emptySymbol={<FaRegStar className='text-warning fs-5 ' ></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning fs-5 ' />}
                                fullSymbol={<FaStar className='text-warning fs-5 ' />}
                            />




                            <p className='fs-5 fw-semibold text-warning m-0'>{number}</p>
                        </div>

                        <div className='d-flex gap-2 fs-5 align-items-center'>
                            <FaEye />
                            <p className='m-0 fw-semibold'>{total_view}</p>
                        </div>
                    </Card.Footer>
                </Card.Body>


            </Card>
        </article>
    );
};

export default NewsCard;