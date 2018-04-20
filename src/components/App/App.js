// import React from 'react';
// import { connect } from 'react-redux';

// import './App.css';

// import PostsByUser from "..//posts/PostsByUser";
// import PostsByTopic from '../posts/PostsByTopic';
// import UserProfile from '../UserProfile/UserProfile';

// import store from '../../state/store';
// import { getInitialInfo } from '../../state/actions/common.actions';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
        
//         // TODO: remove hardcoding by getting userId from the login screen
//         this.loggedInUserId = 1;
//     }

//     componentWillMount() {
//         store.dispatch(getInitialInfo(this.loggedInUserId));
//     }

//     render() {
//         if (this.props &&
//             this.props.initialInfo &&
//             this.props.initialInfo.data &&
//             this.props.initialInfo.data.currentTopic &&
//             this.props.initialInfo.data.currentTopic.topic_id && 
//             this.loggedInUserId) {

//         // if (this.props &&
//         //     this.props.initialInfo &&
//         //     this.props.initialInfo.data &&
//         //     this.props.initialInfo.data.loggedInUserDetails &&
//         //     this.props.initialInfo.data.loggedInUserDetails && 
//         //     this.loggedInUserId) {
        

//             return (
//                 <div className="App">
//                     {/* <PostsByUser userId={1} /> */}
//                     <PostsByTopic topicId={this.props.initialInfo.data.currentTopic.topic_id} userId={this.loggedInUserId}/> 
//                     {/* <UserProfile userDetails={this.props.initialInfo.data.loggedInUserDetails} /> */}
//                 </div>
//             );
//         } else {
//             return (<div />);
//         }
//     }
// }

//  const mapStateToProps = (state) => state;
//  export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import ViewPostsByUser from '../ViewPostsByUser/ViewPostsByUser';
import UserProfile from '../UserProfile/UserProfile';
import Header from '../Layout/Header/Header';
import viewBestPost  from '../ViewBestPost/ViewBestPost';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/" component={LandingPage}/>
                            <Route path="/userProfile" component={UserProfile}/>
                            <Route path="/bestPost" component={viewBestPost} />
                            <Route path="/postsByUser" component={ViewPostsByUser} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;