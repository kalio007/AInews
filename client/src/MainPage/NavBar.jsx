import React from 'react';
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
  return (
    <Flex alignItems='center' p='10px'>
       <Heading>NoName Aggregator</Heading>
       <Spacer/> 
       <HStack spacing="20px">
       <Box bg="gray.200" p="10px">M</Box>
       <Text>welcome</Text>
       <Button colorScheme='blue'>Logout</Button>
       </HStack>
    </Flex>
  )
}
