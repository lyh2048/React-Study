const CinemaListReducer = (prevState = {
    list: []
}, action) => {
    const newState = {...prevState}
    switch (action.type) {
        case 'changeList':
            newState.list = action.value
            return newState
        default:
            return prevState
    }
}

export default CinemaListReducer