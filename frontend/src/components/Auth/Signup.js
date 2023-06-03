import React, { useState } from 'react';
import {FormControl, FormLabel} from "@chakra-ui/form-control";
import {VStack} from "@chakra-ui/layout";
import {Input, InputGroup, InputRightElement} from "@chakra-ui/input";
import { Button, Show } from '@chakra-ui/react';

const Signup = () => {
const [Show, setShow] = useState(false);
const [name,setName] = useState();
const [email,setEmail] = useState();
const [confirmpassword,setConfirmPassword] = useState();
const [password,setPassword] = useState();
const [pic,setpic] = useState();
const handleClick = ()=> setShow(!Show)
const postDetails = (pics)=>{
const submitHandler = () => {
    
}
}


  return (
   <VStack spacing='5px' >
  <FormControl id='first-name' isRequired>
 <FormLabel>Name</FormLabel>
<Input  
type={Show ? "text":"password"}
placeholder='Enter Name'
onChange={(e)=>setName(e.target.value)}
/>
 
  </FormControl>

  <FormControl id='email' isRequired>
 <FormLabel>Email</FormLabel>
<Input  
placeholder='Enter Email'
onChange={(e)=>setEmail(e.target.value)}
/>
 
  </FormControl>

  <FormControl id='password' isRequired>
 <FormLabel>Password</FormLabel>

 <InputGroup>
<Input  
type={"password"}
placeholder='Enter Password'
onChange={(e)=>setPassword(e.target.value)}
/>


<InputRightElement width="4.5rem">
    <Button h="1.75rem" size="sm" onClick={handleClick}>
        {Show ? "Hide": "Show"}

    </Button>
</InputRightElement>
</InputGroup>
  </FormControl>

  <FormControl id='password' isRequired>
 <FormLabel>Confirm Password</FormLabel>
 <InputGroup size="md">
<Input  
type={Show ? "text":"password"}
placeholder='Confirm Password'
onChange={(e)=>setConfirmPassword(e.target.value)}
/>
<InputRightElement width="4.5rem">
    <Button h="1.75rem" size="sm" onClick={handleClick}>
        {Show ? "Hide": "Show"}

    </Button>
</InputRightElement>
</InputGroup>
  </FormControl>

  <FormControl id='pic'>
 <FormLabel>Upload Pic</FormLabel>

<Input  
type="file"
p={1.5}
accept='image/*'
onChange={(e)=>postDetails(e.target.files[0])}
/>
  </FormControl>

  <Button 
  colorScheme='blue'
  width="100%"
  style={{marginTop:15}}
  onClick={submitHandler}
  >
Sign Up
  </Button>
   </VStack>
  );
};

export default Signup;
