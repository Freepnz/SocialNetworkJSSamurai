import moduleStyle from './Post.module.css';

const Post = (props) => {
    return (
        <div className={moduleStyle.item}>
            <img src='https://yt3.ggpht.com/ytc/AAUvwnioKNfQ9HZkSvCGmfI9CH3FcI4kbm5Wf1vTf_E8nQ=s900-c-k-c0x00ffffff-no-rj' alt='' ></img>
            <div>
                {props.message}

                <span>{props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;