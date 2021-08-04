import React, { useState } from "react";

import { useParams ,useHistory} from 'react-router-dom'

function Love() {
  const history = useHistory()

  const { id } = useParams();

  const [targetName, setTargetName] = useState("")
  const [targetCrush, setTargetCrush] = useState("")



  const Prank = () => {
    fetch(`/target/${id}`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        targetName,
        targetCrush
      })
    }).then(res => res.json()).then(data => {
      console.log(data)


      if(data.error){
        alert(data.error)
      }else{
         alert(data)
          history.push("/fool")
      }

      
    })
  }

  return (
    <div>

      <img src="https://lovecalczone.com/img/heartlogo.png" alt="error"/>

      <form onSubmit={e => {
        e.preventDefault()
        Prank()
      }}>
        <div className="row">
          <div className="input-field col s6">
            <input id="text" type="text" className="validate"

              onChange={e => setTargetName(e.target.value)}

              value={targetName}
            />
            <label className="active" for="name">Enter Your Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input id="text" type="text" className="validate"

              onChange={e => setTargetCrush(e.target.value)}

              value={targetCrush}
            />
            <label className="active" for="name">Enter Your Crush/Gf Name</label>
          </div>
        </div>
        <button className="red darken-2 waves-light btn" type='submit'>Calculate</button>
      </form>
    </div>
  );
}

export default Love;