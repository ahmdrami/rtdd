import React from 'react'
import './App.css'
import CheckBox from './components/Checkbox/CheckBox'
import { Login } from './components/Login/Login'

function App() {
  return (
    <>
      <h1>App</h1>
      <CheckBox>Hidden message</CheckBox>
      <Login />
    </>
  )
}

export default App
