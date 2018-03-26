import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { Col } from 'reactstrap';

const Stats = (props) => {
    return (
        <section className="bg-white">
            <div className="container">
                <div className="nav-stats-top">
                    <div className="row">

                        <Col>
                            <h5 style={{'display':'inline'}}>150</h5>
                            <span className="stats-grey-text">Shots</span>
                            <img src="/assets/images/icons/images-icon.png"/>

                        </Col>
                        <Col>
                            <h5 style={{'display':'inline'}}>150</h5>
                            <span className="stats-grey-text">Likes</span>
                            <img src="/assets/images/icons/images-icon.png"/>

                        </Col>
                        <Col>
                            <h5 style={{'display':'inline'}}>150</h5>
                            <span className="stats-grey-text">Comments</span>
                            <img src="/assets/images/icons/images-icon.png"/>

                        </Col>
                        <Col>
                            <span className="stats-grey-text" style={{ 'fontSize': '12px' }}>Made in Last 30 days:</span>
                        </Col>
                        <Col>
                            <h6 style={{'display':'inline'}}>20 Shots</h6>
                        </Col>
                        <Col>
                            <h6 style={{'display':'inline'}}>Comments 1,240</h6>
                        </Col>
                        <Col>
                            <h6 style={{'display':'inline'}}>Likes 230</h6>
                        </Col>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;