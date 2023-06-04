import React, { useState } from 'react';
import { account } from '../appwrite/appwriteConfig';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const loginUser = async (e) => {
        e.preventDefault()
        try {
            await account.createEmailSession(
                user.email,
                user.password
              );
             navigate("/profile") 
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <form action = '#' method='POST'>
            <div>
                <label
                htmlFor='name'
                className=''
                >
                    Email
                </label>
                <div>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      onChange={(e) => { 
                        setUser({
                        ...user,
                        email: e.target.value
                    })}}
                    />
                </div>
            </div>
            <div>
                <label
                htmlFor='password'
                className=''
                >
                    Password
                </label>
                <div>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      onChange={(e) => { 
                        setUser({
                        ...user,
                        password: e.target.value
                    })}}
                    />
                </div>
            </div>
            <div>
                <a
                href='/signup'
                >
                    Don't have an account, Sign Up!
                </a>
            </div>
            <button
                type='submit'
                onClick={loginUser}
            >
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default Login