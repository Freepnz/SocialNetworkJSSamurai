import moduleStyle from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
    {id: 1, message: 'Hi, how are you to day', likeCount: 15},
    {id: 2, message: 'This is my firs post?', likeCount: 0},
    {id: 3, message: 'It\'s second post', likeCount: 4},
]

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
                <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
                <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
                <Post message={postsData[2].message} likeCount={postsData[2].likeCount}/>
            </div>
        </div>
    );
}

export default MyPosts;