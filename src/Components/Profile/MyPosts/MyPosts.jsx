import moduleStyle from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={moduleStyle.MyPosts}>
                <Post message='Hi, how are you to day?' likeCount='15'/>
                <Post message='This is my firs post?' likeCount='27'/>
            </div>
        </div>
    );
}

export default MyPosts;