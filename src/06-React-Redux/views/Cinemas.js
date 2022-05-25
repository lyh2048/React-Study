import React, {useEffect} from "react"
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction"
import {connect} from 'react-redux'


function Cinemas(props) {
    const {list, getCinemaListAction} = props
    useEffect(() => {
        if (list.length === 0) {
            console.log('从后台取数据')
            // store.dispatch(getCinemaListAction())
            getCinemaListAction()
        } else {
            console.log('从store缓存中取数据')
        }
    }, [list, getCinemaListAction])

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div onClick={() => props.history.push(`/city`)}>{props.cityName}</div>
                <div onClick={() => props.history.push(`/cinemas/search`)}>搜索</div>
            </div>
            {
                list.map(item => <dl key={item.cinemaId}>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                </dl>)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.CinemaListReducer.list,
        cityName: state.CityReducer.cityName
    }
}

const mapDispatchToProps = {
    getCinemaListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)