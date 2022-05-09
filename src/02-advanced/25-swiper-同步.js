import React, { Component } from "react"
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css/bundle'

Swiper.use([Navigation, Pagination])

export default class App extends Component {
    state = {
        list: ['111', '222', '333']
    }

    componentDidMount() {
        new Swiper(".swiper", {
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }


    render() {
        return (
            <div>
                <div className={"swiper"} style={{height: '200px', background: 'gray'}}>
                    <div className={"swiper-wrapper"}>
                        {
                            this.state.list.map((item, index) => <div
                                className={"swiper-slide"}
                                key={index}>
                                {item}
                            </div>)
                        }
                    </div>
                    <div className={"swiper-pagination"}/>
                </div>
            </div>
        )
    }
}