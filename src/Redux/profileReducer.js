import {findIdPostArray} from "./Store"

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    debugger
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                //id: this.findIdPostArray(),    --! Не забыть добавить
                id: findIdPostArray(),
                message: state.newPostText,
                likeCount: 0
            };
            state.postsArray.push(newPost);
            state.newPostText = '';
            //this._callSubscriber(this._state); ушёл в Dispatch
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;