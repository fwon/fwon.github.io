import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Slider from '../components/Slider'
import Header from '../components/Header'
import {clickMenu} from '../actions'
import Event from '../libs/event'

class Section extends Component {
    constructor(props) {
        super(props)
        this.slideToright = this.slideToright.bind(this)
    }
    slideToright(status) {
        const {dispatch} = this.props
        dispatch(clickMenu(status))
    }
    componentDidMount() {
        // Event.on('Section:toggle', this.slideToright)
    }
    render() {
        const {slideState} = this.props //通过connect将state注入到props
        return (
            <div>
                <Slider status={slideState}/>
                <section className={slideState ? 'slideOut' : ''}>
                    <Header onClickMenu={this.slideToright}/>
                    <div className="content">
                       power by redux
                    </div>
                </section>
            </div>
        )
    }
}

Section.propTypes = {
    slideState: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    const {slideState} = state
    return {
        slideState
    }
}

export default connect(mapStateToProps)(Section)