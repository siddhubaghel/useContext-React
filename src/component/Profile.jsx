import React from 'react'
import Usercontext from '../context/Usercontext';
    

function Profile() {
  const {val} = React.useContext(Usercontext)
 if(!val) return <div className='text-center fs-6 text-danger'>here is your username & password :</div>
  return <>
  <div className='text-center fs-2'>
    Your username is : {val.name } <br />  your password is: {val.pass}
  </div>
  </>
}
 
export default Profile