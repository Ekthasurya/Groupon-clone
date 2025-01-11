import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BiChevronDown, BiFilter, BiSlider, BiSolidHomeHeart } from 'react-icons/bi'
import { FaBorderAll } from 'react-icons/fa'
import { GiBigDiamondRing } from 'react-icons/gi'
import { GoArrowLeft } from 'react-icons/go'
import { MdElectricalServices, MdFace3 } from 'react-icons/md'
import { PiFlowerLotusThin } from 'react-icons/pi'
import GoodsQs from '../Goods/GoodsQs'
import Goodsfo from '../Goods/Goodsfo'
import GoodData from '../components/GoodData'

const Goods = () => {
  return (
    <Box>
      <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Goods</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex p={2} gap={2}>
        <Box p={2}>
          <GoArrowLeft size={30} />
        </Box>
        <Text fontWeight={700} fontSize={{ base: '24px', md: '30px' }}>Groupon Goods</Text>
      </Flex>

      {/* <Flex wrap="wrap" justifyContent="space-between" p={5}>
        <Flex mb={2}>
          <Flex border="1px solid #eeeff1" w={{ base: 'full', sm: '20%' }} gap={1} p={2} borderRadius={10} justify="center">
            <FaBorderAll size={25} />
            <Text>All</Text>
          </Flex>
        </Flex>

        <Flex mb={2} w={{ base: 'full', sm: '45%', md: '22%' }}>
          <Flex border="1px solid #eeeff1" gap={1} p={2} borderRadius={10} justify="space-between" w="100%">
            <PiFlowerLotusThin size={25} />
            <Text>Health & Beauty</Text>
            <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize="10px" p={1}>
              500+
            </Text>
          </Flex>
        </Flex>

        <Flex mb={2} w={{ base: 'full', sm: '45%', md: '22%' }}>
          <Flex border="1px solid #eeeff1" gap={1} p={2} borderRadius={10} justify="space-between" w="100%">
            <BiSolidHomeHeart size={25} />
            <Text>For the Home</Text>
            <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize="10px" p={1}>
              467+
            </Text>
          </Flex>
        </Flex>

        <Flex mb={2} w={{ base: 'full', sm: '45%', md: '22%' }}>
          <Flex border="1px solid #eeeff1" gap={1} p={2} borderRadius={10} justify="space-between" w="100%">
            <GiBigDiamondRing size={25} />
            <Text>Jewelry & Watches</Text>
            <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize="10px" p={1}>
              335+
            </Text>
          </Flex>
        </Flex>

        <Flex mb={2} w={{ base: 'full', sm: '45%', md: '22%' }}>
          <Flex border="1px solid #eeeff1" gap={1} p={2} borderRadius={10} justify="space-between" w="100%">
            <MdFace3 size={25} />
            <Text>Women's Fashion</Text>
            <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize="10px" p={1}>
              335+
            </Text>
          </Flex>
        </Flex>

        <Flex mb={2} w={{ base: 'full', sm: '45%', md: '22%' }}>
          <Flex border="1px solid #eeeff1" gap={1} p={2} borderRadius={10} justify="space-between" w="100%">
            <MdElectricalServices size={25} />
            <Text>Electronics</Text>
            <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize="10px" p={1}>
              201+
            </Text>
          </Flex>
        </Flex>
      </Flex> */}

      <Flex justifyContent="space-between" p={5} flexDirection={{ base: 'column', sm: 'row' }} alignItems="center">
        <Flex gap={2} mb={{ base: 4, sm: 0 }}>
          <Flex border="1px solid #eeeff1" p={2} gap={1} borderRadius={20} backgroundColor="#eeeff1" align="center">
            <BiSlider size={25} />
            <Text fontWeight={600}>Show Filters</Text>
          </Flex>
          <Text p={2}>5,536 deals</Text>
        </Flex>
      </Flex>

      <GoodData />

      <GoodsQs />

      <Goodsfo />
    </Box>
  )
}

export default Goods
