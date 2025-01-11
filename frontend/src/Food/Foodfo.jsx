import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CiGift } from 'react-icons/ci';
import { GiKnifeFork } from 'react-icons/gi';
import { GoChevronRight } from 'react-icons/go';
import { IoBedOutline, IoLocationOutline } from 'react-icons/io5';
import { PiFlowerLotusThin } from 'react-icons/pi';
import { RiCouponLine, RiHomeOfficeLine } from 'react-icons/ri';
import { SlBag } from 'react-icons/sl';

const Foodfo = () => {
  return (
    <Box padding={5}>
      <Flex direction="column" gap={2} >
        <Text marginBottom={3} fontWeight={600} fontSize={20}>
          Popular categories
        </Text>
        <Flex wrap="wrap" justifyContent="space-between" gap={5}>
          <Flex
            border="1px solid #eeeff1"
            w={{ base: '100%', sm: '48%', md: '150px' }}
            p={2}
            h={70}
            borderRadius={10}
            direction="column"
            alignItems="center"
          >
            <IoLocationOutline size={25} />
            <Text textAlign="center">Nearby</Text>
          </Flex>

          <Flex
            border="1px solid #eeeff1"
            w={{ base: '100%', sm: '48%', md: '150px' }}
            p={2}
            h={70}
            borderRadius={10}
            direction="column"
            alignItems="center"
          >
            <CiGift size={25} />
            <Text textAlign="center">Gifts</Text>
          </Flex>

          <Flex
            border="1px solid #eeeff1"
            w={{ base: '100%', sm: '48%', md: '150px' }}
            p={2}
            h={70}
            borderRadius={10}
            direction="column"
            alignItems="center"
          >
            <PiFlowerLotusThin size={20} />
            <Text textAlign="center">Beauty & Spas</Text>
          </Flex>

          <Flex
            border="1px solid #eeeff1"
            w={{ base: '100%', sm: '48%', md: '150px' }}
            p={2}
            h={90}
            borderRadius={10}
            direction="column"
            alignItems="center"
          >
            <RiHomeOfficeLine size={25} />
            <Text textAlign="center">Auto & Home Improvement</Text>
          </Flex>

          <Flex
            border="1px solid #eeeff1"
            w={{ base: '100%', sm: '48%', md: '150px' }}
            p={2}
            h={70}
            borderRadius={10}
            direction="column"
            alignItems="center"
          >
            <GiKnifeFork size={25} />
            <Text textAlign="center">Food & Drink</Text>
          </Flex>

          <Flex
            border="1px solid #eeeff1"
            w={{ base: '100%', sm: '48%', md: '150px' }}
            p={2}
            h={70}
            borderRadius={10}
            direction="column"
            alignItems="center"
          >
            <SlBag size={25} />
            <Text textAlign="center">Goods</Text>
          </Flex>

          <Flex
            border="1px solid #eeeff1"
            w={{ base: '100%', sm: '48%', md: '150px' }}
            p={2}
            h={70}
            borderRadius={10}
            direction="column"
            alignItems="center"
          >
            <IoBedOutline size={25} />
            <Text textAlign="center">Travel</Text>
          </Flex>
        </Flex>

        <Divider orientation="horizontal" />

        <Flex direction="column" marginTop={5}>
          <Text marginBottom={3} fontWeight={600} fontSize={20}>
            Searches Nearby
          </Text>

          <Flex wrap="wrap" justifyContent="space-between" gap={5}>
            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '200px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>Sports in Chicago</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '180px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>Massage in Chicago</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '320px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>Auto Repair & Maintenance in Chicago</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '200px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>Crossfit in Chicago</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '150px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>Bars in Chicago</Text>
              <GoChevronRight size={25} />
            </Flex>
          </Flex>
        </Flex>

        <Divider orientation="horizontal" marginTop={10} />

        <Flex direction="column" marginTop={5}>
          <Text marginBottom={3} fontWeight={600} fontSize={20}>
            Neighborhoods
          </Text>

          <Flex wrap="wrap" justifyContent="space-between" gap={5}>
            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '130px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>River North</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '120px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>West Loop</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '150px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text> Near North Side</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '110px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>Lakeview</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '120px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>The Loop</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '120px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>Wicker Park</Text>
              <GoChevronRight size={25} />
            </Flex>
          </Flex>
        </Flex>

        <Divider orientation="horizontal" marginTop={10} />

        <Flex direction="column" marginTop={5}>
          <Text marginBottom={3} fontWeight={600} fontSize={20}>
            Popular Searches
          </Text>

          <Flex wrap="wrap" justifyContent="space-between" gap={5}>
            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '210px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>Food & Drink in Chicago</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '210px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>Things To Do in Chicago</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '180px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text> Massage in Chicago</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '250px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>Couples Massage in Chicago</Text>
              <GoChevronRight size={25} />
            </Flex>

            <Flex
              border="1px solid #eeeff1"
              w={{ base: '100%', sm: '48%', md: '150px' }}
              p={1}
              borderRadius={10}
              justify="space-between"
              align="center"
            >
              <Text>Spas in Chicago</Text>
              <GoChevronRight size={25} />
            </Flex>
          </Flex>
        </Flex>
        </Flex>
      </Box>
  );
};

export default Foodfo;
