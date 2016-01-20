import React, {Component, PropTypes} from 'react'
import Event from '../libs/event'

export default class Slider extends Component {
    constructor(props) {
        super(props)
        this._onVisibilityChange = this._onVisibilityChange.bind(this)
        this.state = {
            showState: false
        }
    }
    _onVisibilityChange() {
        this.setState({
            showState: !this.state.showState
        })
    }
    componentDidMount() {
        Event.on('Slider:toggle', this._onVisibilityChange)
    }
    render() {
        var classes = this.state.showState ? 'slider slideOut' : 'slider'
        return (
            <div className={classes}>
                <ul>
                    <li>技术</li>
                    <li>生活</li>
                    <li>其他</li>
                </ul>
            </div>
        )
    }
}