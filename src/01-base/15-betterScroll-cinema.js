import React, {Component} from "react"
import axios from "axios"
import BetterScroll from 'better-scroll'


export default class App extends Component {
    state = {
        cinemaList: [],
        cinemaListBackup: []
    }

    render() {
        return (
            <div>
                <input onChange={(event) => this.handleChange(event)} />
                <div className="cinema-content" style={{height: '500px', overflow: 'hidden', background: 'yellow'}}>
                    <div className="content">
                        {
                            this.state.cinemaList.map(item =>
                                <dl key={item.cinemaId}>
                                    <dt>{item.name}</dt>
                                    <dd>{item.address}</dd>
                                </dl>)
                        }
                    </div>
                </div>
            </div>
        )
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
                cinemaList: cinemas,
                cinemaListBackup: cinemas
            }, () => new BetterScroll(".cinema-content"))
        }).catch(err => {
            console.log(err)
        })
    }

    handleChange(event) {
        const searchText = event.target.value.toUpperCase()
        const resultList = this.state.cinemaListBackup.filter(item => item.name.toUpperCase().includes(searchText) || item.address.toUpperCase().includes(searchText))
        console.log(`找到${resultList.length}条结果`)
        this.setState({
            cinemaList: resultList
        })
    }
}