import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import GiftData from '../components/GiftData'

const Gift = () => {
  return (
    <Box>
      <GiftData />

      <Box
  w={{ base: "100%", md: 1300 }} // Set width to 100% on smaller screens, 1300px on medium and larger screens
  backgroundSize="cover"
  h={{ base: "auto", md: 325 }} // Set height to auto on small screens, 325px on medium and larger screens
  backgroundPosition="center"
  borderRadius={20}
  marginLeft={{ base: 0, md: 10 }} // No margin on small screens, margin on medium and larger screens
  backgroundRepeat="no-repeat"
  backgroundImage="url('https://img.grouponcdn.com/sls/3gYiYpGigQQ55ZYzYo3Nif6XNWVw/3g-1208x327.webp')"
  padding={3}
>
  <Flex
    direction="column"
    paddingLeft={{ base: 5, md: 10 }} // Adjust padding based on screen size
    paddingTop={{ base: 20, md: 40 }} // Adjust padding based on screen size
    gap={3}
    align={{ base: "center", md: "start" }} // Align text to center on small screens, start on medium and larger
    textAlign={{ base: "center", md: "left" }} // Center-align text on small screens, left-align on medium and larger
  >
    <Text
      fontSize={{ base: "24px", md: "30px" }} // Adjust font size for responsiveness
      fontWeight={700}
      color="White"
      textAlign={{ base: "center", md: "left" }} // Center text on small screens, left-align on medium and larger
    >
      Give the Gift of Groupon
    </Text>
    <Text
      fontSize={{ base: "16px", md: "20px" }} // Adjust font size for responsiveness
      fontWeight={500}
      color="White"
      textAlign={{ base: "center", md: "left" }} // Center text on small screens, left-align on medium and larger
    >
      The perfect gift for any occasion.
    </Text>
    <Button
      w={{ base: "100%", md: 150 }} // Set button width to 100% on smaller screens
      h={50}
      border="1px solid"
      borderRadius={50}
      fontSize={{ base: "14px", md: "16px" }} // Adjust font size of button
      textAlign="center"
    >
      Shop Gift Cards
    </Button>
  </Flex>
</Box>

    </Box>
  )
}

export default Gift
