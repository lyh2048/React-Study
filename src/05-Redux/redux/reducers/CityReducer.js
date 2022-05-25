const CityReducer = (prevState = {
    cityName: '北京'
}, action) => {
    const newState = {...prevState}
    switch (action.type) {
        case 'changeCity':
            newState.cityName = action.value
            return newState
        default:
            return prevState
    }
}

export default CityReducer