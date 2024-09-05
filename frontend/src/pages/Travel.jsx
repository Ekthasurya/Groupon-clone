import { Box, Button, Flex,Text } from '@chakra-ui/react'
import React from 'react'
import TravelData from '../components/TravelData'

const Travel = () => {
  return (
    <Box padding={5}>
      <Flex p={2} gap={2}>
      <Text fontWeight={700} fontSize={30}>Travel</Text>
      </Flex>

      <Flex justifyContent="space-between">
      <Box display="flex" width="130px" height="80px"  p={4} borderRadius="md" boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" alignItems="center" justifyContent="center"  _hover={{border:"2px solid"}}>
     <Text fontWeight={500}>Family</Text>
    </Box>

    <Box display="flex" width="130px" height="80px"  p={4} borderRadius="md" boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" alignItems="center" justifyContent="center"  _hover={{border:"2px solid"}}>
     <Text fontWeight={500}>City</Text>
    </Box>

    <Box display="flex" width="130px" height="80px"  p={4} borderRadius="md" boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" alignItems="center" justifyContent="center"  _hover={{border:"2px solid"}}>
     <Text fontWeight={500} textAlign="center">Beach Destinations</Text>
    </Box>

    <Box display="flex" width="130px" height="80px"  p={4} borderRadius="md" boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" alignItems="center" justifyContent="center"  _hover={{border:"2px solid"}}>
     <Text fontWeight={500}>Waterparks</Text>
    </Box>

    <Box display="flex" width="130px" height="80px"  p={4} borderRadius="md" boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" alignItems="center" justifyContent="center"  _hover={{border:"2px solid"}}>
     <Text fontWeight={500} textAlign="center">Outdoor Activities</Text>
    </Box>

    <Box display="flex" width="130px" height="80px"  p={4} borderRadius="md" boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" alignItems="center" justifyContent="center"  _hover={{border:"2px solid"}}>
     <Text fontWeight={500}>Romantic</Text>
    </Box>

    <Box display="flex" width="130px" height="80px"  p={4} borderRadius="md" boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" alignItems="center" justifyContent="center"  _hover={{border:"2px solid"}}>
     <Text fontWeight={500}>Casinos</Text>
    </Box>

    <Box display="flex" width="130px" height="80px"  p={4} borderRadius="md" boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" alignItems="center" justifyContent="center"  _hover={{border:"2px solid"}}>
     <Text fontWeight={500}>Air-Inclusive</Text>
    </Box>
      </Flex>


      <Flex paddingLeft={1000} gap={5} paddingTop={10}>
        <Button bg="white" borderRadius={20} border="1px solid">Sort By</Button>
        <Button bg="white" borderRadius={20} border="1px solid" >Show Map</Button>
      </Flex>

      <TravelData/>
      <TravelData/>
    </Box>
  )
}

export default Travel