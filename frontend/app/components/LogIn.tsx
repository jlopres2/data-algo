import React from 'react'
import SignInOAuth from './SignInOAuth';

const LogIn = () => {
  return (
    <>
    <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
            <h2 className="card-title justify-center">Log In</h2>
            <SignInOAuth />
        </div>
    </div>
    </>
  )
}

export default LogIn