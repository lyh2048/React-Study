import React, { Component } from "react"
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css/bundle'

Swiper.use([Navigation, Pagination])

export default class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: ['aaa', 'bbb', 'ccc']
            })

            new Swiper(".swiper", {
                pagination: {
                    el: '.swiper-pagination'
                }
            })
        }, 1000)
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     new Swiper(".swiper", {
    //         pagination: {
    //             el: '.swiper-pagination'
    //         }
    //     })
    // }

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