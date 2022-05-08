import React, { Component } from "react"
import axios from 'axios'
import './css/normalize.css'

export default class App extends Component {
    state = {
        filmList: [],
        filmDetail: ''
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
                        filmList.map(item => <FilmItem key={item.filmId}
                                                       event={(value) => this.setState({filmDetail: value})}
                                                       {...item} />)
                    }
                </div>
                <div>
                    <FilmDetail filmDetail={this.state.filmDetail} />
                </div>
            </div>
        )
    }
}


class FilmItem extends Component {
    render() {
        const {name, poster, grade, synopsis} = this.props
        return (
            <div onClick={() => this.props.event(synopsis)}>
                <img src={poster} alt={name} style={{width: '200px', height: '300px'}} />
                <h4>{name}</h4>
                <span>用户评分：{grade ? grade : '无'}</span>
            </div>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <div>
                <span style={{color: 'gray'}}>{this.props.filmDetail}</span>
            </div>
        )
    }
}