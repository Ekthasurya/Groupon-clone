import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex,Text } from '@chakra-ui/react'
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
    <BreadcrumbLink href='#'>Good</BreadcrumbLink>s
  </BreadcrumbItem>
</Breadcrumb>


<Flex p={2} gap={2}>
    <Box p={2}>
<GoArrowLeft size={30}  />
</Box>
      <Text fontWeight={700} fontSize={30}>Groupon Goods</Text>
      </Flex>



      <Flex justifyContent="space-between" p={5}>
      <Flex  >
        <Flex border="1px solid #eeeff1" w={20} gap={1} p={2} borderRadius={10}> <FaBorderAll size={25}/> <Text>All</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={280} gap={1} p={2} borderRadius={10}> <PiFlowerLotusThin size={25}/> <Text>Health & Beauty Products</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>500+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={200} gap={1} p={2} borderRadius={10}> <BiSolidHomeHeart size={25}/> <Text>For the Home</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>467+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={230} gap={1} p={2} borderRadius={10}> <GiBigDiamondRing size={25}/> <Text>Jewelry & Watches</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>335+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <MdFace3 size={25}/> <Text>Women's Fashion</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>335+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={130} gap={1} p={2} borderRadius={10}> <MdElectricalServices size={25}/> <Text>Electronics</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>201+</Text></Flex>
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
        </Flex>
      </Flex>


      <GoodData/>
      <GoodData/>


      <GoodsQs/>

      <Goodsfo/>


    </Box>
  )
}

export default Goods