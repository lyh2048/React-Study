import React, { Component } from "react"
import axios from "axios"

export default class App extends Component {
    state = {
        cinemaList: [],
        searchText: ''
    }

    componentDidMount() {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a": "3000", "ch": "1002", "v": "5.0.4", "e": "16395416565231270166529", "bc": "110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(resp => {
            const {cinemas} = resp.data.data
            this.setState({
                cinemaList: cinemas
            })
        }).catch(err => {
            console.log(err)
        })
    }

    getCinemaInfo() {
        const searchText = this.state.searchText.toUpperCase()
        return this.state.cinemaList.filter(item => item.name.toUpperCase().includes(searchText) || item.address.toUpperCase().includes(searchText))
    }

    render() {
        return (
            <div>
                <input type="text"
                       style={{width: '100%', height: '30px', lineHeight: '30px'}}
                       value={this.state.searchText}
                       onChange={(evt) => {
                    this.setState({
                        searchText: evt.target.value
                    })
                }}/>
                <ul style={{listStyle: 'none'}}>
                    {
                        this.getCinemaInfo().map(item => <li key={item.cinemaId} style={{margin: '0', padding: '10px', textAlign: 'center'}}>
                            {item.name}
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}