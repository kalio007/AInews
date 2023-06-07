import React from 'react';
//import NavBar from './NavBar';
import { 
    Grid, 
    GridItem, 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel, 
    SimpleGrid,
    Box,
    Card,
    Heading,
    CardFooter,
    Button,
    Stack,
    Image,
    CardBody,
    Text
} from '@chakra-ui/react';
import './Dash.css';

function Dashboard() {
  return (
    
    // <Grid
    //     templateAreas={`"header header"
    //                     "nav main"
    //                     "nav footer"`}
    //     gridTemplateRows={'50px 1fr 30px'}
    //     gridTemplateColumns={'150px 1fr'}
    //     h='100vh'
    //     w=''
    //     gap='1'
    //     color='blackAlpha.700'
    //     fontWeight='bold'
    // >
    // <GridItem pl='2' bg='orange.300' area={'header'}>
    //     <h2>no-name Aggregator</h2>
    // </GridItem>
    // <GridItem pl='2' bg='pink.300' area={'nav'}>
    //   <h1>nav</h1>
    // </GridItem>
    // <GridItem pl='2' bg='green.300' area={'main'}>
    // <Tabs size='md' variant='enclosed'>
    //     <TabList>
    //         <Tab>Latest News</Tab>
    //         <Tab>Trending </Tab>
    //     </TabList>
    //     <TabPanels>
    //         <TabPanel>
    //         <p>one!</p>
    //         </TabPanel>
    //         <TabPanel>
    //         <p>two!</p>
    //         </TabPanel>
    //     </TabPanels>
    // </Tabs>
    // </GridItem>
    // <GridItem pl='2' bg='blue.300' area={'footer'}>
    //     Footer
    // </GridItem>
    // </Grid>

    <SimpleGrid columns={2} spacing="10" p="10px">
      {/* ill be mapping the news from the datbase here */}
        <Card>
        {/* <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  /> */}

  <Stack >
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

          <Text py='2'>
            Caffè latte is a coffee beverage of Italian origin made with espresso
            and steamed milk.
          </Text>
          </CardBody>

          <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            Read More...
          </Button>
          <Button flex='1' variant='ghost'>
            Like
          </Button>
          <Button flex='1' variant='ghost'>
            Comment
          </Button>
          <Button flex='1' variant='ghost'>
            Share
          </Button>
          </CardFooter>
        </Stack>
        </Card>
        <Box bg="white" h="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" border="1px solid"></Box>
    </SimpleGrid>
  )
}

export default Dashboard