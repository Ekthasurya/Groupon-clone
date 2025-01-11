import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CiGift } from 'react-icons/ci';
import { GiKnifeFork } from 'react-icons/gi';
import { GoChevronRight } from 'react-icons/go';
import { IoBedOutline, IoLocationOutline } from 'react-icons/io5';
import { PiFlowerLotusThin } from 'react-icons/pi';
import { RiCouponLine, RiHomeOfficeLine } from 'react-icons/ri';
import { SlBag } from 'react-icons/sl';

const Autofo = () => {
  return (
    <Box padding={5}>
      
      {/* Popular Categories Section */}
      <Flex direction="column" gap={2} h="auto">
        <Text marginBottom={3} fontWeight={600} fontSize={{ base: '16px', sm: '20px' }}>
          Popular categories
        </Text>
        
        {/* Category Boxes */}
        <Flex wrap="wrap" justify="space-between" gap={5}>
          {[
            { icon: <IoLocationOutline size={25} />, label: 'Nearby' },
            { icon: <CiGift size={25} />, label: 'Gifts' },
            { icon: <PiFlowerLotusThin size={20} />, label: 'Beauty & Spas' },
            { icon: <RiHomeOfficeLine size={25} />, label: 'Auto & Home Improvement' },
            { icon: <GiKnifeFork size={25} />, label: 'Food & Drink' },
            { icon: <SlBag size={25} />, label: 'Goods' },
            { icon: <IoBedOutline size={25} />, label: 'Travel' },
            { icon: <RiCouponLine size={25} />, label: 'Coupons' },
          ].map((item, index) => (
            <Box 
              key={index} 
              border="1px solid #eeeff1" 
              w={{ base: '100%', sm: '48%', md: '23%' }} 
              p={2} 
              h={70} 
              borderRadius={10} 
              display="flex" 
              flexDirection="column" 
              alignItems="center" 
              justifyContent="center" 
              _hover={{ border: "2px solid" }}
            >
              {item.icon}
              <Text textAlign="center" fontSize={{ base: '12px', sm: '14px' }}>
                {item.label}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>

      <Divider orientation="horizontal" my={5} />

      {/* Popular Searches Section */}
      <Flex direction="column" marginTop={5}>
        <Text marginBottom={3} fontWeight={600} fontSize={{ base: '16px', sm: '20px' }}>
          Popular Searches
        </Text>

        <Flex wrap="wrap" justify="space-between" gap={5}>
          {[
            { label: 'Food & Drink in Chicago', width: '210px' },
            { label: 'Things To Do in Chicago', width: '210px' },
            { label: 'Massage in Chicago', width: '180px' },
            { label: 'Couples Massage in Chicago', width: '250px' },
            { label: 'Spas in Chicago', width: '150px' },
          ].map((item, index) => (
            <Flex 
              key={index} 
              border="1px solid #eeeff1" 
              w={{ base: '100%', sm: '48%', md: item.width }} 
              p={1} 
              borderRadius={10} 
              align="center" 
              justify="space-between"
            >
              <Text fontSize={{ base: '12px', sm: '14px' }}>{item.label}</Text>
              <GoChevronRight size={25} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Autofo;
