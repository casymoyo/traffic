import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';


export default function Login({setUser, setUserData}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  console.log(setUser)
  
  const handleLogin = (e)=>{
    e.preventDefault()
    const validationErrors = {}
    if(!email){
        validationErrors.email = "Field cant be empty"
    }
    if(!password){
        validationErrors.password = "Field cant be empty"
    }

    if(Object.keys(validationErrors).length ===0){
        setErrors({})
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            const user = userCredential.user.email
            setUserData(user)
            console.log(user)
            setUser(true)
        })
        
    }else{
        setErrors(validationErrors)
    }
  }
  return (
    <div className='d-flex justify-content-center flex-column align-items-center bg-light' style={{'height': '80vh'}}>
        <h2 className='fw-bold'>Smart Lights System</h2>
        <form className='p-3' onSubmit={handleLogin} style={{'width':'500px'}}>
            <h4 className='text-center mb-3'>Login</h4>
            <div className='row mb-2 mt-2'>
                <input
                    type='email'
                    placeholder='email'
                    className='form-control'
                    onChange={(e)=>{setEmail(e.target.value)}}
                ></input>
                {errors.email && <div className='error-message mt-2 fs-sm' id="id-error" role="alert"><small className='text-danger'>* {errors.email}</small></div>}
            </div>
            <div className='row mb-2'>
                <input
                    type='password'
                    placeholder='password'
                    className='form-control'
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                {errors.password && <div className='error-message mt-2 fs-sm' id="id-error" role="alert"><small className='text-danger'>* {errors.password}</small></div>}    
            </div>
            <div className='row'>
                <button className='btn btn-dark'>Login</button>
            </div>
            <p>
                <small>Cant remember the password? 
                    <p to='mailto:admin@traficcontrol.co.zw'> Contact the admin</p>
                </small>
            </p>
        </form>
    </div>
  )
}
