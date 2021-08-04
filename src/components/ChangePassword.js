import React, { useState } from "react";
import { Link,useParams,useHistory } from 'react-router-dom'
function ChangePassword() {

    const history = useHistory();
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const {id,token} = useParams()

    // console.log(id,token)

    const callServer = () => {
        fetch(`/auth/change-password/${id}/${token}`, {
            method: "Post",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                password1,
                password
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data.error){
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
                if (password !== password1) {
                    alert("Password Not Same")
                } else
                    callServer()
            }}>



                <div className="row">
                    <div className="input-field col s6">
                        <input id="password" type="password" className="validate"
                            onChange={e => setPassword(e.target.value)}
                            value={password}

                        />
                        <label className="active" for="email">Enter Password</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="password" type="password" className="validate"
                            onChange={e => setPassword1(e.target.value)}
                            value={password1}

                        />
                        <label className="active" for="password">Confirm Password</label>
                    </div>
                </div>


                <button className="red darken-2 waves-light btn" type='submit'>submit</button>
            </form>


        </div>
    );
}

export default ChangePassword;