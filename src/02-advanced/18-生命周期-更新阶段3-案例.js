import React, { Component } from "react"
import axios from "axios"

export default class App extends Component {
    state = {
        type: 1
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => this.setState({
                        type: 1
                    })}>正在热映</li>
                    <li onClick={() => this.setState({
                        type: 2
                    })}>即将上映</li>
                </ul>
                <FilmListComponent type={this.state.type} />
            </div>
        )
    }
}

class FilmListComponent extends Component {
    state = {
        list: []
    }

    getFilmList(type) {
        let k = 6369301
        if (type === 2) {
            k = 8077848
        }
        axios({
            url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=${type}&k=${k}`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(resp => {
            console.log(resp.data.data)
            const { films } = resp.data.data
            this.setState({
                list: films
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount() {
        if (this.props.type === 1) {
            console.log('请求正在热映的数据...')
            this.getFilmList(1)
        } else {
            console.log('请求即将上映的数据...')
            this.getFilmList(2)
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.type === 1) {
            console.log('请求正在热映的数据...')
            this.getFilmList(1)
        } else {
            console.log('请求即将上映的数据...')
            this.getFilmList(2)
        }
    }

    render() {
        return (
            <div>
                FilmList-{this.props.type}
                <ul>
                    {
                        this.state.list.map(item => <li key={item.filmId}>{item.name}</li>)
                    }
                </ul>
            </div>
        )
    }
}