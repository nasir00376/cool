import React from 'react';
import {Col} from 'reactstrap';

const Graph = (props) => {
    return (
            <section className="bg-white" style={{ 'paddingBottom': '5rem' }}>
                <div className="container">
                    <h5 className="ph">View of shots your last 30 days</h5>
                    <div className="row">

                        <Col>
                            <img src="/assets/images/graph.PNG" className="img-thumbnail"/>
                        </Col>
                    </div>
                </div>
            </section>
    );
};

export default Graph;