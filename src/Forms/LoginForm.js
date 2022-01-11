import React from 'react';
import { useState } from 'react';
import axios from 'axios';
// import Home from './Home'
// import Register from './Register';
import { useNavigate } from 'react-router-dom';
function LoginForm() {
    const [state, setState] = useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Log in");
        // Login(state);
        await axios.post('https://sutt-front-task-one.herokuapp.com/api/v1/auth/login', {
            username: state.username,
            password: state.password,
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        navigate("/Home");

    }
    // const handleRegister = (e) => {
    //     e.preventDefault();

    // }

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <center>
                <form >
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter Username"
                            value={state.username}
                            onChange={handleChange}
                            required

                        />
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

                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                    <center><h6>Don't have an Account.<a href="/Register">Register Here</a></h6></center>
                </form>
            </center>
        </div>
    )
}

export default LoginForm;
