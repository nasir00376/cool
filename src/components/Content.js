import React from 'react';
import MostPopular from './MostPopular';
import BottomSection from './BottomSection';
import Stats from './Stats';
import Graph from './Graph';

class Content extends React.Component {
    render() {
        return (
            <div>
                <Stats/>
                <Graph/>
                <MostPopular mostPopular={this.props.mostPopular}/>
                <BottomSection
                    biggestFans={this.props.biggestFans}
                    mostPopularShots={this.props.mostPopularShots}
                />
            </div>
        );
    }
}

export default Content;