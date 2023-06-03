import React, { useState } from 'react';
import { account } from '../appwrite/appwriteConfig';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';



function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    //signup
    const signupUser = async (e) => {
        e.preventDefault() //we use this method because we are sendong infromation to the backend and we dont wanrto clear it on refresh
        const result = account.create(
            uuidv4(),
            user.email,
            user.name
        );
        result.then(function (response) {
            console.log(response);
            // if it is successful we want to navigate to a different page
            navigate("/profile") //success
         }, function (error) {
            console.log(error);
         });
    }
    
  return (
    <div><h1>SignUp</h1></div>
  )
}

export default SignUp