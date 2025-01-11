import React from 'react';
import { Button, Box, useDisclosure, Text, Flex, TabList, Tab, TabPanels, TabPanel, Tabs, TabIndicator } from '@chakra-ui/react';
import { HiChevronUp } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";

const ToggleContentExample = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box p={{ base: 4, md: 7 }} mx="auto">
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mb={{ base: 4, md: 0 }}>
          <Text fontWeight={700} fontSize={{ base: "xl", md: "2xl" }}>
            Popular on Groupon
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }}>
            Groupon is your place for savings and discovery while exploring fun activities in your city and around the country.
          </Text>
        </Box>

        <Button
          onClick={onToggle}
          backgroundColor="white"
          border="1px solid"
          borderRadius={20}
          size={{ base: "sm", md: "md" }}
        >
          {isOpen ? (
            <Flex gap={2}>
              <HiChevronUp />
              <Text>See Menu Card</Text>
            </Flex>
          ) : (
            <Flex gap={2}>
              <HiChevronDown />
              <Text>See Menu Card</Text>
            </Flex>
          )}
        </Button>
      </Flex>

      {isOpen && (
        <Box mt={4} p={4} borderRadius="md">
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab fontSize={{ base: "sm", md: "md" }}>Popular Things nearby</Tab>
              <Tab fontSize={{ base: "sm", md: "md" }}>Browse by City</Tab>
              <Tab fontSize={{ base: "sm", md: "md" }}>Coupons & Promo codes</Tab>
            </TabList>
            <TabIndicator mt="-1.5px" height="2px" bg="black" borderRadius="1px" />
            <TabPanels>
              <TabPanel>
                <Flex wrap="wrap" justifyContent="space-between" gap={4}>
                  {/* Beauty & Spas, Food & Drink, etc. */}
                  <Flex direction="column" gap={2} w={{ base: "100%", md: "30%" }}>
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
                  <Flex direction="column" gap={2} w={{ base: "100%", md: "30%" }}>
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
                  <Flex direction="column" gap={2} w={{ base: "100%", md: "30%" }}>
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
                  {/* Add other sections here */}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex wrap="wrap" justifyContent="space-between" gap={4}>
                  {/* City List */}
                  <Flex direction="column" gap={2} w={{ base: "100%", md: "30%" }}>
                    <Text fontWeight={500}>Atlanta</Text>
                    <Text>Austin</Text>
                    <Text>Baltimore</Text>
                    <Text>Boston</Text>
                    <Text>Calgary</Text>
                    <Text>Charleston</Text>
                  </Flex>
                  <Flex direction="column" gap={2} w={{ base: "100%", md: "30%" }}>
                    <Text fontWeight={500}>Charlotte</Text>
                    <Text>Chicago</Text>
                    <Text>Dallas</Text>
                    <Text>Denver</Text>
                    <Text>Edmonton</Text>
                    <Text>Houston</Text>
                  </Flex>
                  <Flex direction="column" gap={2} w={{ base: "100%", md: "30%" }}>
                    <Text fontWeight={500}>Las Vegas</Text>
                    <Text>Los Angeles</Text>
                    <Text>Miami</Text>
                    <Text>New York City</Text>
                    <Text>Orlando</Text>
                    <Text>Ottawa</Text>
                  </Flex>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex wrap="wrap" justifyContent="space-between" gap={4}>
                  {/* Coupon List */}
                  <Flex direction="column" gap={2} w={{ base: "100%", md: "30%" }}>
                    <Text fontWeight={500}>1-800-Flowers Coupons</Text>
                    <Text>Adidas Promo Codes</Text>
                    <Text>Amazon Promo Codes</Text>
                    <Text>American Eagle Promo Codes</Text>
                    <Text>Ancestry DNA Coupons</Text>
                    <Text>ASOS Promo Codes</Text>
                  </Flex>
                  <Flex direction="column" gap={2} w={{ base: "100%", md: "30%" }}>
                    <Text fontWeight={500}>Bed Bath & Beyond Coupons</Text>
                    <Text>Boohoo Promo Codes</Text>
                    <Text>eBay Coupons</Text>
                    <Text>Edible Arrangements Coupons</Text>
                    <Text>Forever 21 Coupons</Text>
                    <Text>H&R Block Coupons</Text>
                  </Flex>
                  <Flex direction="column" gap={2} w={{ base: "100%", md: "30%" }}>
                    <Text fontWeight={500}>Home Depot Coupons</Text>
                    <Text>Kohl's Coupons</Text>
                    <Text>L.L.Bean Coupons</Text>
                    <Text>Lowe's Coupons</Text>
                    <Text>Macy's Coupons</Text>
                    <Text>Michaels Coupons</Text>
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
