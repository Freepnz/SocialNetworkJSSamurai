import moduleStyle from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

let postsData = [
    {id: 1, message: 'Hi, how are you to day', likeCount: 15},
    {id: 2, message: 'This is my firs post?', likeCount: 0},
    {id: 3, message: 'It\'s second post', likeCount: 4}
]

let postsElements = postsData.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

const MyPosts = () => {
    return (
        <div className={moduleStyle.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={moduleStyle.myPosts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;