import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Routing from '@/layouts/Routing'
import '@/styles/index.scss'
import { UserProvider } from '@/contexts/UserContext'

axios.defaults.withCredentials = true

const render = () => {
  ReactDOM.render((
    <UserProvider>
      <AppContainer>
        <Routing />
      </AppContainer>
    </UserProvider>
  ), document.getElementById('root'))
}

render()

if (module.hot) {
  module.hot.accept('@/layouts/App', () => {
    render()
  })
}
