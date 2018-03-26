import React from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import ListItem from './ListItem';
import CardHeaderSection from './CardHeaderSection';
import { Col } from 'reactstrap';

class BottomSection extends React.Component{
    render() {
        const biggetsFansList = this.props.biggestFans.map((item) => {
            return (
                <ListItem {...item}
                />
            )
        });
        const mostPopularShotsList = this.props.mostPopularShots.map((item) => {
            return (
                <ListItem {...item}
                />
            )
        });

        return (
            <div className="container" style={{ 'paddingBottom': '10rem' }}>
                <div className="row">
                    <Col xs={12} sm={6}>
                        <h5 className="ph">Your Biggest Fans</h5>
                        <div>
                            <Card>
                                <CardHeaderSection/>
                                <ListGroup>
                                    <ListGroupItem>
                                        {biggetsFansList}
                                    </ListGroupItem>
                                </ListGroup>

                            </Card>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h5 className="ph">Your Most Popular Shots</h5>
                        <div>
                            <Card>
                                <CardHeaderSection/>
                                <ListGroup>
                                    <ListGroupItem>
                                        {mostPopularShotsList}
                                    </ListGroupItem>
                                </ListGroup>

                            </Card>
                        </div>
                    </Col>

                </div>
            </div>
        );
    }

};

export default BottomSection;