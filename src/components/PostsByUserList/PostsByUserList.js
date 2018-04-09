import React from 'react';
import './PostsByUserList.css';
import UserPostListItem from './UserPostListItem/UserPostListItem';

const Posts = (props) => {
    return (
        <div className="Wrapper">
            {
                props.items && props.items.map(post => {
                    return (
                        <div>
                            {post.postItem.postItem.post_id}
                        </div>
                    );
                    //return <UserPostListItem postItem={post} />;
                })
            }
        </div>
    );
};

export default Posts;