import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="flex justify-center items-center min-h-screen my-8">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <p className="font-medium text-xs text-center mb-3 text-secondary">Welcome Back!</p>
                <h2 className="font-semibold text-2xl text-center mx-5 text-success"> Sign in your Account</h2>
                <p className="text-xs text-center mt-2">Access to all features. No credit card required.</p>
                <form
                    // onSubmit={handleSignin}
                    className="card-body">
                    {/* <button onClick={() => { handleGoogleSignIn(googleProvider) }} className="btn w-full bg-white flex items-center"><FcGoogle />  Login with Google</button> */}
                    <div className="divider text-xs">Or continue with </div>
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your email address"
                            required
                        />
                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your password"
                            required
                        />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {/* {
                            error && <p className="text-accent text-xs">{error}</p>
                        } */}
                        <button type="submit" className="btn btn-primary mt-4">Sign in</button>
                        <p className="font-semibold text-center pt-4">Don’t Have An Account ? <Link to={'/signup'} className="text-secondary">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignIn;