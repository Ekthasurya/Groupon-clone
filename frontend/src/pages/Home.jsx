import { ChevronDownIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, CardBody, Center, Divider, Flex,Input,InputGroup,InputLeftElement,Menu,MenuButton,MenuList,Text } from '@chakra-ui/react'
import React from 'react'
import { BiChevronDown, BiFilter, BiSlider } from 'react-icons/bi'
import { CiMap } from 'react-icons/ci'
import { FaBorderAll, FaGlassCheers, FaShopify } from 'react-icons/fa'
import { IoLocationSharp, IoRestaurantSharp } from 'react-icons/io5'
import { MdOutlineLocalBar, MdOutlineLocalCafe } from 'react-icons/md'
import { TbCurrentLocation } from 'react-icons/tb'
import NearData from '../components/NearData'
import FoodData from '../components/FoodData'

const Home = () => {
  return (
   <Box>
    <Flex  justifyContent="space-between" marginLeft={10} marginTop={4} p={5} backgroundColor="#eeeff1" w={1200} borderRadius={10}>
      <Box>
      <Text fontSize={12} fontWeight={500}>Labor Day Steals! Up to 10% Off! Selected Summer Fun, Beauty, </Text>
      <Flex marginLeft={12} ><Text fontWeight={500} fontSize={12}> Dining & More! </Text> <Text fontWeight={500} color='green' fontSize={12}>USE CODE PROMO </Text> </Flex>
      </Box>
      <Center height='60px' p={4}>
  <Divider orientation='vertical' />
</Center>
      <Box>
        <Text fontSize={12}fontWeight={500} >Nick Cannon's Wild 'N Out Live! Experience Comedy & Hip-Hop</Text>
        <Text marginLeft={12} fontSize={12} fontWeight={500}>Like Never Before.</Text>
      </Box>  
      <Center height='60px' p={4}>
  <Divider orientation='vertical' />
</Center>
      <Box>
        <Text fontSize={12} fontWeight={500}>48-hour Bentgo Flash Sale! Lowest Prices of the Season on</Text>
        <Text marginLeft={12} fontSize={12} fontWeight={500}>Bentgo Kids Lunchboxes & More!</Text>
      </Box>  
    </Flex>

    <Flex  marginTop={5} p={7}>
      <Box p={2}>
      <Text fontWeight={700} fontSize={30}>Trending today in</Text>
      </Box>
      <Menu >
                     {({ isOpen }) => (
                        <>
                           <MenuButton fontWeight={700} fontSize={30} isActive={isOpen} as={Text}  borderRadius={20} m={2}>
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
    </Flex>


    <Flex justifyContent="space-between" p={5}>
      <Flex  >
        <Flex border="1px solid #eeeff1" w={20} gap={1} p={2} borderRadius={10}> <FaBorderAll size={25}/> <Text>All</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={200} gap={1} p={2} borderRadius={10}> <IoRestaurantSharp size={25}/> <Text>Restaurants</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>500+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={250} gap={1} p={2} borderRadius={10}> <FaShopify size={25}/> <Text>Groceries & Markets</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>467+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={330} gap={1} p={2} borderRadius={10}> <FaGlassCheers size={25}/> <Text>Breweries, Wineries & Distilleries</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>335+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <MdOutlineLocalCafe size={25}/> <Text>Cafes & Treats</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>335+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={130} gap={1} p={2} borderRadius={10}> <MdOutlineLocalBar size={25}/> <Text>Bars</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>201+</Text></Flex>
       </Flex>
      </Flex>


      <Flex justifyContent="space-between" p={5}>
        <Flex gap={2}>
          <Flex border="1px solid #eeeff1" p={2} gap={1} borderRadius={20} backgroundColor="#eeeff1">
            <BiSlider size={25} />
            <Text fontWeight={600}>Show Filters</Text>
          </Flex>
          <Text p={2}>5,536 deals</Text>
        </Flex>
        <Flex gap={2}>
          <Flex border="1px solid #eeeff1" p={2} gap={1} borderRadius={20} backgroundColor="#eeeff1">
            <BiFilter size={25} />
            <Text fontWeight={600}>Sort</Text>
            <BiChevronDown size={25} />
          </Flex>

          <Button leftIcon={<CiMap />} backgroundColor="white" border="1px solid" borderRadius={20}>
            Show on Map
          </Button>
        </Flex>
      </Flex>

      <NearData/>

    <Flex justifyContent="space-between" m={10}>
     <Box w={600} backgroundSize="cover" h={300}
      backgroundPosition="center" borderRadius={20}
      backgroundRepeat="no-repeat" backgroundImage="url('https://img.grouponcdn.com/sparta/23rWRJ2s12FkNezAjLPw2QWf92Tf/23-1176x654')">
        
          <Flex justifyContent="space-between" p={4} marginTop={40}>
            <Box>
              <Text fontWeight={750} fontSize={30} color="white">Top deals for Labor Day!</Text>
              <Text fontSize={18} fontWeight={500} color="white">Discover amazing discounts now!</Text>
            </Box>
            <Button backgroundColor="white" size="lg" border="1px solid" borderRadius={25} color="black">See Deals</Button>
          </Flex>
        </Box>
     

     <Box w={600} backgroundSize="cover" h={300}
      backgroundPosition="center" borderRadius={20}
      backgroundRepeat="no-repeat" backgroundImage="url('https://img.grouponcdn.com/sparta/3GVUT7Jkc7meemKREQvVdS7o3dy3/3G-1176x654')">
          
          <Flex justifyContent="space-between" p={4} marginTop={40}>
            <Box>
              <Text fontWeight={750} fontSize={30} color="white">Extend Summer</Text>
              <Text fontSize={18} fontWeight={500} color="white">Adventure’s far from over!</Text>
            </Box>
         </Flex>

     </Box>
    </Flex>

    <FoodData/>
   </Box>
  )
}

export default Home