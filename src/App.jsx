import React from 'react'
import MainPage from './component/MainPage'
import AppRoute from './route/AppRoute'
import './App.css'

const App = () => {
  return (
    <div style={{
      width: '100%',
       display: 'flex',
      // flexDirection: 'column',
      // backgroundColor: 'grey'
    }}>
      <AppRoute />
    </div>
  )
}

export default App