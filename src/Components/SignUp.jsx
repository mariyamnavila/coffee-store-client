import { use } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {

    const { createUser } = use(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...restFormData } = Object.fromEntries(formData);

        // const email = formData.get('email');
        // const password = formData.get('password');

        createUser(email, password)
            .then((result) => {
                console.log(result);
                const userProfile = {
                    email,
                    ...restFormData,
                    creationTime : result.user?.metadata?.creationTime,
                    lastSignInTime : result.user?.metadata?.lastSignInTime
                }
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log('after adding', data);
                        if (data.insertedId) {
                            Swal.fire({
                                // position: "top-end",
                                icon: "success",
                                title: "Your Account is created",
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
                <p className="font-medium text-xs text-center mb-3 text-secondary">Sign up </p>
                <h2 className="font-semibold text-3xl text-center mx-5 text-success">Start for free Today</h2>
                <p className="text-xs text-center mt-2">Access to all features. No credit card required.</p>
                <form
                    onSubmit={handleSignUp}
                    className="card-body">
                    <fieldset className="fieldset">
                        {/* <button className="btn w-full bg-white flex items-center"><FcGoogle />  Register with Google</button>
                        <div className="divider text-xs">Or continue with </div> */}
                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            name='name'
                            type="text"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your name"
                            required
                        />
                        {/* {
                            nameError && <p className='text-xs text-accent'>{nameError}</p>
                        } */}
                        {/* photo url */}
                        <label className="label">Address</label>
                        <input
                            name='address'
                            type="text"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your Address"
                            required
                        />
                        <label className="label">Phone</label>
                        <input
                            name='phone'
                            type="text"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your Phone Number"
                            required
                        />
                        <label className="label">Photo URL</label>
                        <input
                            name='photo'
                            type="text"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your photo URL"
                            required
                        />
                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your email address"
                            required
                        />
                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your password"
                            required
                        />
                        {/* {
                            error && <p className="text-accent text-xs">{error}</p>
                        } */}
                        <button className="btn btn-primary mt-4">Sign Up</button>
                        <p className="font-semibold text-center pt-4">Already Have An Account ? <Link to={'/signIn'} className="text-secondary">Sign in</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignUp;