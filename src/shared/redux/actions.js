export function onChangeAction(name, value) {
    return {
        type: "ON_CHANGE",
        name,
        value
    }
}

export function messageAction(message) {
    return {
        type: "MESSAGE_CHANGE",
        message
    }
}

export function currentUserAction(currentUser) {
    return {
        type: "CURRENTUSER_CHANGE",
        currentUser
    }
}

export function currentRoomAction(currentRoom) {
    return {
        type: "CURRENT_ROOM",
        currentRoom
    }
}

export function usersTypingAction(users) {
    return {
        type: "USERS_TYPING",
        users
    }
}

export function stoppedTypingAction(users) {
    return {
        type: "USERS_STOPPED_TYPING",
        users
    }
}

export function presenceAction(state, user) {
    return {
        type: "PRESENCE_CHANGE",
        state,
        user
    }
}

export function userJoinedAction(user) {
    return {
        type: "USER_JOINED",
        user
    }
}

export function resetAction() {
    return {
        type: "RESET_FIELD",
    }
}


export function usernameForm(data) {
    return (dispatch) => {
        return fetch('/api/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) => {
            if(res.status === 201) {
                dispatch(currentUsername(data)) // After response, dispatch action w/ data
            } else {
                console.log('Username failed')
            }
        })
        .catch(error => console.error(error))
    }
}

export function currentUsername(data) {
    return {
        type: "CURRENT_USERNAME",
        data //contains username in json format
    }
}