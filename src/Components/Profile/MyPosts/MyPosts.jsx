import moduleStyle from './MyPosts.module.css';
import Post from './Post/Post';

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
                <Post message='Hi, how are you to day?' likeCount='15'/>
                <Post message='This is my firs post?' likeCount='27'/>
            </div>
        </div>
    );
}

export default MyPosts;