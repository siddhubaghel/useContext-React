import React from 'react'
import Profile from './component/Profile'
import Singup from './component/Singup'
import Usercont from './context/Usercon'
const App = () => {
  return <>

      <Usercont> 
        
      <Singup />
      <Profile />
      </Usercont>

  </>
}

export default App