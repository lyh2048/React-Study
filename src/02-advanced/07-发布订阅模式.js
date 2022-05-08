import React, { Component } from "react"
import axios from 'axios'
import {Bus} from './bus'
import './css/normalize.css'


export default class App extends Component {
    state = {
        filmList: [],
    }
    componentDidMount() {
        axios.get('data.json').then(res => {
            const {films} = res.data.data
            console.log(films)
            this.setState({
                filmList: films
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const filmList = this.state.filmList
        return (
            <div style={{display: 'flex'}}>
                <div style={{width: '200px'}}>
                    {
                        filmList.map(item => <FilmItem key={item.filmId} {...item} />)
                    }
                </div>
                <div>
                    <FilmDetail />
                </div>
            </div>
        )
    }
}


class FilmItem extends Component {
    render() {
        const {name, poster, grade, synopsis} = this.props
        return (
            <div onClick={() => Bus.publish(synopsis)}>
                <img src={poster} alt={name} style={{width: '200px', height: '300px'}} />
                <h4>{name}</h4>
                <span>用户评分：{grade ? grade : '无'}</span>
            </div>
        )
    }
}

class FilmDetail extends Component {
    constructor(props) {
        super(props);
        Bus.subscribe((info) => {
            this.setState({
                info: info
            })
        })
        this.state = {
            info: ''
        }
    }
    render() {
        return (
            <div>
                <span style={{color: 'gray'}}>{this.state.info}</span>
            </div>
        )
    }
}