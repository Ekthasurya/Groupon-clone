import { Box ,Divider,Flex,Text} from '@chakra-ui/react'
import React from 'react'
import { CiGift } from 'react-icons/ci'
import { GiKnifeFork } from 'react-icons/gi'
import { GoChevronRight } from 'react-icons/go'
import { IoBedOutline, IoLocationOutline } from 'react-icons/io5'
import { PiFlowerLotusThin } from 'react-icons/pi'
import { RiCouponLine, RiHomeOfficeLine } from 'react-icons/ri'
import { SlBag } from 'react-icons/sl'

const Goodsfo = () => {
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

       


         

        
          
          <Divider orientation='horizontal' marginTop={10}/>

          <Flex direction="column" marginTop={5} >
         <Text marginBottom={3} fontWeight={600} fontSize={20}>Popular Searches</Text>

         <Flex justifyContent="space-between">
         <Flex border="1px solid #eeeff1" w={280} p={1} borderRadius={10}>
          <Text>Garnet, Opal Jewelry & Watches</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={280} p={1} borderRadius={10}>
          <Text>Paco Rabanne Health & Beauty</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={330} p={1} borderRadius={10}>
          <Text>Created Ruby, Peridot Jewelry & Watches</Text>
          <GoChevronRight size={25} />
          </Flex>

          <Flex border="1px solid #eeeff1" w={320} p={1} borderRadius={10}>
          <Text>Garnet, Peridot Jewelry & Watches</Text>
          <GoChevronRight size={25} />
          </Flex>


          </Flex>
          </Flex>
   
          

         

          



           
         
    </Box>
  )
}

export default Goodsfo