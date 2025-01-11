import { Box, Flex, Text, Button, Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaGift } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TravelData = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // State for sorting order

  useEffect(() => {
    fetch('https://groupon-backend-2.onrender.com/travel/get-travels')
      .then((res) => res.json())
      .then((res) => setData(res.travel));
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
          Sort by Price: Low to High
        </Button>
        <Button
          colorScheme="teal"
          variant={sortOrder === 'desc' ? 'solid' : 'outline'}
          onClick={() => handleSort('desc')}
        >
          Sort by Price: High to Low
        </Button>
      </Flex>

      {/* Display Items in a Responsive Grid */}
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',   // 1 column for mobile
          sm: 'repeat(2, 1fr)',     // 2 columns for small screens (tablet)
          md: 'repeat(3, 1fr)',     // 3 columns for medium screens (desktop)
          lg: 'repeat(4, 1fr)',     // 4 columns for large screens
        }}
        gap={6}  // Space between items
        padding={4}  // Padding around the grid
      >
        {data.map((ele) => (
          <Box key={ele._id} w="full" p={6}>
            <Link to={`/travel/${ele._id}`}>
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
                  <Box backgroundColor="white" borderRadius={25}>
                    <Box padding={1}>
                      <CiHeart size={25} />
                    </Box>
                  </Box>
                </Flex>
              </Box>
              <Flex justifyContent="space-between" mt={2}>
                <Box fontWeight={600}>{ele.title}</Box>
                <Box>
                  <Text color="green" fontWeight={600}>${ele.price}</Text>
                </Box>
              </Flex>
            </Link>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default TravelData;
