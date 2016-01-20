import React, {Component, PropTypes} from 'react'
import Slider from '../components/Slider'
import Header from '../components/Header'
import Event from '../libs/event'

export default class Section extends Component {
    constructor(props) {
        super(props)
        this.slideToright = this.slideToright.bind(this)
        this.state = {
            slideState: false
        }
    }
    slideToright() {
        this.setState({
            slideState: !this.state.slideState
        })
    }
    componentDidMount() {
        Event.on('Section:toggle', this.slideToright)
    }
    render() {
        var classes = this.state.slideState ? 'slide-right' : ''
        return (
            <div>
                <Slider/>
                <section className={classes}>
                    <Header/>
                    <div className="content">
                       
                    </div>
                </section>
            </div>
        )
    }
}

