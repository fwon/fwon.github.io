require("./style/style.less")

import 'babel-core/polyfill'
import React from 'react'
import {render} from 'react-dom'
import Section from './containers/Section'

render(
    <Section/>,
    document.getElementById('root')
)