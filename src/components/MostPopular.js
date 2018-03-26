import React from 'react';
import SingleItem from './SingleItem';

import { Col } from 'reactstrap';

class MostPopular extends React.Component {

    render() {
        const itemList = this.props.mostPopular.map((i) => {
            return (
                <Col sm={4} xs={12} key={i.id}>
                    <SingleItem {...i}/>
                </Col>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    <Col xs={12}>
                        <h5 className="ph">Your Most Popular Shots</h5>
                    </Col>
                </div>
                <div className="row">
                    {itemList}
                </div>

            </div>
            )

    }
}

export default MostPopular;