import React from 'react'
import {render} from 'react-dom'
import Article from './components/Article'
import  {articles} from './fixtures'

render (<Article article={articles[0]}/>, document.getElementById('root') )