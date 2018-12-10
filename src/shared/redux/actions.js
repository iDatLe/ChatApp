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
                console.log('Posted username')
                dispatch(currentUsername(data)) // After response, dispatch action w/ data
            } else {
                console.log('Username failed')
            }
        })
        .catch(error => {
            console.error(error)
        })
    }
}

export function currentUsername(data) {
    return {
        type: "CURRENT_USERNAME",
        data //contains username in json format
    }
}