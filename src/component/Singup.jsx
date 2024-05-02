import React from 'react'
import { useState , useContext } from 'react'
import Usercontext from '../context/Usercontext';

const Singup = () => {
   
  const [name,changename] = useState('');
  const [pass,changepass] = useState('');

  const {setval} = useContext(Usercontext)

   const sumbit = (e)=>{
        e.preventDefault() 
        setval({name,pass}) 
   }     
  return<>
  <div className='text-center'> 
     <h2 className=''>Login </h2>
     <input type="text"  value={name}
     placeholder='username' onChange={(e)=>changename (e.target.value)}/>
     {" "}
     <input type="text" value={pass}  onChange={(e)=>changepass(e.target.value)}
     placeholder='password'/>
     <button onClick={sumbit} className='rounded '>sumbit</button>
</div>
  </>
}

export default Singup