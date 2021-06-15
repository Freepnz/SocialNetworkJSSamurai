const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

const profileReducer = (state, action) => {
  debugger
    if (action.type === ADD_POST) {
        let newPost = {
            //id: this.findIdPostArray(),    --! Не забыть добавить
            id: 11,
            //message: this._state.profilePage.newPostText,
            message: state.newPostText,
            likeCount: 0
        };
        state.postsArray.push(newPost);
        state.newPostText = '';
        //this._callSubscriber(this._state); ушёл в Dispatch
        return state;

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
        return state;
    }
}

export default profileReducer;