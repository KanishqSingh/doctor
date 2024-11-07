import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign up')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign up' ? "sign up" : "log in"} to book appointment</p>
        {
          state === 'Sign up' ? <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} />

          </div> : ''
        }

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.name)} value={email} required />

        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.name)} value={password} required />

        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign up' ? "create account" : "Login"}</button>

        {
          state === 'Sign up'
            ? <p>Already have an account? <span onClick={() => { setState('Login') }} className='text-primary cursor-pointer'>Login Here</span></p> : <p>Create a new account? <span className='text-primary cursor-pointer' onClick={() => { setState('Sign up') }}>Click here</span></p>
        }
      </div>

    </form>

  )
}

export default Login