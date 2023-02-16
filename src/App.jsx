import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import LoggedApp from './components/LoggedApp/LoggedApp'
import LoginForm from './components/LoginFrom/LoginForm'

const App = () => {
  const data = useSelector(state=>state.loginData);
  console.log(data)
  return (
    <div className='App'>
      {
        data.showLogged?
          <LoggedApp/>
        :
        <LoginForm  />
      }
    </div>
  )
}

export default App