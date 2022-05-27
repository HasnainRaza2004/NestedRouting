import React from 'react'
// import { useLocation} from "react-router-dom";

const Profile = () => {
  // const location = useLocation("")
  return (
    <div style={{textAlign:"center",marginTop:100}}>
    <h1>Your Profile</h1>
      <span>
        <img src="data:image/jpeg;base64,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" alt="" />
      </span>
      <div style={{display:"flex",flexDirection:"column"}}>
      <span style={{}}><h3>User Name : Your Name </h3></span>
       <span style={{}}><h3>Email : email</h3></span>
       <span style={{}}><h3>Phone Number : Number </h3></span>
       <span style={{}}><h3>Gender : Gender</h3></span>
      </div>
    </div>
  )
}

export default Profile

// {location.state.name}
//  {location.state.email}
// {location.state.gender}
//  {location.state.phone}