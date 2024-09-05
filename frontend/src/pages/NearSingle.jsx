import { Box, Button, Divider, Flex ,Text,Image} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa';
import { FaFireFlameCurved } from 'react-icons/fa6';
import { GrMapLocation } from 'react-icons/gr';
import { IoBagOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';

const NearSingle = () => {
    const [data1,setData1]=useState({});
    const{_id}=useParams()

    useEffect(()=>{
        fetch(`https://groupon-backend-2.onrender.com/near/get-near/${_id}`)
        .then(e=>e.json())
        .then(e=>setData1(e.near))
    })
  return (
    <Box>
      <Flex  padding={10} justifyContent="space-between"  gap={5}>
        <Flex flexDirection="column" w={750}>
            <Text fontSize={30} fontWeight={700}>{data1?.title}</Text>
            <Flex gap={2} p={2}>
                <Flex gap={1}><Box p={1}><GrMapLocation /></Box> <Text>Bowlero</Text></Flex>
                <Divider orientation='vertical' />
                <Flex gap={1}><Box p={1}><FaRegStar color='yellow'/></Box> <Text>{data1?.rating}</Text></Flex>
            </Flex>

            <Flex p={2} gap={1}>
                <Flex border="1px solid #eeeff1" p={1} borderRadius={5}><Box p={1}><FaRegStar color='yellow'/></Box><Text>Best Rated</Text></Flex>
                <Flex border="1px solid #eeeff1" p={1} borderRadius={5}><Box p={1} ><FaFireFlameCurved  color='orange'/></Box><Text>10,000 Bought</Text></Flex>
                <Flex border="1px solid #eeeff1" p={1} borderRadius={5}><Box p={1}><IoBagOutline/></Box><Text>950+ Bougth Today</Text></Flex>
            </Flex>
            <Box p={3} w={700} ><img style={{borderRadius:"20px"}} src={data1?.image} alt='Dan Abramov' /></Box>

            <Divider orientation='horizontal' />

            <Text fontSize={20}>{data1?.description}</Text>

            <Divider orientation='horizontal' />
        </Flex>

        <Flex direction="column" marginTop={40}>
            <Flex><Text fontSize={25} fontWeight={600}>${data1?.price}</Text><Text fontSize={25} fontWeight={600}>for 2 people to bowl 2 hours + includes free shoe rental</Text></Flex>
             <Text fontSize={25} fontWeight={600} color="green" textAlign="center">${data1?.price}</Text>
             <Button bg="#008b22">Buy Now</Button>
        </Flex>
        


      
      </Flex>
         
    </Box>
  )
}

export default NearSingle