import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import Autologo from '../Auto/Autologo'
import { BiChevronDown, BiFilter, BiSlider } from 'react-icons/bi'
import Autofo from '../Auto/Autofo'
import HomeData from '../components/HomeData'

const AutoHome = () => {
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
          <BreadcrumbLink href='#'>Auto & Home Improvement</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>


      <Flex p={2} gap={2}>
        <Box p={2}>
          <GoArrowLeft size={30} />
        </Box>
        <Text fontWeight={700} fontSize={30}>Auto & Home Improvement</Text>
      </Flex>


      <Autologo/>

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

        
        </Flex>
      </Flex>

      <HomeData/>
      <HomeData/>


     

      <Autofo/>




    </Box>
  )
}

export default AutoHome