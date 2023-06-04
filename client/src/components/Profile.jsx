import React, { useEffect, useState } from 'react';
import { account } from '../appwrite/appwriteConfig';
import { Link, useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState();
    useEffect(() =>{
        const getData = account.get();
        getData.then(
            function(response){
                setUserDetails(response)
            },
            function(error){
                console.log(error);
            }
        )
    },[])
    const handleLogout = async => {
        try {
            await account.deleteSessions()
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
      {userDetails ?
      (
      <>
        <div>
            <h1>hey you're logged In {userDetails.name}</h1>
            <h2>the app stays here</h2>
            <div>
                <button
                onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
      </>)
      :
      (
        <p>
           please login in 
           <Link to="/">
           LogIn
           </Link>
        </p>
      )
      }  
    </>
  )
}

export default Profile