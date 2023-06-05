import React, { useEffect, useState } from 'react';
import { account } from '../appwrite/appwriteConfig';
import { Link, useNavigate } from 'react-router-dom';
import Bookmark from './Bookmark';
import Dashboard from '../MainPage/Dashboard';

function Profile() {
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState();

    useEffect(() =>{
        const getData = account.get();
        getData.then(
            function(response){
                console.log(userDetails)
                setUserDetails(response)
            },
            function(error){
                console.log(error);
            }
        )
    },[])
    const handleLogout = async () => {
        try {
            await account.deleteSession("current")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
      { userDetails? (
        <div>
            <Dashboard />
            <h1>hey youre logged In</h1>
            <h2>the app stays here</h2>
            <Bookmark/>
            <div>
                <button
                onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    
      ):(
        <p>
           Please 
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