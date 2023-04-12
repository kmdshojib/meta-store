import { getFetchUsers, getUserGoogleSignIn, getUsersSuccess } from '@/app/feature/auth/authSlice'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { FcGoogle } from "react-icons/fc"
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const user = useSelector(state => state.auth)
	const handleSubmit = (e) => {
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value
		dispatch(getFetchUsers({ email, password }))
		console.log({ email, password })
	}

	// if (user?.user?.uid) {
	// 	router.push("/")
	// }
	return (
		<div>
			<Head>
				<title>Login</title>
			</Head>
			<div className='flex justify-center mt-10 pt-10'>
				<div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-lg">
					<h1 className="text-2xl font-bold text-center">Login</h1>

					<form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
						<div className="space-y-1 text-sm">
							<label htmlFor="username" className="block dark:text-gray-400">Email</label>
							<input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md input input-bordered" />
						</div>
						<div className="space-y-1 text-sm">
							<label htmlFor="password" className="block dark:text-gray-400">Password</label>
							<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md input input-bordered" />
							<div className="flex justify-end text-xs dark:text-gray-400">
								<a rel="noopener noreferrer" href="#">Forgot Password?</a>
							</div>
						</div>
						<button className=" block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 btn btn-primary">Sign in</button>
					</form>
					<div className="flex items-center pt-4 space-x-1">
						<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
						<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
						<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
					</div>
					<div className="flex justify-center space-x-4">
						<button aria-label="Log in with Google" className="p-3 rounded-sm">
							<FcGoogle onClick={() => dispatch(getUserGoogleSignIn())} style={{ width: "28px", height: "28px" }} />
						</button>

					</div>
					<p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
						<Link rel="noopener noreferrer" href="/register" className="underline dark:text-gray-100">Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Login