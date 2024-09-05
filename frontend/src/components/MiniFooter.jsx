import React from 'react';
import { Button, Box, useDisclosure,Text, Flex, TabList, Tab, TabPanels, TabPanel, Tabs, TabIndicator } from '@chakra-ui/react';
import { HiChevronUp } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";
const ToggleContentExample = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box p={7}>
        <Flex justifyContent="space-between">
        <Box>
       <Text fontWeight={700} fontSize={20}>Popular on Groupon</Text> 
      <Text>Groupon is your place for savings and discovery while exploring fun activities in your city and around the country.</Text>  
        </Box>
      <Button onClick={onToggle} backgroundColor="white" border="1px solid" borderRadius={20} >
        {isOpen ? <Flex gap={2}><HiChevronUp /> <Text>Hide categories</Text></Flex> : <Flex gap={2}><HiChevronDown /> <Text>Explore categories</Text></Flex>}
      </Button>
      </Flex>

      {isOpen && (
        <Box mt={4} p={4}  borderRadius="md">
         <Tabs position='relative' variant='unstyled'>
  <TabList>
    <Tab>Popular Things nearby</Tab>
    <Tab>Browse by City</Tab>
    <Tab>Coupons & Promo codes</Tab>
  </TabList>
  <TabIndicator mt='-1.5px' height='2px' bg='black' borderRadius='1px' />
  <TabPanels>
    <TabPanel>
      <Flex justifyContent="space-between">
        <Flex direction="column" gap={2}>
           <Text fontWeight={500}>Beauty & Spas</Text>
           <Text>Massages</Text>
           <Text>Laser Hair Removal</Text>
           <Text>Nail Salons</Text>
           <Text>Botox Injections</Text>
           <Text>Tattoo Parlors</Text>
           <Text>Salons</Text>
           <Text>Barber Shops</Text>
           <Text>Hair Salons</Text>
           <Text>Spas</Text>
           <Text>Facials</Text>
           <Text>Waxing</Text>
        </Flex>
        <Flex direction="column" gap={2}>
        <Text fontWeight={500}>Food & Drink</Text>
           <Text>All Restaurants</Text>
           <Text>American</Text>
           <Text>Bars & Pubs</Text>
           <Text>Chinese</Text>
           <Text>Indian</Text>
           <Text>Italian</Text>
           <Text>Mexican</Text>
           <Text>Pizza</Text>
           <Text>Steakhouses</Text>
           <Text>Sushi</Text>
        </Flex>
        <Flex direction="column" gap={2}>
        <Text fontWeight={500}>Things To Do</Text>
           <Text>All Things to Do</Text>
           <Text>Amusement Parks</Text>
           <Text>Arcades</Text>
           <Text>Bowling</Text>
           <Text>Escape Rooms</Text>
           <Text>Kids Activities</Text>
           <Text>Mini Golf</Text>
           <Text>Museums</Text>
           <Text>Trampoline Parks</Text>
           <Text>Zoos</Text>
        </Flex>
        <Flex direction="column" gap={2}>
        <Text fontWeight={500}>Health & Fitness</Text>
           <Text>Chiropractors</Text>
           <Text>Dance Classes</Text>
           <Text>Dental Checkups</Text>
           <Text>Dermatologist</Text>
           <Text>Fitness Classes</Text>
           <Text>Golf Course</Text>
           <Text>Gyms</Text>
           <Text>Reflexology</Text>
           <Text>Weight Loss</Text>
           <Text>Yoga</Text>
        </Flex>
        <Flex direction="column" gap={2}>
        <Text fontWeight={500}>Automotive</Text>
           <Text>Oil Change</Text>
           <Text>Car Wash</Text>
           <Text>Car Rental</Text>
           <Text>Vehicle Repair Services</Text>
           <Text>Tires Repair</Text>
           <Text>Windshield Repair</Text>
           <Text>Parking</Text>
        </Flex>
      </Flex>
    </TabPanel>
    <TabPanel>
      <Flex justifyContent="space-between" >
        <Flex direction="column" gap={2}>
        <Text>Atlanta</Text>
           <Text>Austin</Text>
           <Text>Baltimore</Text>
           <Text>Boston</Text>
           <Text>Calgary</Text>
           <Text>Charleston</Text>
        </Flex>
        <Flex direction="column" gap={2}>
        <Text>Charlotte</Text>
           <Text>Chicago</Text>
           <Text>Dallas</Text>
           <Text>Denver</Text>
           <Text>Edmonton</Text>
           <Text>Houston</Text>
        </Flex>
        <Flex direction="column" gap={2}>
        <Text>Las Vegas</Text>
           <Text>Los Angeles</Text>
           <Text>Miami</Text>
           <Text>New York City</Text>
           <Text>Orlando</Text>
           <Text>Ottawa</Text>
        </Flex>
        <Flex direction="column" gap={2}>
        <Text>Philadelphia</Text>
           <Text>Phoenix</Text>
           <Text>Portland</Text>
           <Text>San Antonio</Text>
           <Text>San Diego</Text>
           <Text>San Francisco</Text>
        </Flex>
        <Flex direction="column" gap={2}>
        <Text>San Jose</Text>
           <Text>Seattle</Text>
           <Text>Tampa</Text>
           <Text>Toronto</Text>
           <Text>Vancouver</Text>
           <Text>Washington D.C.</Text>
        </Flex>
      </Flex>
    </TabPanel>
    <TabPanel>
      <Flex justifyContent="space-between">
        <Flex direction="column" gap={2} >
        <Text>1-800-Flowers Coupons</Text>
           <Text>Adidas Promo Codes</Text>
           <Text>Amazon Promo Codes</Text>
           <Text>American Eagle Promo Codes</Text>
           <Text>Ancestry DNA Coupons</Text>
           <Text>ASOS Promo Codes</Text>
        </Flex>
        <Flex direction="column" gap={2} >
        <Text>Bed Bath & Beyond Coupons</Text>
           <Text>Boohoo Promo Codes</Text>
           <Text>eBay Coupons</Text>
           <Text>Edible Arrangements Coupons</Text>
           <Text>Forever 21 Coupons</Text>
           <Text>H&R Block Coupons</Text>
        </Flex>
        <Flex direction="column" gap={2}>
        <Text>Home Depot Coupons</Text>
           <Text>Kohl's Coupons</Text>
           <Text>L.L.Bean Coupons</Text>
           <Text>Lowe's Coupons</Text>
           <Text>Macy's Coupons</Text>
           <Text>Michaels Coupons</Text>
        </Flex>
        <Flex direction="column" gap={2} >
        <Text>Old Navy Coupons</Text>
           <Text>Quickbooks Coupons</Text>
           <Text>Samsung Coupons</Text>
           <Text>Sephora Coupons</Text>
           <Text>Target Coupons</Text>
           <Text>TJ Maxx Coupons</Text>
        </Flex>
        <Flex direction="column" gap={2}>
        <Text>Turbotax Service Codes</Text>
           <Text>Udemy Coupons</Text>
           <Text>Verizon Wireless Promo Codes</Text>
           <Text>Walmart Coupons</Text>
           <Text>Weight Watchers Coupons</Text>
           <Text>Zales Promo Codes</Text>
        </Flex>
      </Flex>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
      )}
    </Box>
  );
};

export default ToggleContentExample;
