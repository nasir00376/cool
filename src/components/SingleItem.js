import React from 'react';
import { Card, CardImg, CardBody, Col } from 'reactstrap';

const SingleItem = (props) => {
    const imgUrl = "/assets/images/" + props.img;
    return (
        <div>
            <Card>
                <CardImg top width="100%"
                         src={imgUrl} alt="Card image cap" />
                <CardBody>
                            <div className="row">
                                <Col>
                                    <span><img src="/assets/images/icons/eye.png"/></span>
                                    <span className="f-14 pl-1">{props.views}</span>
                                </Col>
                                <Col>
                                    <span><img src="/assets/images/icons/heart-icon.png"/></span>
                                    <span className="f-14 pl-1">{props.likes}</span>
                                </Col>
                                <Col>
                                    <span><img src="/assets/images/icons/comment-icon.png"/></span>
                                    <span className="f-14 pl-1">{props.comments}</span>
                                </Col>
                            </div>

                </CardBody>
            </Card>
        </div>
    );
};

export default SingleItem;