import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import Autologo from '../Auto/Autologo';
import { BiChevronDown, BiFilter, BiSlider } from 'react-icons/bi';
import Autofo from '../Auto/Autofo';
import HomeData from '../components/HomeData';

const AutoHome = () => {
  return (
    <Box padding={4}>
      {/* Breadcrumb for Navigation */}
      <Breadcrumb 
        spacing="8px" 
        separator={<ChevronRightIcon color="gray.500" />}
        fontSize={{ base: 'sm', md: 'md' }}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Nearby</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Auto & Home Improvement</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Title Section */}
      <Flex 
        p={2} 
        gap={2} 
        alignItems="center" 
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box p={2}>
          <GoArrowLeft size={30} />
        </Box>
        <Text fontWeight={700} fontSize={{ base: 20, md: 30 }} textAlign="center">
          Auto & Home Improvement
        </Text>
      </Flex>

      {/* Auto Logo Component */}
      {/* <Autologo /> */}

      {/* Filters Section */}
      <Flex 
        justifyContent="space-between" 
        p={5} 
        flexDirection={{ base: 'column', md: 'row' }}
        gap={4}
      >
        <Flex gap={2} alignItems="center">
          <Flex
            border="1px solid #eeeff1"
            p={2}
            gap={1}
            borderRadius={20}
            backgroundColor="#eeeff1"
            alignItems="center"
          >
            <BiSlider size={25} />
            <Text fontWeight={600} fontSize={{ base: 'sm', md: 'md' }}>
              Show Filters
            </Text>
          </Flex>
          <Text p={2} fontSize={{ base: 'sm', md: 'md' }}>1,881 deals</Text>
        </Flex>
      </Flex>

      {/* Home Data Component */}
      <HomeData />

      {/* Footer Component */}
      <Autofo />
    </Box>
  );
};

export default AutoHome;
