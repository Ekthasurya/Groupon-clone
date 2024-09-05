import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem,Text, BreadcrumbLink, Card, CardBody, Divider, Flex, Input, InputGroup, InputLeftElement, MenuList, Menu, MenuButton, Button } from '@chakra-ui/react'
import React from 'react'
import { BiChevronDown, BiFilter, BiSlider } from 'react-icons/bi'
import { CiMap } from 'react-icons/ci'
import { FaBorderAll, FaGlassCheers, FaShopify } from 'react-icons/fa'
import { GoArrowLeft } from 'react-icons/go'
import { IoLocationSharp, IoRestaurantSharp } from 'react-icons/io5'
import { MdOutlineLocalBar, MdOutlineLocalCafe } from 'react-icons/md'
import { TbCurrentLocation } from 'react-icons/tb'
import Foodfo from '../Food/Foodfo'
import FoodData from '../components/FoodData'

const Food = () => {
  return (
    <Box>
      <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Nearby</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Food & Drink</BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>

      <Flex  marginTop={5} p={3}>
        <Flex p={2} gap={2}>
          <Box p={2}>
            <GoArrowLeft size={30} />
          </Box>
          <Text fontWeight={700} fontSize={30}>Food & Drink in and near</Text>
        </Flex>
        <Menu >
          {({ isOpen }) => (
            <>
              <MenuButton fontWeight={700} fontSize={30} isActive={isOpen} as={Text} borderRadius={20} m={2}>
                {isOpen ? 'Chicago,IL' : 'Chicago,IL'}
              </MenuButton>
              <MenuList>
                <Card w={600}>
                  <CardBody >
                    <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                        <IoLocationSharp />
                      </InputLeftElement>
                      <Input type='tel' placeholder='Zip Code, Neighborhood,City' />
                    </InputGroup>
                    <Flex p={5} gap={5}>
                      <TbCurrentLocation size={20} color='blue' />
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

      <Flex justifyContent="space-between">
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

      <FoodData/>
      <FoodData/>
      

     

      <Foodfo/>

    </Box>
  )
}

export default Food