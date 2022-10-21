import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const {_id,title,author,image_url,total_view,details,rating} = news;
    console.log(news)
    return (
        <Card className='mb-5'>
            <Card.Header className='d-flex justify-content-between aling-items-center'>
                <div className='d-flex'>
                    <Image
                    roundedCircle
                    className='me-2'
                    src={author.img}
                    style={{height:'60px'}}
                    ></Image>
                    <div>
                        <p className='mb-0'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>

                </div>
                <div>
                    <FaRegBookmark className='me-0'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>

                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant='top'src={image_url}></Card.Img>
                <Card.Text>
                    {
                    details.length > 200 ?
                    <p>{details.slice(0,250)+ '...'}<Link  to={`/news/${_id}`}>Read more</Link></p>
                    :
                    <p>{details}</p>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="d-flex justify-content-between aling-items-center">
                <div className>
                    <FaStar className='text-warning'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;