import moduleStyle from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";

const MyPosts = (props) => {
debugger
    let postsElements = props.postsArray.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
debugger
    return  (
        <div className={moduleStyle.myPostsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
        <div className={moduleStyle.myPosts}>
            {postsElements}
        </div>
    </div>
    )
}

export default MyPosts;
