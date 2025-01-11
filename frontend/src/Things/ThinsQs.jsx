import { useState } from "react";
import {
  Box,
  Text,
  Button,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";

export default function ThingsQs() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <Box maxW="100%" p={{ base: 4, md: 8 }} mx="auto">
      <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.6">
        <b>Top Things to Do in Chicago</b> <br /> <br />
        Riverboat tours offer unbeatable skyline views, mesmerizing
        architecture spanning a range of times and trends, and endless culture
        in museums, concert halls, and theaters. Chicago has much to offer
        visitors and those who call the city home. And, with offers from
        Groupon, you can experience more of it—for less.
        {showMore ? (
          <>
            {" "}
            <br /> <br />
            <b>Explore the Best Things to Do in Chicago</b> <br /> <br />
            Chicago, the Windy City, abounds with unparalleled attractions.
            Whether you’re a tourist or a native seeking new ways to appreciate
            the city, you can always find things to do in Chicago. Families will
            find entertainment for all ages. Couples can wine and dine on a
            romantic getaway. Or get your girls — or guys — together to make
            memories. Before you go, grab an offer from Groupon. Then make your
            experience an unforgettable one.
            <br /> <br />
            {/* Additional sections here */}
            <UnorderedList
              spacing={2}
              mt={4}
              fontSize={{ base: "sm", md: "md" }}
            >
              <ListItem>Food & Drink in Chicago</ListItem>
              <ListItem>Retail in Chicago</ListItem>
              <ListItem>Nightlife in Chicago</ListItem>
              <ListItem>Beauty & Spas in Chicago</ListItem>
              <ListItem>Museums & Galleries in Chicago</ListItem>
              <ListItem>Music in Chicago</ListItem>
              <ListItem>Cinema in Chicago</ListItem>
              <ListItem>Comedy Clubs in Chicago</ListItem>
              <ListItem>Fun & Leisure in Chicago</ListItem>
              <ListItem>Clubs in Chicago</ListItem>
              <ListItem>Kids’ Activities in Chicago</ListItem>
            </UnorderedList>
          </>
        ) : (
          "..."
        )}
      </Text>
      <Flex justify="center" mt={4}>
        <Button
          size="sm"
          onClick={handleToggle}
          colorScheme="teal"
          px={{ base: 4, md: 6 }}
        >
          {showMore ? "Show Less" : "Read More"}
        </Button>
      </Flex>
    </Box>
  );
}
