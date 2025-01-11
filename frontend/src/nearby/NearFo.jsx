import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CiGift } from "react-icons/ci";
import { GiKnifeFork } from "react-icons/gi";
import { GoChevronRight } from "react-icons/go";
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { PiFlowerLotusThin } from "react-icons/pi";
import { RiCouponLine, RiHomeOfficeLine } from "react-icons/ri";
import { SlBag } from "react-icons/sl";

const Nearfo = () => {
  return (
    <Box padding={5}>
      <Flex direction="column" gap={4}>
        <Text marginBottom={3} fontWeight={600} fontSize={{ base: 16, md: 20 }}>
          Popular categories
        </Text>
        <Flex
          flexWrap="wrap"
          justifyContent={{ base: "center", md: "space-between" }}
          gap={4}
        >
          {[
            { icon: IoLocationOutline, label: "Nearby" },
            { icon: CiGift, label: "Gifts" },
            { icon: PiFlowerLotusThin, label: "Beauty & Spas" },
            { icon: RiHomeOfficeLine, label: "Auto & Home Improvement" },
            { icon: GiKnifeFork, label: "Food & Drink" },
            { icon: SlBag, label: "Goods" },
            { icon: IoBedOutline, label: "Travel" },
            { icon: RiCouponLine, label: "Coupons" },
          ].map((item, idx) => (
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
                <item.icon size={25} />
              </Flex>
              <Text fontSize={{ base: 12, md: 14 }}>{item.label}</Text>
            </Box>
          ))}
        </Flex>

        <Divider orientation="horizontal" />

        {[
          {
            title: "Neighborhoods",
            items: [
              "Magnificent Mile",
              "Wicker Park",
              "O'Hare",
              "Lincoln Park",
              "Uptown",
              "Gold Coast",
              "Lakeview",
            ],
          },
          {
            title: "Searches Nearby",
            items: [
              "Wheaton",
              "Geneva",
              "Hammond",
              "Elgin",
              "Cicero",
              "Lisle",
              "Orland Park",
              "Waukegan",
            ],
          },
          {
            title: "Popular Searches",
            items: [
              "Aurora",
              "Schaumburg",
              "Evanston",
              "Justice",
              "Elmhurst",
              "Hoffman Estates",
              "Naperville",
              "Oak Park",
            ],
          },
        ].map((section, idx) => (
          <Box key={idx}>
            <Text
              marginBottom={3}
              fontWeight={600}
              fontSize={{ base: 16, md: 20 }}
            >
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
            <Divider orientation="horizontal" marginTop={5} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Nearfo;
