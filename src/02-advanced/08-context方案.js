import React, { Component } from "react"
import axios from 'axios'
import './css/normalize.css'

const GlobalContext = React.createContext()

export default class App extends Component {
    state = {
        filmList: [],
        info: ''
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
            <GlobalContext.Provider value={{info: this.state.info,
                changeInfo: (value) => {this.setState({
                    info: value})}}}>
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
            </GlobalContext.Provider>
        )
    }
}


class FilmItem extends Component {
    render() {
        const {name, poster, grade, synopsis} = this.props
        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        return (
                            <div onClick={() => value.changeInfo(synopsis)}>
                                <img src={poster} alt={name} style={{width: '200px', height: '300px'}} />
                                <h4>{name}</h4>
                                <span>用户评分：{grade ? grade : '无'}</span>
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        return (
                            <div>
                                <span style={{color: 'gray'}}>{value.info}</span>
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}