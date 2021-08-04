import React, { useState } from "react";
import { Link ,useHistory} from 'react-router-dom'
function Register() {

    const history = useHistory();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const call = () => {
        fetch("/auth/register", {
            method: "Post",
            headers: {
                'Content-Type': "application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            if(data.error)
                alert(data.error)

            if(data.token){
                localStorage.setItem("LoveBytez",data.token)
                localStorage.setItem("LoveBytezid",data.id)
                history.push("/")
            }

            
        })
    }

    return (
        <div>

            <h1>LoveBytez</h1>
            <form onSubmit={e => {
                e.preventDefault()
                call()
            }}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate"

                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                        <label className="active" for="first_name2">Name</label>
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
           <br/> <Link to="/login">Already Have An Account ?</Link>
        </div>
    );
}



export default Register;