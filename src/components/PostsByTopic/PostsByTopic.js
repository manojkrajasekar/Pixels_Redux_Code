import React, { Component } from 'react';
import store from '../../state/store';
import PostsList from '../PostsList/PostsList';
import { connect } from 'react-redux';

import { getPostByTopic } from '../../state/actions/posts.actions';

class PostsByTopic extends Component {
    componenWillMount() {
        store.dispatch(getPostByTopic(1));
    }
    render() {
        return (
            <div>
                <PostsList items={ this.props.postsByTopic.posts } />
            </div>
        );
    }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(PostsByTopic);