import React, { useState } from "react";
import {Link,useHistory} from 'react-router-dom'
function Forgot() {

    const history = useHistory();
    const [email, setEmail] = useState('');


    const callServer = () => {
         fetch("https://lovebytez.herokuapp.com/auth/forgot-password", {
             method: "Post",
             headers: {
                 'Content-Type': "application/json"
             },
             body:JSON.stringify({
                 email,
                 
             })
         }).then(res => res.json()).then(data => {
             console.log(data)
             if(data.error){
                 alert(data.error)
             }else{
                 alert(data)
                 history.push("/login")
             }
 
             
         })
     } 


    return (
        <div>

            <h1><Link to="/">LoveBytez</Link></h1>
            <form onSubmit={e => {
                e.preventDefault()
                 callServer()
            }}>



                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate"
                            onChange={e => setEmail(e.target.value)}
                            value={email}

                        />
                        <label className="active" for="email">Enter Your Email</label>
                    </div>
                </div>


                <button className="red darken-2 waves-light btn" type='submit'>submit</button>
            </form><br/>
            <Link to="/login">Login</Link><br/>
            <Link to="/register">Register</Link>


        </div>
    );
}

export default Forgot;