import React from "react";
import { useNavigate } from "react-router-dom";
function Intro() {
    const navigate = useNavigate();
    return (
        <div className="in">
            <div className="buttons">

                <button type='' className="btn btn-primary" onClick={() => navigate('/Login')}>Login</button>
                <span id="reg">

                    <button type='' className="btn btn-primary" onClick={() => navigate('/Register')}>Register</button>
                </span>
            </div>

        </div>

    );
}

export default Intro;