import React, { useState } from 'react';
import {FormControl, FormLabel} from "@chakra-ui/form-control";
import {VStack} from "@chakra-ui/layout";
import {Input} from "@chakra-ui/input";

const Signup = () => {
const [name,setname] = useState()
const [email,setemail] = useState()
const [confirmpassword,setconfirmpassword] = useState()
const [password,setpassword] = useState()
const [pic,setpic] = useState()


  return (
   <VStack spacing='5px'>
  <FormControl>
 <FormLabel>
<Input  
placeholder='Enter Name'
onChange={(e)=>setname(e.target.value)}
/>
 </FormLabel>
  </FormControl>
   </VStack>
  )
}

export default Signup;
