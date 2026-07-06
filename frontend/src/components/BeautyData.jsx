import { Box, Flex, Text, Button, Grid } from '@chakra-ui/react';
import { FaGift } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const BeautyData = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // State to manage sort order

  useEffect(() => {
    fetch('https://groupon-clone-2.onrender.com/beauty/get-beauties')
      .then((res) => res.json())
      .then((res) => setData(res.beauty));
  }, []);

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedData = [...data].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    setData(sortedData);
  };

  return (
    <div>
      {/* Sorting Buttons */}
      <Flex justifyContent="center" mb={4} gap={4}>
        <Button
          colorScheme="teal"
          variant={sortOrder === 'asc' ? 'solid' : 'outline'}
          onClick={() => handleSort('asc')}
        >
          Low to High
        </Button>
        <Button
          colorScheme="teal"
          variant={sortOrder === 'desc' ? 'solid' : 'outline'}
          onClick={() => handleSort('desc')}
        >
          High to Low
        </Button>
      </Flex>

      {/* Display Data */}
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',    // 1 column on small screens
          sm: 'repeat(2, 1fr)',      // 2 columns on small screens
          md: 'repeat(3, 1fr)',      // 3 columns on medium screens
          lg: 'repeat(4, 1fr)',      // 4 columns on large screens
        }}
        gap={6} // Add some spacing between the grid items
        padding={4} // Add padding around the grid
      >
        {data.map((ele) => (
          <Box key={ele._id} w="full">
            <Box w="100%" p={6}>
              <Link to={`/Beauty-and-Spas/${ele._id}`}>
                <Box
                  w="100%"
                  borderRadius={10}
                  h={200}
                  bgImage={`url(${ele.image})`}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                >
                  <Flex justifyContent="space-between" p={3}>
                    <Flex backgroundColor="white" p={2} borderRadius={3} gap={2}>
                      <FaGift size={25} color="purple" />
                      <Text>Popular Gift</Text>
                    </Flex>
                    <Box backgroundColor="white" borderRadius={50}>
                      <Box padding={1}>
                        <CiHeart size={25} />
                      </Box>
                    </Box>
                  </Flex>
                </Box>
                <Flex justifyContent="space-between" mt={2}>
                  <Box fontWeight={600}>{ele.title}</Box>
                  <Box>
                    <Text color="green" fontWeight={600}>
                      ${ele.price}
                    </Text>
                  </Box>
                </Flex>
              </Link>
            </Box>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default BeautyData;
