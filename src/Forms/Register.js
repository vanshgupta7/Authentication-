import React from 'react';
import { useState } from 'react';
// import Home from './Home';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [state, setState] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    })
    const [errorMessages, setErrorMessages] = useState({});
    const navigate = useNavigate();
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const errors = {
        pass: "Password and confirm password do not match"
    };
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (state.password === state.confirmpassword) {
            // sendDetailsToServer();
            // <a href='/Home'></a>
            await axios.post('https://sutt-front-task-one.herokuapp.com/api/v1/auth/register', {
                name: state.name,
                username: state.username,
                email: state.email,
                password: state.password,
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
            navigate("/Home");



        } else {
            setErrorMessages({ name: "pass", message: errors.pass });

        }
    }
    // const sendDetailsToServer = () => {
    //     if (state.email.length && state.password.length) {
    //         props.showError(null);
    //         const payload = {
    //             "email": state.email,
    //             "password": state.password,
    //         }
    //         axios.post(API_BASE_URL + '/user/register', payload)
    //             .then(function (response) {
    //                 if (response.status === 200) {
    //                     setState(prevState => ({
    //                         ...prevState,
    //                         'successMessage': 'Registration successful. Redirecting to home page..'
    //                     }))
    //                     Home();
    //                     props.showError(null)
    //                 } else {
    //                     props.showError("Some error ocurred");
    //                 }
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     } else {
    //         props.showError('Please enter valid username and password')
    //     }

    // }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input type="text"
                        required
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                        value={state.name}
                        onChange={handleChange}

                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Username</label>
                    <input type="text"
                        required
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        value={state.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                        required
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        required
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                        required
                        className="form-control"
                        id="confirmpassword"
                        placeholder="Confirm Password"
                        value={state.confirmpassword}
                        onChange={handleChange}
                    />
                    {renderErrorMessage("pass")}
                </div>
                <center><button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Register
                </button>
                    <h6>Already have an Account <a href='/Login'>Login</a></h6></center>
            </form>
        </div>
    )
}

export default Register;