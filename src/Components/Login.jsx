import React, { useState } from 'react'
import email from '../assets/email.png'
import password from '../assets/password.png'
import person from '../assets/person.png'


function Login() {

    const [action , setAction] = useState('Signup')
    return (
        <div className='container flex flex-col m-auto mt-48 bg-slate-200 pb-8 rounded-md items-center w-[600px]'>
            <div className='header flex flex-col items-center gap-2 w-full mt-8'>
                <div className='text text-violet-900 text-5xl font-medium p-4'>{action}</div>
                <div className='underline w-14 h-1.5 bg-violet-900 rounded-lg '></div>
                

            </div>
            <div className='inputs mt-14 flex flex-col gap-6'>
                <div className='input flex flex-col items-center m-auto min-w-96 h-20 bg-slate-300 rounded-md'>
                    <img src={email} alt="" className='m-2' />
                    <input type='text' className='h-12 w-96 bg-transparent border-none outline-none text-gray-500 font-thin' placeholder='Email'/>
                </div>
                <div className='input input flex flex-col items-center m-auto min-w-96 h-20 bg-slate-300 rounded-md'>
                    <img src={password} alt="" className='m-2'/>
                    <input type='email'className='h-12 w-96 bg-transparent border-none outline-none text-gray-500 font-thin' />
                </div>
                {action == 'Login'?<div></div>:<div className='input input flex flex-col items-center m-auto min-w-96 h-20 bg-slate-300 rounded-md'>
                    <img src={person} alt="" className='m-2'/>
                    <input type='password'className='h-12 w-96 bg-transparent border-none outline-none text-gray-500 font-thin'/>
                </div>}
                {/* <div className='input input flex flex-col items-center m-auto min-w-96 h-20 bg-slate-300 rounded-md'>
                    <img src={person} alt="" className='m-2'/>
                    <input type='password'className='h-12 w-96 bg-transparent border-none outline-none text-gray-500 font-thin'/>
                </div> */}
                {action === 'Signup'?<div></div>: <div className='forgot-password pl-15 mt-7 text-gray-500 text-lg'>Lost Password? <span className='text-indigo-900 cursor-pointer'>Click Here!</span></div>}
                {/* <div className='forgot-password pl-15 mt-7 text-gray-500 text-lg'>Lost Password? <span className='text-indigo-900 cursor-pointer'>Click Here!</span></div> */}
                <div className='Submit-container flex gap-[30px] m-4 mx-auto '>
                    <div 
                    onClick={()=>{setAction("Signup")}}
                    className={`submit flex justify-center items-center w-[220px] h-[59px] text-slate-100 ${action === "Login" ? "bg-gray-500" : "bg-violet-900"} rounded-[50px] text-lg font-bold cursor-pointer`} >Signup</div>
                    <div onClick={()=>{setAction("Login")}}className = {`submit flex justify-center items-center w-[220px] h-[59px] text-slate-100 ${action === "Signup" ? "bg-gray-500" : "bg-violet-900"} rounded-[50px] text-lg font-bold cursor-pointer`}>Login</div>

                </div>

            </div>

        </div>
        
    )
}

export default Login
