import React from 'react';
import { Col, Media } from 'reactstrap';

const ListItem = (props) => {
    const imgUrl = "/assets/images/avatar/" + props.img;
    return (
            <div className="list-item" key={props.id}>
                <div className="row" >
                    <Col sm={6} key={props.id}>
                        <Media className="bottom-section">
                            <Media left href="#">
                                <img className="rounded-circle " src={imgUrl} />
                            </Media>
                            <Media body className="justify-content-center align-self-center title">
                                {props.name}
                            </Media>
                        </Media>
                    </Col>
                    <Col sm={6} >
                        <div className="row bottom-section d-flex h-100">
                            <Col className="d-flex h-100">
                                <div className="justify-content-center align-self-center f-14">
                                    {props.shots}
                                </div>
                            </Col>
                            <Col className="d-flex h-100">
                                <div className="justify-content-center align-self-center f-14">
                                    {props.friends}
                                </div>
                            </Col>
                            <Col className="d-flex h-100 f-14">
                                <div className="justify-content-center align-self-center f-14">
                                    {props.likes}
                                </div>
                            </Col>
                            <Col className="d-flex h-100">
                                <div className="justify-content-center align-self-center f-14">
                                    {props.comments}
                                </div>
                            </Col>
                        </div>

                    </Col>
                </div>
            </div>
    );
};

export default ListItem;