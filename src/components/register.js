import React, { useState } from "react";
import { Link ,useHistory} from 'react-router-dom'
function Register() {

    const history = useHistory();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const call = () => {
        fetch("/user/siginup", {
            method: "Post",
            headers: {
                'Content-Type': "application/json"
            },
            body:JSON.stringify({
                firstName,
                lastName,
                email,
                password
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            if(data.error)
                alert(data.error)

            if(data.token){
                localStorage.setItem("YodaYouhou",data.token)
                localStorage.setItem("YodaYouhouid",data.id)
                history.push("/")
            }

            
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>

          
            <form onSubmit={e => {
                e.preventDefault()
                call()
            }}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate"

                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                        />
                        <label className="active" for="first_name2">First Name</label>
                    </div>

                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate"

                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                        />
                        <label className="active" for="first_name2">Last Name</label>
                    </div>

                </div>


                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate"
                            onChange={e => setEmail(e.target.value)}
                            value={email}

                        />
                        <label className="active" for="email">Email</label>
                    </div>
                </div>


                <div className="row">
                    <div className="input-field col s6">
                        <input id="password" type="password" className="validate"

                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                        <label className="active" for="password">Password</label>
                    </div>
                </div>
                <button className="red darken-2 waves-light btn" type='submit'>Register</button>
            </form>
           
        </div>
    );
}



export default Register;