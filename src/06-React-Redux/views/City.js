import React, {useState} from "react"
import store from "../redux/store"
import {connect} from 'react-redux'

function City(props) {
    const [cityList] = useState(['北京', '上海', '广州', '深圳'])
    return (
        <div>
            City
            <ul>
                {
                    cityList.map((item, index) => <li
                        onClick={() => {
                            // store.dispatch({
                            //     type: 'changeCity',
                            //     value: item
                            // })
                            props.changeCity(item)
                            props.history.push(`/cinemas`)
                        }}
                        key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}

const mapDispatchToProp = {
    changeCity(item) {
        return {
            type: 'changeCity',
            value: item
        }
    }
}
export default connect(null, mapDispatchToProp)(City)