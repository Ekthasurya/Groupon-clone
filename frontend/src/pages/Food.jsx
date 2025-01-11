import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Text,
  BreadcrumbLink,
  Card,
  CardBody,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  MenuList,
  Menu,
  MenuButton,
  Button
} from '@chakra-ui/react';
import React from 'react';
import { BiChevronDown, BiFilter, BiSlider } from 'react-icons/bi';
import { CiMap } from 'react-icons/ci';
import { FaBorderAll, FaGlassCheers, FaShopify } from 'react-icons/fa';
import { GoArrowLeft } from 'react-icons/go';
import { IoLocationSharp, IoRestaurantSharp } from 'react-icons/io5';
import { MdOutlineLocalBar, MdOutlineLocalCafe } from 'react-icons/md';
import { TbCurrentLocation } from 'react-icons/tb';
import Foodfo from '../Food/Foodfo';
import FoodData from '../components/FoodData';

const Food = () => {
  return (
    <Box>
      {/* Breadcrumb Section */}
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

      {/* Header Section */}
      <Flex marginTop={5} p={3} flexDirection={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="space-between">
        <Flex p={2} gap={2} alignItems="center">
          <Box p={2}>
            <GoArrowLeft size={30} />
          </Box>
          <Text fontWeight={700} fontSize={{ base: 'xl', md: '2xl' }}>
            Food & Drink in and near
          </Text>
        </Flex>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton fontWeight={700} fontSize={{ base: 'lg', md: '2xl' }} isActive={isOpen} as={Text} borderRadius={20} m={2}>
                {isOpen ? 'Chicago,IL' : 'Chicago,IL'}
              </MenuButton>
              <MenuList>
                <Card w={{ base: 'full', md: 600 }}>
                  <CardBody>
                    <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                        <IoLocationSharp />
                      </InputLeftElement>
                      <Input type='tel' placeholder='Zip Code, Neighborhood, City' />
                    </InputGroup>
                    <Flex p={5} gap={5} alignItems="center">
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

      {/* Category Buttons */}
      {/* <Flex wrap="wrap" justifyContent="space-between" p={5}>
        <Flex w={{ base: '100%', sm: '45%', md: '20%' }} mb={3}>
          <Flex border="1px solid #eeeff1" w="full" gap={1} p={2} borderRadius={10} alignItems="center" justifyContent="center">
            <FaBorderAll size={25} />
            <Text>All</Text>
          </Flex>
        </Flex>
        <Flex w={{ base: '100%', sm: '45%', md: '20%' }} mb={3}>
          <Flex border="1px solid #eeeff1" w="full" gap={1} p={2} borderRadius={10} alignItems="center" justifyContent="center">
            <IoRestaurantSharp size={25} />
            <Text>Restaurants</Text>
            <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>
              500+
            </Text>
          </Flex>
        </Flex>
        <Flex w={{ base: '100%', sm: '45%', md: '20%' }} mb={3}>
          <Flex border="1px solid #eeeff1" w="full" gap={1} p={2} borderRadius={10} alignItems="center" justifyContent="center">
            <FaShopify size={25} />
            <Text>Groceries & Markets</Text>
            <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>
              467+
            </Text>
          </Flex>
        </Flex>
        <Flex w={{ base: '100%', sm: '45%', md: '20%' }} mb={3}>
          <Flex border="1px solid #eeeff1" w="full" gap={1} p={2} borderRadius={10} alignItems="center" justifyContent="center">
            <FaGlassCheers size={25} />
            <Text>Breweries, Wineries & Distilleries</Text>
            <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>
              335+
            </Text>
          </Flex>
        </Flex>
        <Flex w={{ base: '100%', sm: '45%', md: '20%' }} mb={3}>
          <Flex border="1px solid #eeeff1" w="full" gap={1} p={2} borderRadius={10} alignItems="center" justifyContent="center">
            <MdOutlineLocalCafe size={25} />
            <Text>Cafes & Treats</Text>
            <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>
              335+
            </Text>
          </Flex>
        </Flex>
        <Flex w={{ base: '100%', sm: '45%', md: '20%' }} mb={3}>
          <Flex border="1px solid #eeeff1" w="full" gap={1} p={2} borderRadius={10} alignItems="center" justifyContent="center">
            <MdOutlineLocalBar size={25} />
            <Text>Bars</Text>
            <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>
              201+
            </Text>
          </Flex>
        </Flex>
      </Flex> */}

      {/* Filter and Map Button */}
      <Flex justifyContent="space-between" p={5} wrap="wrap">
        <Flex gap={2}>
          <Flex border="1px solid #eeeff1" p={2} gap={1} borderRadius={20} backgroundColor="#eeeff1" alignItems="center">
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

      {/* Food Data and Foodfo */}
      <FoodData />
      <Foodfo />
    </Box>
  );
};

export default Food;
