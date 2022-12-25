 import React,{useEffect,useState} from "react";
import {useHistory} from 'react-router-dom'

function Root() {
    
    const history = useHistory() 
    
    const [userData,setUserData] = useState('')




    useEffect(() => {
        const user = localStorage.getItem("YodaYouhou")
        if (!user) {
              // console.log(state);
              history.push('/register')
        }else{
        // console.log("local",user)
        fetch("/user/userprofile",{
            method:"Get",
            headers:{
                "Authorization":"Bearer" +' '+ user
            }
        }).then(res=>res.json()).then(data=>{
            // console.log(data)
            setUserData(data)
        }).catch(err=>{
          console.log(err);
        })
      }

  }, [])


  return (
    <div>


 <div className="row">
    <div className="input-field col s6">
     <h4 >{`Hola ${userData.firstName} ${userData.lastName}`}</h4>   
    
      
      
     </div>
  </div>

    </div>
  );
}

export default Root;