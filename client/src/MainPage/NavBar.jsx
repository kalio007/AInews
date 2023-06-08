import React from 'react';
import { account } from '../appwrite/appwriteConfig';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Flex, 
    Heading, 
    Spacer,
    Box,
    Text,
    Button,
    HStack
} from '@chakra-ui/react';


export default function NavBar() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
        await account.deleteSession("current")
        navigate("/")
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <Flex alignItems='center' p='10px'>
       <Heading>NoName Aggregator</Heading>
       <Spacer/> 
       <HStack spacing="20px">
       <Box bg="gray.200" p="10px">M</Box>
       <Text>welcome</Text>
       <Button colorScheme='blue' onClick={handleLogout}>Logout</Button>
       </HStack>
    </Flex>
  )
}
