import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Flex,Input,Select,Text } from '@chakra-ui/react'
import React from 'react'
import { CiCircleChevRight } from "react-icons/ci";
import { Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box backgroundColor="#eeeff1">
      <Flex justifyContent='space-between' p={7}>
        <Flex direction="column" gap={2}>
          <Text fontWeight={700} fontSize={20}>Groupon Sites</Text>
          <Select placeholder='USA' borderRadius={20} w={250}>
          <option>USA</option>
          <option>United Kingdom</option>
          <option>France</option>
          <option>Deutschland</option>
          <option>Italia</option>
          <option>Espana</option>
          <option>Polska</option>
          <option>Nederland</option>
          <option>Ireland</option>
          <option>UAE</option>
          <option>Belgie</option>
          <option>Canada</option>
          <option>Australia</option>
  </Select>
        </Flex>
        <Flex direction="column" gap={2}>
          <Text fontWeight={700} fontSize={20}>Sign up for the latest deals</Text>
          <Flex gap={2}>
          <Input placeholder='Email' size='md' />
          <CiCircleChevRight size={40} color="green" />
          </Flex>
          <Text fontSize={14} color="red">Please use the format: example@mail.com</Text>
          <Text fontFamily={14}>By subscribing, I agree to the Terms of  Use <br /> and have read the Privacy Statement.</Text>
        </Flex>
        <Flex direction="column">
         <Text fontWeight={700} fontSize={20}>Get the Groupon App</Text>
         <Flex gap={1}>
         <Image
    boxSize='100px'
    objectFit='cover'
    src='https://img.grouponcdn.com/sls/3pA72nHCtnUsjckH8KU4GvEKzzt/3p-83x82'
    alt='Dan Abramov'
  />
        <Box>
        <Flex><StarIcon color="yellow"/><StarIcon color="yellow"/><StarIcon color="yellow"/><StarIcon color="yellow"/><StarIcon color="yellow"/></Flex>
        <Text>100M+ downloads</Text>
        <Button colorScheme='green' borderRadius={20}>Get the App</Button>
        </Box>
         </Flex>
        </Flex>
        <Flex direction="column">
          <Text fontWeight={700} fontSize={20} >Follow Us</Text>
          <Flex gap={4}><FaFacebook size={25} /> <FaInstagram size={25} /> <FaXTwitter size={25} /> <FaLinkedin size={25} /></Flex>
        </Flex>
      </Flex>
      <Divider orientation='horizontal' p={5}/>
      <Flex justifyContent='space-between' p={7}>
        <Flex direction='column' gap={3}>
        <Text fontWeight={500}>Support</Text>
           <Text>Help Center</Text>
           <Text>Report Infringement</Text>
           <Text>Refund Policies</Text>
           <Text>Merchant Class Action Settlement Notice</Text>
        </Flex>
        <Flex direction='column' gap={3}>
        <Text fontWeight={500}>Sell on Groupon</Text>
           <Text>Join Groupon Marketplace</Text>
           <Text>Run a Groupon Campaign</Text>
           <Text>How does Groupon work for Merchants</Text>
           <Text>Sponsor your Campaign</Text>
           <Text>Affiliate Program</Text>
           <Text>Vendor Code of Conduct</Text>
        </Flex>
        <Flex direction='column' gap={3}>
        <Text fontWeight={500}>Company</Text>
           <Text>About Groupon</Text>
           <Text>Jobs</Text>
           <Text>Press</Text>
           <Text>Investor Relations</Text>
           <Text>Management Team</Text>
        </Flex>
        <Flex direction='column' gap={3}>
        <Text fontWeight={500}>Quick Links</Text>
        <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left' fontWeight={500}>
          Treat Yourself
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
       <Flex direction='column'  gap={2}>
       <Text>Eyelash Extensions</Text>
           <Text>Facials</Text>
           <Text>Fitness Classes</Text>
           <Text>Hair Salons</Text>
           <Text>Liposuction</Text>
           <Text>Massages</Text>
           <Text>Nail Salons</Text>
           <Text>Spas</Text>
       </Flex>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'fontWeight={500}>
          Things To Do
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Flex direction='column'  gap={2}>
       <Text>All Things To Do</Text>
           <Text>Arcade</Text>
           <Text>Auto Detailing</Text>
           <Text>Bars</Text>
           <Text>Bowling</Text>
           <Text>Escape Rooms</Text>
           <Text>Food Near Me</Text>
           <Text>Kids Activities</Text>
           <Text>Oil Changes</Text>
           <Text>Restaurants</Text>
       </Flex>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left' fontWeight={500}>
          Coupons
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
       <Flex direction='column'  gap={2}>
       <Text>Coupon Codes</Text>
           <Text>Coupon Codes By Brand</Text>
           <Text>Exclusive Offers</Text>
           <Text>Coupon Codes By Category</Text>
           <Text>Seasonal Coupon Codes</Text>
           <Text>Coupons Blog</Text>
       </Flex>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left' fontWeight={500}>
          Gifts
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
       <Flex direction='column' gap={2}>
       <Text>All Gifts Ideas</Text>
           <Text>Valentine's Day Gifts</Text>
           <Text>Mother's Day Gifts</Text>
           <Text>Father's Day Gifts</Text>
           <Text>BirthDay Gifts</Text>
           <Text>Gift Cards</Text>
       </Flex>
    </AccordionPanel>
  </AccordionItem>

</Accordion>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer