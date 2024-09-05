import { Box ,Divider,Flex,Text} from '@chakra-ui/react'
import React from 'react'
import { CiGift } from 'react-icons/ci'
import { GiKnifeFork } from 'react-icons/gi'
import { GoChevronRight } from 'react-icons/go'
import { IoBedOutline, IoLocationOutline } from 'react-icons/io5'
import { PiFlowerLotusThin } from 'react-icons/pi'
import { RiCouponLine, RiHomeOfficeLine } from 'react-icons/ri'
import { SlBag } from 'react-icons/sl'

const Thingsfo = () => {
  return (
    <Box padding={5}>
        
        <Flex direction="column" gap={2} h={80}>
          <Text marginBottom={3} fontWeight={600} fontSize={20}>Popular categories</Text>
          <Flex justifyContent="space-between">
          <Flex>
            <Box border="1px solid #eeeff1" w={150} p={2}  h={70} borderRadius={10} >
           <Flex  textAlign="center" justifyContent="center"> <IoLocationOutline  size={25}/></Flex><Text textAlign="center">Nearby</Text>
            </Box>
          </Flex>

          <Flex>
            <Box border="1px solid #eeeff1" w={150} p={2}  h={70} borderRadius={10} >
           <Flex  textAlign="center" justifyContent="center"><CiGift size={25}/></Flex><Text textAlign="center">Gifts</Text>
            </Box>
          </Flex>

          <Flex>
            <Box border="1px solid #eeeff1" w={150} p={2}  h={70} borderRadius={10} >
           <Flex  textAlign="center" justifyContent="center"> <PiFlowerLotusThin size={20}/></Flex><Text textAlign="center">Beauty & Spas</Text>
            </Box>
          </Flex>

          <Flex>
            <Box border="1px solid #eeeff1" w={150} p={2}  h={90} borderRadius={10} >
           <Flex  textAlign="center" justifyContent="center"> <RiHomeOfficeLine  size={25}/></Flex><Text textAlign="center">Auto & Home Improvement</Text>
            </Box>
          </Flex>

          <Flex>
            <Box border="1px solid #eeeff1" w={150} p={2}  h={70} borderRadius={10}>
           <Flex  textAlign="center" justifyContent="center"> <GiKnifeFork  size={25}/></Flex><Text textAlign="center">Food & Drink</Text>
            </Box>
          </Flex>

          <Flex>
            <Box border="1px solid #eeeff1" w={150} p={2}  h={70} borderRadius={10}>
           <Flex  textAlign="center" justifyContent="center"> <SlBag  size={25}/></Flex><Text textAlign="center">Goods</Text>
            </Box>
          </Flex>

          <Flex>
            <Box border="1px solid #eeeff1" w={150} p={2}  h={70} borderRadius={10}>
           <Flex  textAlign="center" justifyContent="center"> <IoBedOutline  size={25}/></Flex><Text textAlign="center">Travel</Text>
            </Box>
          </Flex>

          </Flex>

          <Flex>
            <Box border="1px solid #eeeff1" w={150} p={2}  h={70} borderRadius={10} >
           <Flex  textAlign="center" justifyContent="center"> <RiCouponLine  size={25}/></Flex><Text textAlign="center">Coupons</Text>
            </Box>
          </Flex>
        </Flex>

        <Divider orientation='horizontal' />



        <Flex direction="column" marginTop={5} >
         <Text marginBottom={3} fontWeight={600} fontSize={20}>Popular Searches</Text>

         <Flex justifyContent="space-between">
         <Flex border="1px solid #eeeff1" w={210} p={1} borderRadius={10}>
          <Text>Food & Drink in Chicago</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={210} p={1} borderRadius={10}>
          <Text>Things To Do in Chicago</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={180} p={1} borderRadius={10}>
          <Text> Massage in Chicago</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={250} p={1} borderRadius={10}>
          <Text>Couples Massage in Chicago</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={150} p={1} borderRadius={10}>
          <Text>Spas in Chicago</Text>
          <GoChevronRight size={25} />
          </Flex>
          </Flex>
          </Flex>
          <br /> <br />

          <Divider orientation='horizontal' />

        <Flex direction="column" marginTop={5} >
         <Text marginBottom={3} fontWeight={600} fontSize={20}>Neighborhoods</Text>

         <Flex justifyContent="space-between">
         <Flex border="1px solid #eeeff1" w={130} p={1} borderRadius={10}>
          <Text>Lincoln Park</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={120} p={1} borderRadius={10}>
          <Text>West Loop</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={150} p={1} borderRadius={10}>
          <Text> Near North Side</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={110} p={1} borderRadius={10}>
          <Text>Lakeview</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={120} p={1} borderRadius={10}>
          <Text>The Loop</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={120} p={1} borderRadius={10}>
          <Text>Wicker Park</Text>
          <GoChevronRight size={25} />
          </Flex>

          </Flex>
          </Flex>

          <br /> <br />

          <Divider orientation='horizontal' />

         <Flex direction="column" marginTop={5} >
         <Text marginBottom={3} fontWeight={600} fontSize={20}>Searches Nearby</Text>

         <Flex justifyContent="space-between" gap={5}>
         <Flex border="1px solid #eeeff1" w={200} p={1} borderRadius={10}>
          <Text>Restaurants in Chicago</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={150} p={1} borderRadius={10}>
          <Text>Pizza in Chicago</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={250} p={1} borderRadius={10}>
          <Text>Italian Restaurants in Chicago</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={160} p={1} borderRadius={10}>
          <Text>Sports in Chicago</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={150} p={1} borderRadius={10}>
          <Text>Bars in Chicago</Text>
          <GoChevronRight size={25} />
          </Flex>

          
          </Flex>
          </Flex>
          
        
        
          

          



           
         
    </Box>
  )
}

export default Thingsfo