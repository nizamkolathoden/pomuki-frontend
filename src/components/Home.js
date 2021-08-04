 import React,{useEffect,useState} from "react";
import {useHistory} from 'react-router-dom'

function Root() {
    
    const history = useHistory() 
    
    const [userData,setUserData] = useState('')

  const [foolsData,setFoolsData] = useState([])


    useEffect(() => {
        const user = localStorage.getItem("LoveBytez")
        if (!user) {
              // console.log(state);
              history.push('/login')
        }
        console.log(user)
        fetch("/user",{
            method:"Get",
            headers:{
                "Authorization":"Bearer" +' '+ user
            }
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            //  setId(data.user._id)

            setUserData(data.user)
            setFoolsData(data.target)

            

        })

  }, [])


  return (
    <div>

 <h3>LoveBytez ❤️</h3>

 <div className="row">
    <div className="input-field col s6">
     <h4 >{`Hola ${userData.name} Your LoveBytez Link`}</h4>   
      <textarea 
       >{`http://localhost:3000/lovecalculator/${localStorage.getItem('LoveBytezid')}`}</textarea>

      <button onClick={() => {navigator.clipboard.writeText(`${userData.name} Sent You Special Love Calculator 😍 Check Love Between You and Your Lover =>http://localhost:3000/lovecalculator/${localStorage.getItem('LoveBytezid')}`)}}className="purple darken-1 waves-light btn">copy</button><br/>

      
      <br/>
      <p>Copy the link by clicking the copy button OR Manually Then Share to Your Friends  🤯</p>
     </div>
  </div>


  <table className="striped">
        <thead>
          <tr>
              <th>SI No</th>
              <th>Friend Name</th>
              <th>Crush Name</th>
          </tr>
        </thead>

        <tbody>
         
            
          {
            foolsData.map((data,i)=>{
              console.log(data)
              return(
                <tr key={data._id}>
                  <td>{i+1}</td>

                  <td>{data.targetName}</td>
                  <td>{data.targetCrush}</td>
                  </tr>
              )
            })
          }

          
        </tbody>
      </table>

    </div>
  );
}

export default Root;