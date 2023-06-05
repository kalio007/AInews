import React, { useState } from 'react';
import { account } from '../appwrite/appwriteConfig';
import { useNavigate } from 'react-router-dom';
import { 
    Button,
    Card, CardHeader, CardBody, CardFooter,
    Stack,
    Heading,
    Text,
    ButtonGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,  
    } from '@chakra-ui/react';
import {
    Input,
    InputGroup,
    InputAddon,
    InputLeftAddon,
    InputRightAddon,
    InputLeftElement,
    InputRightElement,
    } from "@chakra-ui/input"
      

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const loginUser = async (e) => {
        e.preventDefault()
        try {
            await account.createEmailSession(user.email, user.password);
            navigate('/profile') 
        } catch (error) {
            console.log(error);
        }

    }
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    
    const [input, setInput] = useState('')
    
    const handleInputChange = (e) => setInput(e.target.value)
    
    const isError = input === ''

  return (
    <div>
        <form method='POST'>
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
                    Dont have an account, Sign Up!
                </a>
            </div>
            <button
                type='submit'
                onClick={loginUser}
            >
                Sign In
            </button>
        </form>
        <Card maxW='sm'>
            <CardBody>
                
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <FormControl isInvalid={isError}>
                <FormLabel>Email</FormLabel>
                <Input type='email' value={input} onChange={handleInputChange} />
                {!isError ? (
                    <FormHelperText>
                    Enter the email youd like to receive the newsletter on.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
                </FormControl>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Stack>
            </CardBody>
            
            <CardFooter>
                
                <Button variant='solid' colorScheme='blue'>
                    Sign In
                </Button>
                
            </CardFooter>
        </Card>
        
    </div>
  )
}

export default Login