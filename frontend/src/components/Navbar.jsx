import React from 'react';
import { Box, Button, Card, CardBody, Center, Checkbox, Divider, Flex, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuList, Stack,Tab,TabList,TabPanel,TabPanels,Tabs,Text } from '@chakra-ui/react'
import { ChevronDownIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons';
import { IoIosSearch } from "react-icons/io";
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { TbCurrentLocation } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { CiGift } from "react-icons/ci";
import { PiFlowerLotusThin } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { RiHomeOfficeLine } from "react-icons/ri";
import { GiKnifeFork } from "react-icons/gi";
import { SlBag } from "react-icons/sl";
import { IoBedOutline } from "react-icons/io5";
import { RiCouponLine } from "react-icons/ri";
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';


const Navbar = () => {
   const navigate = useNavigate();
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");

   const handleSubmit = async()=>{
      const payload ={
          name,
          email,
          password
      }
      try {
          await fetch("https://groupon-backend-2.onrender.com/user/register",{
              method: "POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body: JSON.stringify(payload)
          });
          alert("User registered successfully");
      } catch (error)
      {
          alert(`An error occurred ${error}`)
      }
  }


  const handleLogin = async()=>{
   const payload = {
       email,
       password
   }
   try {
      const response = await fetch("https://groupon-backend-2.onrender.com/user/login",{
           method: "POST",
           headers:{
               "Content-Type":"application/json"
           },
           body: JSON.stringify(payload)
       });
       const data = await response.json();
       if(data.token){
           localStorage.setItem("token",data.token);
           alert(data.message);
       }
   } catch (error)
   {
       alert(`An error occurred ${error}`)
   }
}
   return (
      <div>
         <Flex gap={20}  justifyContent='space-around' p={3} >
           <Link to='/'> <img  style={{ width: "120px",height:"25px",paddingTop:"5px" }} src="https://freelogopng.com/images/all_img/1659808264groupon-logo-png.png" alt="logo" /></Link>

            <InputGroup w={530}>
               <InputLeftElement >
               <IoIosSearch size={25} />
               </InputLeftElement>
               <Input placeholder='Search for deals' borderRadius={30}  h='3rem'/>
               <InputRightElement width='12.5rem' >
                  <Menu>
                     {({ isOpen }) => (
                        <>
                           <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />} borderRadius={20} m={2}>
                              {isOpen ? 'Chicago,IL' : 'Chicago,IL'}
                           </MenuButton>
                           <MenuList>
                           <Card w={500}>
                           <CardBody >
                           <InputGroup>
                 <InputLeftElement pointerEvents='none'>
                 <IoLocationSharp />
                 </InputLeftElement>
                 <Input type='tel' placeholder='Zip Code, Neighborhood,City' />
                 </InputGroup>
                 <Flex p={5} gap={5}>
                 <TbCurrentLocation size={20} color='blue'/>
                 <Text color='blue'>Set Current Location</Text>
                 </Flex>
                 <Divider />
                 <Text p={10}></Text>
                           </CardBody>
                           </Card>
                           </MenuList>
                        </>
                     )}
                  </Menu>
                  <IoSearchCircleOutline size={40} color='green' />
               </InputRightElement>
            </InputGroup>
            <Flex gap={10} justifyContent='space-around' >
          <Link to='/wishlist'>  <FaRegHeart size={30}/></Link>
            <IoCartOutline size={30} />
            <IoMdNotificationsOutline size={30} />

            <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    borderRadius='25px'
    borderWidth='1px'
    _focus={{ boxShadow: 'outline' }}
  >
   <Flex  justifyContent="center">
   <IoPersonOutline size={25} />
    <Text fontWeight={500}>Sign In</Text> <ChevronDownIcon  />
   </Flex>

  </MenuButton>
  <MenuList>
  <Tabs >
  <TabList mb='1em'>
    <Tab>I have an account</Tab>
    <Tab>I'm a new customer</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Flex direction="column" p={5} gap={4}>
         <Text textAlign="center" fontWeight={300}>Or sign in with email</Text>
         <Divider orientation='horizontal' />
         <Box> <Input placeholder='Email' size='md' value={email} onChange={(e)=>setEmail(e.target.value)} /></Box>
         <Box>  <Input placeholder='Password' size='md' value={password} onChange={(e)=>setPassword(e.target.value)} /></Box>
         <Flex justifyContent="space-between">
            <Box ><Checkbox  defaultChecked> <Text fontSize={12}>Remember me</Text></Checkbox></Box>
            <Box><Text fontSize={12}>Forgot Password?</Text></Box>
            </Flex>
          <Button bg='#008b22' size='md' onClick={handleLogin}>
          Sign In
          </Button>
     </Flex>
    </TabPanel>
    <TabPanel>
    <Flex direction="column" p={5}  gap={4}>
         <Text textAlign="center" fontWeight={300}>Or sign up with email</Text>
         <Divider orientation='horizontal' />
         <Box> <Input placeholder='Name' size='md' value={name} onChange={(e)=>setName(e.target.value)} /></Box>
         <Box> <Input placeholder='Email' size='md' value={email} onChange={(e)=>setEmail(e.target.value)} /></Box>
         <Box>  <Input placeholder='Password' size='md' value={password} onChange={(e)=>setPassword(e.target.value)} /></Box>
         <Flex justifyContent="space-between" direction="column" gap={2}>
            <Box><Checkbox defaultChecked> <Text fontSize={12}>Yes, I want  to save money by receiving <br /> personalized Groupon emails with <br /> awesome deals</Text></Checkbox></Box>
            <Box><Text fontSize={13}>By creating an account, you agree <br /> to our Terms  of Service</Text></Box>
            </Flex>
          <Button bg='#008b22' size='md' onClick={handleSubmit}>
          Sign Up
          </Button>
     </Flex>
    </TabPanel>
  </TabPanels>
</Tabs>
  </MenuList>
</Menu>
            </Flex>
         </Flex>

        <Flex boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" justifyContent="space-between" p={5}>
         <Link to='/nearby'><Flex _hover={{color:"green",textDecoration:"2px solid green"}} gap={1}><IoLocationOutline size={20}/><Text  >Nearby</Text></Flex></Link>
         <Link to='/gift'><Flex _hover={{color:"green"}} gap={1}><CiGift size={20}/><Text>Gifts</Text></Flex></Link>
         <Link to='/Beauty-and-Spas'><Flex _hover={{color:"green"}} gap={1}><PiFlowerLotusThin size={20}/><Text>Beauty & Spas</Text></Flex></Link>
         <Link to='/things'><Flex _hover={{color:"green"}} gap={1}><TbTargetArrow size={20}/><Text>Things To Do</Text></Flex></Link>
         <Link to='/autohome'><Flex _hover={{color:"green"}} gap={1}><RiHomeOfficeLine size={20}/><Text>Auto & Home Improvement</Text></Flex></Link>
         <Link to='/food'><Flex _hover={{color:"green"}} gap={1}><GiKnifeFork size={20}/><Text>Food & Drink</Text></Flex></Link>
         <Link to='/goods'><Flex _hover={{color:"green"}} gap={1}><SlBag size={20}/><Text>Goods</Text></Flex></Link>
         <Link to='/travel'><Flex _hover={{color:"green"}} gap={1}><IoBedOutline size={20}/><Text>Travel</Text></Flex></Link>
         <Link to='/coupons'><Flex _hover={{color:"green"}} gap={1}><RiCouponLine size={20}/><Text>Coupons</Text></Flex></Link>
          </Flex>
         
      </div>
   )
}

export default Navbar