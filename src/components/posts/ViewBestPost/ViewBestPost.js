import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../state/store';
import { getBestPost } from '../../../state/actions/posts.actions';
import  BestPostList  from './BestPostList/BestPostList';

class ViewBestPost extends Component {
    componentWillMount() {
        store.dispatch(getBestPost(1));
    }
    render() {
        return (
            <div>
                <BestPostList postDetails={this.props.bestPost.post}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ViewBestPost);