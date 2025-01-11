import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CiGift } from "react-icons/ci";
import { GiKnifeFork } from "react-icons/gi";
import { GoChevronRight } from "react-icons/go";
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { PiFlowerLotusThin } from "react-icons/pi";
import { RiCouponLine, RiHomeOfficeLine } from "react-icons/ri";
import { SlBag } from "react-icons/sl";

const Thingsfo = () => {
  const categories = [
    { icon: IoLocationOutline, label: "Nearby" },
    { icon: CiGift, label: "Gifts" },
    { icon: PiFlowerLotusThin, label: "Beauty & Spas" },
    { icon: RiHomeOfficeLine, label: "Auto & Home Improvement" },
    { icon: GiKnifeFork, label: "Food & Drink" },
    { icon: SlBag, label: "Goods" },
    { icon: IoBedOutline, label: "Travel" },
    { icon: RiCouponLine, label: "Coupons" },
  ];

  const sections = [
    {
      title: "Popular Searches",
      items: [
        "Food & Drink in Chicago",
        "Things To Do in Chicago",
        "Massage in Chicago",
        "Couples Massage in Chicago",
        "Spas in Chicago",
      ],
    },
    {
      title: "Neighborhoods",
      items: [
        "Lincoln Park",
        "West Loop",
        "Near North Side",
        "Lakeview",
        "The Loop",
        "Wicker Park",
      ],
    },
    {
      title: "Searches Nearby",
      items: [
        "Restaurants in Chicago",
        "Pizza in Chicago",
        "Italian Restaurants in Chicago",
        "Sports in Chicago",
        "Bars in Chicago",
      ],
    },
  ];

  return (
    <Box padding={5}>
      {/* Popular Categories */}
      <Flex direction="column" gap={4}>
        <Text fontWeight={600} fontSize={{ base: 16, md: 20 }}>
          Popular categories
        </Text>
        <Flex
          flexWrap="wrap"
          justifyContent={{ base: "center", md: "space-between" }}
          gap={4}
        >
          {categories.map((category, idx) => (
            <Box
              key={idx}
              border="1px solid #eeeff1"
              w={{ base: "45%", sm: "30%", md: "18%" }}
              p={2}
              h={70}
              borderRadius={10}
              textAlign="center"
            >
              <Flex justifyContent="center">
                <category.icon size={25} />
              </Flex>
              <Text fontSize={{ base: 12, md: 14 }}>{category.label}</Text>
            </Box>
          ))}
        </Flex>
      </Flex>

      <Divider orientation="horizontal" my={5} />

      {/* Sections */}
      {sections.map((section, idx) => (
        <Box key={idx} mb={5}>
          <Text fontWeight={600} fontSize={{ base: 16, md: 20 }} mb={3}>
            {section.title}
          </Text>
          <Flex
            flexWrap="wrap"
            justifyContent={{ base: "center", md: "space-between" }}
            gap={4}
          >
            {section.items.map((item, index) => (
              <Flex
                key={index}
                border="1px solid #eeeff1"
                w={{ base: "45%", sm: "30%", md: "18%" }}
                p={2}
                borderRadius={10}
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize={{ base: 12, md: 14 }}>{item}</Text>
                <GoChevronRight size={20} />
              </Flex>
            ))}
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default Thingsfo;
