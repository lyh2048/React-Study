import React, { Component } from "react"
import propTypes from 'prop-types'

export default class NavBar extends Component {
    static propTypes = {
        title: propTypes.string,
        leftShow: propTypes.bool
    }

    static defaultProps = {
        leftShow: true
    }

    render() {
        const {title, leftShow} = this.props
        return (
            <div>
                {leftShow && <button>返回</button>}
                {title}
                <button>首页</button>
            </div>
        )
    }
}

// 类属性
// NavBar.propTypes = {
//     title: propTypes.string,
//     leftShow: propTypes.bool
// }