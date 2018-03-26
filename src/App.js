import React, { Component } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostPopular:
                [
                    {
                        id: 1,
                        img: 'm-1.png',
                        title: 'Thread Frame',
                        views: 1450,
                        likes: 120,
                        comments: 65
                    },
                    {
                        id: 2,
                        img: 'm-2.png',
                        title: 'Thread Frame',
                        views: 15,
                        likes: 102,
                        comments: 65
                    },
                    {
                        id: 3,
                        img: 'm-3.png',
                        title: 'Thread Frame',
                        views: 1450,
                        likes: 120,
                        comments: 65
                    }
                ],
            biggestFans:
                [
                    {
                        id: 1,
                        name: 'Sudhir Kumar',
                        shots: 15,
                        friends: 412,
                        likes: 43,
                        comments: 12,
                        img:'1.png'
                    },
                    {
                        id: 2,
                        name: 'Rohit Sharma',
                        shots: 12,
                        friends: 102,
                        likes: 34,
                        comments: 5,
                        img:'2.png'
                    },
                    {
                        id: 3,
                        name: 'Brice Séraphin',
                        shots: 51,
                        friends: 1226,
                        likes: 32,
                        comments: 10,
                        img:'4.png'
                    },
                    {
                        id: 4,
                        name: 'Hemant Gupta',
                        shots: 51,
                        friends: 1226,
                        likes: 32,
                        comments: 10,
                        img:'5.png'
                    },
                    {
                        id: 5,
                        name: 'Avinash Tripathi',
                        shots: 73,
                        friends: 2050,
                        likes: 19,
                        comments: 7,
                        img:'6.png'
                    }
                ],
            mostPopularShots:
                [
                    {
                        id: 1,
                        name: 'Alexander Zaytsev',
                        shots: 234,
                        friends: 8234,
                        likes: 43,
                        comments: 12,
                        img:'7.png'
                    },
                    {
                        id: 2,
                        name: 'Hemant Gupta',
                        shots: 58,
                        friends: 1247,
                        likes: 34,
                        comments: 5,
                        img:'5.png'
                    },
                    {
                        id: 3,
                        name: 'Lonut Zamfir',
                        shots: 374,
                        friends: 15540,
                        likes: 32,
                        comments: 10,
                        img:'8.png'
                    },
                    {
                        id: 4,
                        name: 'Avinash Tripathi',
                        shots: 73,
                        friends: 2050,
                        likes: 27,
                        comments: 11,
                        img:'6.png'
                    },
                    {
                        id: 5,
                        name: 'vikash 1307',
                        shots: 234,
                        friends: 8234,
                        likes: 43,
                        comments: 12,
                        img:'3.png'
                    }
                ]
        };
    }
  render() {
    return (
        <div className="wrapper">
            <div id="content">
                <Header/>
                <Content
                    mostPopular={this.state.mostPopular}
                    biggestFans={this.state.biggestFans}
                    mostPopularShots={this.state.mostPopularShots}
                />

            </div>
        </div>
    );
  }
}

export default App;
