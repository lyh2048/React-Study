import React, { Component } from "react"
import { MySwiperItem, MySwiper } from "./swiper"
import axios from "axios"

export default class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         list: ['aaa', 'bbb', 'ccc']
        //     })
        // }, 1000)
        axios({
            url: 'https://m.maizuo.com/gateway?filmId=5901&k=2436737',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16521010271081202182193153","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(resp => {
            console.log(resp.data)
            this.setState({
                list: resp.data.data.film.photos
            })
        }).catch(err => {
            console.log(err)
        })
    }


    render() {
        return (
            <div>
                <MySwiper loop={true}>
                    {
                        this.state.list.map((item, index) => <MySwiperItem
                            key={index}>
                            <img src={item} alt={index} style={{width: '100%', height: '500px'}} />
                        </MySwiperItem>)
                    }
                </MySwiper>
            </div>
        )
    }
}