import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Beautylogo from '../beauty/BeautyLogo';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoLocationSharp } from 'react-icons/io5';
import { TbCurrentLocation } from 'react-icons/tb';
import ReadMoreExample from '../beauty/Qsans';
import Beautyfo from '../beauty/Beautyfo';
import { BiSlider } from 'react-icons/bi';
import { CiMap } from 'react-icons/ci';
import { GoArrowLeft } from 'react-icons/go';
import BeautyData from '../components/BeautyData';

const Beautyspas = () => {
  return (
    <Box p={4}>
      {/* Breadcrumb */}
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
          <BreadcrumbLink href="#">Beauty & Spas</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Header Section */}
      <Flex
        mt={5}
        p={3}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        gap={3}
      >
        <Flex alignItems="center" gap={2}>
          <Box p={2}>
            <GoArrowLeft size={30} />
          </Box>
          <Text fontWeight={700} fontSize={{ base: 20, md: 30 }}>
            Beauty & Spas in and near
          </Text>
        </Flex>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                fontWeight={700}
                fontSize={{ base: 18, md: 30 }}
                isActive={isOpen}
                as={Text}
                borderRadius={20}
                m={2}
              >
                {isOpen ? 'Chicago, IL' : 'Chicago, IL'}
              </MenuButton>
              <MenuList>
                <Card w={{ base: '90%', md: 600 }}>
                  <CardBody>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <IoLocationSharp />
                      </InputLeftElement>
                      <Input type="text" placeholder="Zip Code, Neighborhood, City" />
                    </InputGroup>
                    <Flex p={5} gap={5} alignItems="center">
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

      {/* Logo */}
      {/* <Beautylogo /> */}

      {/* Filter and Map Buttons */}
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
          <Text p={2} fontSize={{ base: 'sm', md: 'md' }}>
            1,881 deals
          </Text>
        </Flex>
        <Flex gap={2}>
          <Button
            leftIcon={<CiMap />}
            backgroundColor="white"
            border="1px solid"
            borderRadius={20}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            Show on Map
          </Button>
        </Flex>
      </Flex>

      {/* Beauty Data Section */}
      <BeautyData />

      {/* Beauty Guide */}
      <Text paddingLeft={7} fontWeight={600} fontSize={{ base: 'lg', md: 'xl' }}>
        Chicago Beauty Guide
      </Text>
      <ReadMoreExample />

      {/* Footer */}
      <Beautyfo />
    </Box>
  );
};

export default Beautyspas;
