import React, { useEffect, useState } from 'react';
import { account } from '../appwrite/appwriteConfig';
import { Link, useNavigate } from 'react-router-dom';
//import Bookmark from './Bookmark';
import NavBar from '../MainPage/NavBar';
import SideBar from '../MainPage/SideBar';
import Dashboard from '../MainPage/Dashboard';
import { 
    Flex, 
    Heading, 
    Spacer,
    Box,
    Text,
    Button,
    HStack,
    SimpleGrid,
    Container,
    Grid,
    GridItem,
} from '@chakra-ui/react';


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
    <Box minWidth="100%">
      { userDetails? (
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
            {/* <Box>
                <h1>hey youre logged In</h1>
                <Bookmark/>
                <Box>
                    <Button
                    onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Box>
            </Box> */}
            <GridItem
             as="slide"
             colSpan={{ base:6, lg:2, xl:1 }}
             bg="blue.200"
             p={{base:'20px', lg: '30px'}}
             minHeight={{ lg:'100vh'}}
            >
                <SideBar />
            </GridItem>
            <GridItem
             as="main"
             colSpan={{ base:6, lg:4, xl:5 }}
             p="40px"
            >
                <NavBar w="100%"/>
                <Dashboard />
            </GridItem>
            
        </Grid>
      ):(
        <p>
           Please 
           <Link to="/">
             LogIn
           </Link>
        </p>
      )
      }  
    </Box>
  )
}

export default Profile