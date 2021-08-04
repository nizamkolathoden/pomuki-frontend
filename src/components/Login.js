import React,{useState} from "react";
import {useHistory,Link} from 'react-router-dom'
function Login() {

    const history = useHistory();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    

    const call = () => {
        fetch("/auth/login", {
            method: "Post",
            headers: {
                'Content-Type': "application/json"
            },
            body:JSON.stringify({
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
                <button className="red darken-2 waves-light btn" type='submit'>Login</button>
            </form>
           <br/> <Link to="/register">New User</Link>
           <br/> <Link to='/forgot-password'>Forgot Password</Link>

        </div>
  );
}

export default Login;