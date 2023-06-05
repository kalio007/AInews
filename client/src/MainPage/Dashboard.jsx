import React from 'react';
import { Grid, GridItem, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import './Dash.css';

function Dashboard() {
  return (
    <Grid
        templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'1fr 1fr'}
        h='100vh'
        w=''
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
    >
    <GridItem pl='2' bg='orange.300' area={'header'}>
        <h2>no-name Aggregator</h2>
    </GridItem>
    <GridItem pl='2' bg='pink.300' area={'nav'}>
      <h1>nav</h1>
    </GridItem>
    <GridItem pl='2' bg='green.300' area={'main'}>
    <Tabs size='md' variant='enclosed'>
        <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
            <p>one!</p>
            </TabPanel>
            <TabPanel>
            <p>two!</p>
            </TabPanel>
        </TabPanels>
    </Tabs>
    </GridItem>
    <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
    </GridItem>
    </Grid>
  )
}

export default Dashboard