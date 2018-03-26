import React from 'react';
import { Col, CardHeader } from 'reactstrap';

const CardHeaderSection = (props) => {
    return (
        <CardHeader>
            <div className="row ">
                <Col sm={6}></Col>
                <Col sm={6} className="">
                    <div className="row">
                        <Col>
                            <img  src="/assets/images/icons/images-icon.png" alt="heart" />
                        </Col>
                        <Col>
                            <img  src="/assets/images/icons/friends-icon.png" alt="heart" />
                        </Col>
                        <Col>
                            <img  src="/assets/images/icons/heart-icon.png" alt="heart" />
                        </Col>
                        <Col>
                            <img  src="/assets/images/icons/comment-icon.png" alt="heart" />
                        </Col>
                    </div>

                </Col>
            </div>
        </CardHeader>
    );
};

export default CardHeaderSection;