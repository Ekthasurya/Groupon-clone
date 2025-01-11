import { Box, Divider, Flex, Text, Grid, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { CiGift } from 'react-icons/ci'
import { GiKnifeFork } from 'react-icons/gi'
import { GoChevronRight } from 'react-icons/go'
import { IoBedOutline, IoLocationOutline } from 'react-icons/io5'
import { PiFlowerLotusThin } from 'react-icons/pi'
import { RiCouponLine, RiHomeOfficeLine } from 'react-icons/ri'
import { SlBag } from 'react-icons/sl'

const Beautyfo = () => {
  // Define responsive values for the box width
  const boxWidth = useBreakpointValue({ base: "100%", sm: "48%", md: "22%" });

  return (
    <Box padding={5}>
      <Flex direction="column" gap={2} >
        <Text marginBottom={3} fontWeight={600} fontSize={20}>Popular categories</Text>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(4, 1fr)",  // 4 columns on medium screens and above
            lg: "repeat(5, 1fr)"   // 5 columns on large screens and above
          }}
          gap={6}  // Adjust the gap to give some breathing room between items
          rowGap={4}  // Ensure there is space between rows
        >
          <Box border="1px solid #eeeff1" p={2} h={70} borderRadius={10}>
            <Flex textAlign="center" justifyContent="center"><IoLocationOutline size={25} /></Flex>
            <Text textAlign="center">Nearby</Text>
          </Box>
          <Box border="1px solid #eeeff1" p={2} h={70} borderRadius={10}>
            <Flex textAlign="center" justifyContent="center"><CiGift size={25} /></Flex>
            <Text textAlign="center">Gifts</Text>
          </Box>
          <Box border="1px solid #eeeff1" p={2} h={70} borderRadius={10}>
            <Flex textAlign="center" justifyContent="center"><PiFlowerLotusThin size={20} /></Flex>
            <Text textAlign="center">Beauty & Spas</Text>
          </Box>
          <Box border="1px solid #eeeff1" p={2} h={90} borderRadius={10}>
            <Flex textAlign="center" justifyContent="center"><RiHomeOfficeLine size={25} /></Flex>
            <Text textAlign="center">Auto & Home Improvement</Text>
          </Box>
          <Box border="1px solid #eeeff1" p={2} h={70} borderRadius={10}>
            <Flex textAlign="center" justifyContent="center"><GiKnifeFork size={25} /></Flex>
            <Text textAlign="center">Food & Drink</Text>
          </Box>
          <Box border="1px solid #eeeff1" p={2} h={70} borderRadius={10}>
            <Flex textAlign="center" justifyContent="center"><SlBag size={25} /></Flex>
            <Text textAlign="center">Goods</Text>
          </Box>
          <Box border="1px solid #eeeff1" p={2} h={70} borderRadius={10}>
            <Flex textAlign="center" justifyContent="center"><IoBedOutline size={25} /></Flex>
            <Text textAlign="center">Travel</Text>
          </Box>
          <Box border="1px solid #eeeff1" p={2} h={70} borderRadius={10}>
            <Flex textAlign="center" justifyContent="center"><RiCouponLine size={25} /></Flex>
            <Text textAlign="center">Coupons</Text>
          </Box>
        </Grid>
      </Flex>

      <Divider orientation='horizontal' />

      <Flex direction="column" marginTop={5}>
        <Text marginBottom={3} fontWeight={600} fontSize={20}>Searches Nearby</Text>
        <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={4}>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Restaurants in Chicago</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Pizza in Chicago</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Italian Restaurants in Chicago</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Sports in Chicago</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Bars in Chicago</Text>
            <GoChevronRight size={25} />
          </Flex>
        </Grid>
      </Flex>

      <Divider orientation='horizontal' marginTop={10} />

      <Flex direction="column" marginTop={5}>
        <Text marginBottom={3} fontWeight={600} fontSize={20}>Popular Searches</Text>
        <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={4}>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Food & Drink in Chicago</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Things To Do in Chicago</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Massage in Chicago</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Couples Massage in Chicago</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Spas in Chicago</Text>
            <GoChevronRight size={25} />
          </Flex>
        </Grid>
      </Flex>

      <Divider orientation='horizontal' marginTop={10} />

      <Flex direction="column" marginTop={5}>
        <Text marginBottom={3} fontWeight={600} fontSize={20}>Neighborhoods</Text>
        <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={4}>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Lincoln Park</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>West Loop</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Near North Side</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Lakeview</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>The Loop</Text>
            <GoChevronRight size={25} />
          </Flex>
          <Flex border="1px solid #eeeff1" p={1} borderRadius={10} justify="space-between" align="center">
            <Text>Wicker Park</Text>
            <GoChevronRight size={25} />
          </Flex>
        </Grid>
      </Flex>
    </Box>
  )
}

export default Beautyfo;
