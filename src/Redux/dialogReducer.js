const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

const dialogReducer = (state, action) => {
    if (action.type === ADD_DIALOG) {
        debugger
        let newDialog = {
            id: 4,
            text: state.newDialogText
        };
        state.messagesArray.push(newDialog);
        state.newDialogText = '';
        return this.state;
    } else if (action.type === UPDATE_NEW_DIALOG_TEXT) {
        state.newDialogText = action.newDialog;
        return this.state;
    }
}

export const addDialogActionCreator = () => ({type: ADD_DIALOG})
export const updateNewDialogTextActionCreator = (text) => ({type: UPDATE_NEW_DIALOG_TEXT, newDialog: text})

export default dialogReducer;