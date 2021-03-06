import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogReducer";

let store = {
    _state: {
        profilePage: {
            postsArray: [
                {id: 0, message: 'Hi, how are you to day', likeCount: 15},
                {id: 1, message: 'This is my firs post?', likeCount: 0},
                {id: 2, message: 'It\'s second post', likeCount: 4},
                {id: 3, message: 'It\'s third post', likeCount: 11}
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogsArray: [
                {
                    id: 1,
                    name: 'Diman',
                    userAvatar: 'https://steamuserimages-a.akamaihd.net/ugc/799863554278396335/1167820F2B9B7ADCF099E314CD51659002E24966/?imw=512&amp;imh=536&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'
                },
                {
                    id: 2,
                    name: 'Oleg',
                    userAvatar: 'https://sun9-36.userapi.com/impg/5ps5lGopbhpgE1nwe2EEDl64obywkZ68oeTU0A/rSkWb1bq-qI.jpg?size=604x604&quality=96&sign=0ea3b1a3059ec96b658450e48bbccc03&type=album'
                },
                {
                    id: 3,
                    name: 'Vera_Ivanovna',
                    userAvatar: 'https://steamuserimages-a.akamaihd.net/ugc/963102626831712710/B6AB25A0F63F40C0A0F235097523E41BDC5C477F/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'
                },
                {
                    id: 4,
                    name: 'Zakhar_1994',
                    userAvatar: 'https://s.starladder.com/uploads/user_logo/b/f/2/d/meta_tag_d6ca03e719804347cb71d8338d5bce5a.jpg'
                },
                {
                    id: 5,
                    name: 'Katya',
                    userAvatar: 'https://i.pinimg.com/originals/f9/7a/68/f97a6894de81e42f438457b775080be5.jpg'
                }
            ],
            messagesArray: [
                {id: 1, text: 'Hi, my name is Ivan. Where are you from?'},
                {id: 2, text: 'hello, how many time?'},
                {id: 3, text: 'you are sun of beach'}
            ],
            newDialogText: ''
        },
        friends: {
            friendsArray: [
                {
                    id: 1,
                    nickName: 'Kazipop',
                    friendsAvatar: 'https://drasler.ru/wp-content/uploads/2019/05/????????????????-??????-????????????????-??-????-????-????????????????????017.jpg'
                },
                {
                    id: 2,
                    nickName: 'LIZA',
                    friendsAvatar: 'https://img.wallpapersafari.com/desktop/1280/1024/34/56/sStxXT.jpg'
                },
                {
                    id: 3,
                    nickName: 'noName',
                    friendsAvatar: 'http://andrey-eltsov.ru/wp-content/uploads/2019/01/Agh-45juD_4uyAWb_5mj-d5_djhcgUng-Hgdt6-dj_jtu-????????????-????????????????.jpg'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('???????????????????? ?????? ?????????????????? UI')
    },

    getState() {
        return this._state
    },
    observerFunction(observer) {         //???????????????? ??-?? ???????????????? ??-???? ???? index.js
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);

        this._callSubscriber(this._state);
    }
}

export let findIdPostArray = () => {
    let i = store._state.profilePage.postsArray.length
    return i;
}

window.store = store;

export default store;
