import { Box, Flex, Grid, GridItem, grid,Text } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaGift } from 'react-icons/fa'
import { IoHeartCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const FoodData = () => {
  const [data, setData] = useState([])
useEffect(() => {
    fetch('https://groupon-backend-2.onrender.com/food/get-foods')
      .then((e) => e.json())
      .then((e) => setData(e.food))
  })
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
      { data.map((ele) => (
        <Box>
          <Box w={430} p={6} key={ele._id}>
            <Link to={`/food/${ele._id}`}>
              <Box   w="100%" borderRadius={10}
       h={200}
      bgImage={`url(${ele.image})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover">
                
                <Flex justifyContent="space-between" p={3} >
                    <Flex backgroundColor="white" p={2} borderRadius={3} gap={2}>
                    <FaGift size={25} color='purple'/>
                    <Text>Popular Gift</Text>
                    </Flex>

                    <Box backgroundColor="white" borderRadius={25}>
                        <Box padding={1}>
                    <CiHeart size={25}/>
                    </Box>
                    </Box>
                </Flex>
              </Box>
              <Flex justifyContent="space-between">
                <Box fontWeight={500}>{ele.title}</Box> <Box><Text color="green" fontWeight={600}> ${ele.price}</Text></Box>
              </Flex>
            </Link>
          </Box>
        </Box>
      ))}
    </div>
  )
}

export default FoodData