import React, { use } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {

    const { signInUser } = use(AuthContext);

    const handleSignin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData);

        signInUser(email, password)
            .then((result) => {
                console.log(result);
                const signInInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                fetch('http://localhost:3000/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(signInInfo)
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log('after Updating', data);
                        if (data.insertedId) {
                            Swal.fire({
                                // position: "top-end",
                                icon: "success",
                                title: "Your Account is successfully Signed In",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .catch(error => {
                console.log('ERRORRR', error);
            })
    }


    return (
        <div className="flex justify-center items-center min-h-screen my-8">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <p className="font-medium text-xs text-center mb-3 text-secondary">Welcome Back!</p>
                <h2 className="font-semibold text-2xl text-center mx-5 text-success"> Sign in your Account</h2>
                <p className="text-xs text-center mt-2">Access to all features. No credit card required.</p>
                <form
                    onSubmit={handleSignin}
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
                        <p className="font-semibold text-center pt-4">Don’t Have An Account ? <Link to={'/signup'} className="text-secondary">Sign Up</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignIn;