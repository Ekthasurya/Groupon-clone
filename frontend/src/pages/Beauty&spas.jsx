import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Divider, Flex, Input, InputGroup, InputLeftElement, Menu,MenuButton,MenuList,Text } from '@chakra-ui/react';
import React from 'react'
import Beautylogo from '../beauty/BeautyLogo';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoLocationSharp } from 'react-icons/io5';
import { TbCurrentLocation } from 'react-icons/tb';
import ReadMoreExample from '../beauty/Qsans';
import Beautyfo from '../beauty/beautyfo';
import { BiChevronDown, BiFilter, BiSlider } from 'react-icons/bi';
import { CiMap } from 'react-icons/ci';
import { GoArrowLeft } from 'react-icons/go';
import BeautyData from '../components/BeautyData'

const Beautyspas = () => {
  return (
    <Box>
      <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Nearby</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Beauty & Spas</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>

<Flex  marginTop={5} p={3}>
  <Flex p={2} gap={2}>
    <Box p={2}>
<GoArrowLeft size={30}  />
</Box>
      <Text fontWeight={700} fontSize={30}>Beauty & Spas in and near</Text>
      </Flex>
      <Menu >
                     {({ isOpen }) => (
                        <>
                           <MenuButton fontWeight={700} fontSize={30} isActive={isOpen} as={Text}  borderRadius={20} m={2}>
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

      <Beautylogo/>
      <Flex justifyContent="space-between" p={5}>
        <Flex gap={2}>
        <Flex  border="1px solid #eeeff1" p={2} gap={1} borderRadius={20} backgroundColor="#eeeff1">
        <BiSlider size={25}/>
        <Text fontWeight={600}>Show Filters</Text>
        </Flex>
        <Text p={2}>1,881 deals</Text>
        </Flex>
         <Flex gap={2}>
        <Flex  border="1px solid #eeeff1" p={2} gap={1} borderRadius={20} backgroundColor="#eeeff1">
        <BiFilter size={25}/>
        <Text fontWeight={600}>Sort</Text>
        <BiChevronDown size={25} />
        </Flex>

        <Button leftIcon={<CiMap />} backgroundColor="white" border="1px solid" borderRadius={20}>
          Show on Map
        </Button>
        </Flex>
      </Flex>

      <BeautyData/>

      <BeautyData/>

      <Text paddingLeft={7} fontWeight={600}>Chicago Beauty Guide</Text>
      <ReadMoreExample/>
      <Beautyfo/>
    </Box>
  )
}

export default Beautyspas;