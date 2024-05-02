import React from 'react'
import Usercontext from './Usercontext'

const Usercont = ({children}) => {

  const [val , setval]  = React.useState('');
  return<>
   <Usercontext.Provider value={{val,setval}}>
    {children}
   </Usercontext.Provider>
       
  </>
}

export default Usercont;