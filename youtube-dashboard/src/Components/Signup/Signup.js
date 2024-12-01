import React, { useState } from "react";
import '../Signup/Signup.css'
import { useNavigate } from "react-router-dom";



const Signup = () => {
    const Navigate = useNavigate()

    const [Signup_credentials, Update_Signup_credentials] = useState({})
    const HandleSignin = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        Update_Signup_credentials((previousstate) => ({
            ...previousstate, [name]: value
        }))



    }
    const Signinbutton = () => {
        const { Username, Password } = Signup_credentials;

        if (Username === "Rohith" && Password === "12345") {
            Navigate('/Main_Dashboard')

        }

    }



    return (
        <>
            <div className="container-fluid custom-signup-container bg-dark">
                <div className="card bg-dark text-light border border-light-subtle">
                    <div className="card-titile text-center">
                        <h4>SignIn</h4>

                    </div>
                    <div className="card-body">
                        <div className="container">
                            <label >UserName:</label><br />
                            <input type="text" placeholder="Enter Your UserName" name="Username" onChange={HandleSignin} />
                        </div>
                        <div className="container">
                            <label>Password :</label><br />
                            <input type="password" placeholder="Enter Your Password" name="Password" onChange={HandleSignin} />
                        </div>
                        <div className="container d-flex justify-content-center mt-3"><button onClick={Signinbutton}>SignIn</button></div>



                    </div>
                </div>
            </div>


        </>
    );
};
export default Signup;
