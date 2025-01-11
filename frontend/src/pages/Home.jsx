import { ChevronDownIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, CardBody, Center, Divider, Flex, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react'
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
      <Flex justifyContent="space-between" marginLeft={{ lg: '80px', sm: '12px' }} marginTop={4} p={5} backgroundColor="#eeeff1" borderRadius={10} w="full" maxW="1200px">
        <Box>
          <Text fontSize={{ base: '10px', sm: '12px' }} fontWeight={500}>Labor Day Steals! Up to 10% Off! Selected Summer Fun, Beauty, </Text>
          <Flex marginLeft={12}><Text fontWeight={500} fontSize={{ base: '10px', sm: '12px' }}> Dining & More! </Text> <Text fontWeight={500} color='green' fontSize={{ base: '10px', sm: '12px' }}>USE CODE PROMO</Text> </Flex>
        </Box>
        <Center height="60px" p={4}>
          <Divider orientation="vertical" />
        </Center>
        <Box>
          <Text fontSize={{ base: '10px', sm: '12px' }} fontWeight={500}>Nick Cannon's Wild 'N Out Live! Experience Comedy & Hip-Hop</Text>
          <Text marginLeft={12} fontSize={{ base: '10px', sm: '12px' }} fontWeight={500}>Like Never Before.</Text>
        </Box>  
        <Center height="60px" p={4}>
          <Divider orientation="vertical" />
        </Center>
        <Box>
          <Text fontSize={{ base: '10px', sm: '12px' }} fontWeight={500}>48-hour Bentgo Flash Sale! Lowest Prices of the Season on</Text>
          <Text marginLeft={12} fontSize={{ base: '10px', sm: '12px' }} fontWeight={500}>Bentgo Kids Lunchboxes & More!</Text>
        </Box>  
      </Flex>

      <Flex marginTop={5} p={7} flexDirection={{ base: 'column', sm: 'row' }} justifyContent="space-between">
        <Box p={2}>
          <Text fontWeight={700} fontSize={{ base: '24px', sm: '30px' }}>Trending today in</Text>
        </Box>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton fontWeight={700} fontSize={{ base: '20px', sm: '30px' }} isActive={isOpen} as={Text} borderRadius={20} m={2}>
                {isOpen ? 'Chicago,IL' : 'Chicago,IL'}
              </MenuButton>
              <MenuList>
                <Card w="500px" p={3}>
                  <CardBody>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <IoLocationSharp />
                      </InputLeftElement>
                      <Input type="tel" placeholder="Zip Code, Neighborhood,City" />
                    </InputGroup>
                    <Flex p={5} gap={5}>
                      <TbCurrentLocation size={20} color="blue" />
                      <Text color="blue">Set Current Location</Text>
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

      <Flex justifyContent="space-between" p={5} wrap="wrap">
      <Flex mb={4} w={{ base: 'full', sm: '48%', md: '22%' }}>
        <Flex
          border="1px solid #eeeff1"
          gap={1}
          p={2}
          borderRadius={10}
          justify="center"
          w="100%"
        >
          <FaBorderAll size={25} />
          <Text>All</Text>
        </Flex>
      </Flex>

      <Flex mb={4} w={{ base: 'full', sm: '48%', md: '22%' }}>
        <Flex
          border="1px solid #eeeff1"
          gap={1}
          p={2}
          borderRadius={10}
          justify="space-between"
          w="100%"
        >
          <IoRestaurantSharp size={25} />
          <Text>Restaurants</Text>
          <Text
            border="1px solid #eeeff1"
            backgroundColor="#eeeff1"
            borderRadius={10}
            fontSize="10px"
            p={1}
          >
            500+
          </Text>
        </Flex>
      </Flex>

      {/* <Flex mb={4} w={{ base: 'full', sm: '48%', md: '22%' }}>
        <Flex
          border="1px solid #eeeff1"
          gap={1}
          p={2}
          borderRadius={10}
          justify="space-between"
          w="100%"
        >
          <FaShopify size={25} />
          <Text>Groceries & Markets</Text>
          <Text
            border="1px solid #eeeff1"
            backgroundColor="#eeeff1"
            borderRadius={10}
            fontSize="10px"
            p={1}
          >
            467+
          </Text>
        </Flex>
      </Flex> */}

      <Flex mb={4} w={{ base: 'full', sm: '48%', md: '22%' }}>
        <Flex
          border="1px solid #eeeff1"
          gap={1}
          p={2}
          borderRadius={10}
          justify="space-between"
          w="100%"
        >
          <FaGlassCheers size={25} />
          <Text>Brewery, Wineries & Distilleries</Text>
          <Text
            border="1px solid #eeeff1"
            backgroundColor="#eeeff1"
            borderRadius={10}
            fontSize="10px"
            p={1}
          >
            335+
          </Text>
        </Flex>
      </Flex>

      <Flex mb={4} w={{ base: 'full', sm: '48%', md: '22%' }}>
        <Flex
          border="1px solid #eeeff1"
          gap={1}
          p={2}
          borderRadius={10}
          justify="space-between"
          w="100%"
        >
          <MdOutlineLocalCafe size={25} />
          <Text>Cafes & Treats</Text>
          <Text
            border="1px solid #eeeff1"
            backgroundColor="#eeeff1"
            borderRadius={10}
            fontSize="10px"
            p={1}
          >
            335+
          </Text>
        </Flex>
      </Flex>

      <Flex mb={4} w={{ base: 'full', sm: '48%', md: '22%' }}>
        <Flex
          border="1px solid #eeeff1"
          gap={1}
          p={2}
          borderRadius={10}
          justify="space-between"
          w="100%"
        >
          <MdOutlineLocalBar size={25} />
          <Text>Bars</Text>
          <Text
            border="1px solid #eeeff1"
            backgroundColor="#eeeff1"
            borderRadius={10}
            fontSize="10px"
            p={1}
          >
            201+
          </Text>
        </Flex>
      </Flex>
    </Flex>

      <Flex justifyContent="space-between" p={5} flexDirection={{ base: 'column', sm: 'row' }} alignItems="center">
        <Flex gap={2} mb={{ base: 4, sm: 0 }}>
          <Flex border="1px solid #eeeff1" p={2} gap={1} borderRadius={20} backgroundColor="#eeeff1" align="center">
            <BiSlider size={25} />
            <Text fontWeight={600}>Show Filters</Text>
          </Flex>
          <Text p={2}>5,536 deals</Text>
        </Flex>
        <Flex gap={2}>
          <Button leftIcon={<CiMap />} backgroundColor="white" border="1px solid" borderRadius={20}>
            Show on Map
          </Button>
        </Flex>
      </Flex>

      <NearData />

      <Flex justifyContent="space-between" m={10} gap={5} wrap="wrap">
        <Box w={{ base: 'full', sm: '48%', md: '48%', lg: '48%' }} backgroundSize="cover" h={300} backgroundPosition="center" borderRadius={20} backgroundRepeat="no-repeat" backgroundImage="url('https://img.grouponcdn.com/sparta/23rWRJ2s12FkNezAjLPw2QWf92Tf/23-1176x654')">
          <Flex justifyContent="space-between" p={4} marginTop={40}>
            <Box>
              <Text fontWeight={750} fontSize={{ base: '24px', sm: '30px' }} color="white">Top deals for Labor Day!</Text>
              <Text fontSize={{ base: '14px', sm: '18px' }} fontWeight={500} color="white">Discover amazing discounts now!</Text>
            </Box>
            <Button backgroundColor="white" size="lg" border="1px solid" borderRadius={25} color="black">See Deals</Button>
          </Flex>
        </Box>

        <Box w={{ base: 'full', sm: '48%', md: '48%', lg: '48%' }} backgroundSize="cover" h={300} backgroundPosition="center" borderRadius={20} backgroundRepeat="no-repeat" backgroundImage="url('https://img.grouponcdn.com/sparta/3GVUT7Jkc7meemKREQvVdS7o3dy3/3G-1176x654')">
          <Flex justifyContent="space-between" p={4} marginTop={40}>
            <Box>
              <Text fontWeight={750} fontSize={{ base: '24px', sm: '30px' }} color="white">Extend Summer</Text>
              <Text fontSize={{ base: '14px', sm: '18px' }} fontWeight={500} color="white">Adventure’s far from over!</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <FoodData /> 
    </Box>
  )
}

export default Home;
