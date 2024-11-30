import { signIn } from '@/auth/authSetup'
import React from 'react'

const SignInOAuth = () => {
  return (
    <div>
        {/* use this if you want to redirect after sign in */}
        {/* action={async () => {
            "use server"
            await signIn("google", {
                callbackUrl: '/my-account'
            })
        }} */}
        <form
        action={async () => {
            "use server"
            await signIn("google")
        }}
        >
            <div className="card-actions justify-center pt-5">
                <button className="btn btn-primary w-full" type="submit">
                    <img src="/google_logo.png" className="w-6 h-6"/>
                    Sign in with Google
                </button>
            </div>
        </form>
        <form
        action={async () => {
            "use server"
            await signIn("github")
        }}
        >
            <div className="card-actions justify-center pt-5">
                <button className="btn btn-primary w-full" type="submit">
                    <img src="/github.png" className="w-7 h-7"/>
                    Sign in with GitHub
                </button>
            </div>
        </form>
    </div>
  )
}

export default SignInOAuth