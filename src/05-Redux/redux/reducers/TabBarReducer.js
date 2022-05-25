const TabBarReducer = (prevState = {
    show: true
}, action) => {
    const newState = {...prevState}
    switch (action.type) {
        case 'hideTabBar':
            newState.show = false
            return newState
        case 'showTabBar':
            newState.show = true
            return newState
        default:
            return prevState
    }
}

export default TabBarReducer