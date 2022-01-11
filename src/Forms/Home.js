import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

function Home({ props }) {
    // const { state } = useLocation();
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        console.log("Hell");
        navigate("/");

    }
    return (
        <div className="home">
            <button type="submit"
                className="btn btn-primary" onClick={handleLogout}>
                Logout
            </button>

            {/* <h3>{props}</h3> */}
        </div>
    )
}

export default Home;