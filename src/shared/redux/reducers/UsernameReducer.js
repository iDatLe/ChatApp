const initialState = {
    username: '',
    currentUsername: '',
    currentScreen: 'WhatIsYourUsernameScreen',
}

function UsernameReducer (state = initialState, action) {
    switch (action.type) {
        case "ON_CHANGE":
            return {
                ...state,
                [action.name] : action.value
            }
        case "CURRENT_USERNAME":
            return {
                ...state,
                currentUsername: action.data.username,
                currentScreen: 'ChatScreen'
            }
        default:
            return state
    }
}

export default UsernameReducer;