import { createStore } from 'redux'

const reducer = (prevState, action) => {
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

const store = createStore(reducer, {show: true})

export default store