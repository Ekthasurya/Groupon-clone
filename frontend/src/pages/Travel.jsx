import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import TravelData from '../components/TravelData'

const Travel = () => {
  return (
    <Box padding={5}>
      <Flex p={2} gap={2} direction={{ base: 'column', sm: 'row' }} align="center">
        <Text fontWeight={700} fontSize={{ base: '20px', sm: '30px' }}>Travel</Text>
      </Flex>

      {/* Category Boxes - Responsive Grid */}
      <Flex wrap="wrap" justify="space-between" gap={5} mt={5}>
        {["Family", "City", "Beach Destinations", "Waterparks", "Outdoor Activities", "Romantic", "Casinos", "Air-Inclusive"].map((category, index) => (
          <Box 
            key={index} 
            display="flex" 
            width={{ base: '100%', sm: '48%', md: '23%' }} 
            height="80px"  
            p={4} 
            borderRadius="md" 
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" 
            alignItems="center" 
            justifyContent="center"  
            _hover={{ border: "2px solid" }}
          >
            <Text fontWeight={500} textAlign="center">{category}</Text>
          </Box>
        ))}
      </Flex>

      {/* Show Map Button */}
      <Flex justify="end" gap={5} paddingTop={10}>
        <Button bg="white" borderRadius={20} border="1px solid" size={{ base: 'sm', md: 'md' }}>
          Show Map
        </Button>
      </Flex>

      <TravelData />
    </Box>
  )
}

export default Travel
