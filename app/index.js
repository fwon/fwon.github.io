require("./style/style.less")

import 'babel-core/polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import Section from './containers/Section'

const store = configureStore()

render(
    <Provider store={store}>
        <Section/>
    </Provider>,
    document.getElementById('root')
)