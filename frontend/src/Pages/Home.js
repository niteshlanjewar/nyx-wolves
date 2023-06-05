import React from 'react';
import { Container, Box, Text, Tabs, TabPanels, TabPanel, Tab, TabList } from '@chakra-ui/react';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';


const Home = () => {
  return (
    <Container maxW='xl' centerContent>
        <Box 
        d='flex'
        justifyContent='center'
        p={3}
        bg={"white"}
        w="100%"
        m="10px 0 15 px 0"
        borderRadius="lg"
        borderWidth="1px"
        marginTop="20px"
        >
            <Text 
            fontSize='4xl'
            fontFamily="Work sans"
            color="black"
            textAlign="center"
            >GapShap</Text>
        </Box>

        <Box   bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" color="black" marginTop="10px">
           
        <Tabs variant='soft-rounded'>
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Login/>
    </TabPanel>
    <TabPanels>
     <Signup/>
    </TabPanels>
  </TabPanels>
</Tabs>
        </Box>
      
    </Container>
  )
}

export default Home