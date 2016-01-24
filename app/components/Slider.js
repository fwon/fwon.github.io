import React, {Component, PropTypes} from 'react'
import Event from '../libs/event'

export default class Slider extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        const {status} = this.props
        const classes = status ? 'slider slideOut' : 'slider'
        return (
            <div className={classes}>
                <ul>
                    <li>文章</li>
                    <li>关于</li>
                </ul>
            </div>
        )
    }
}