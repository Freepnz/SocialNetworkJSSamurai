import moduleStyle from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.postsArray.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return <div className={moduleStyle.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={moduleStyle.myPosts}>
                {postsElements}
            </div>
        </div>
}

export default MyPosts;