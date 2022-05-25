import React, {useState} from "react"
import store from "../redux/store"

export default function City(props) {
    const [cityList] = useState(['北京', '上海', '广州', '深圳'])
    return (
        <div>
            City
            <ul>
                {
                    cityList.map((item, index) => <li
                        onClick={() => {
                            store.dispatch({
                                type: 'changeCity',
                                value: item
                            })
                            props.history.push(`/cinemas`)
                        }}
                        key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}