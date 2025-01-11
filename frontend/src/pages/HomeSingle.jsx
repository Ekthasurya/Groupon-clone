import { Box, Button, Divider, Flex, Text, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FaFireFlameCurved } from 'react-icons/fa6';
import { GrMapLocation } from 'react-icons/gr';
import { IoBagOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';

const HomeSingle = () => {
  const [data1, setData1] = useState({});
  const { _id } = useParams();

  useEffect(() => {
    fetch(`https://groupon-backend-2.onrender.com/home/get-home/${_id}`)
      .then((res) => res.json())
      .then((data) => setData1(data.home));
  }, [_id]);

  // Method to add item to the cart
  const addToCart = () => {
    const product = {
      _id: data1._id,
      title: data1.title,
      price: data1.price,
      image: data1.image,
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productExists = cart.find((item) => item._id === product._id);

    if (!productExists) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Item added to cart!');
    } else {
      alert('Item is already in the cart!');
    }
  };

  return (
    <Box padding={[4, 6, 10]}>
      <Flex
        flexDirection={['column', 'column', 'row']}
        justifyContent="space-between"
        gap={[4, 6, 10]}
      >
        {/* Left Section */}
        <Flex flexDirection="column" w={['100%', '100%', '750px']}>
          <Text fontSize={['lg', '2xl', '30px']} fontWeight={700}>
            {data1?.title}
          </Text>
          <Flex
            gap={[2, 4]}
            p={[1, 2]}
            flexWrap="wrap"
            alignItems="center"
          >
            <Flex gap={1} alignItems="center">
              <Box p={1}>
                <GrMapLocation />
              </Box>
              <Text>Bowlero</Text>
            </Flex>
            <Divider orientation="vertical" />
            <Flex gap={1} alignItems="center">
              <Box p={1}>
                <FaRegStar color="yellow" />
              </Box>
              <Text>{data1?.rating}</Text>
            </Flex>
          </Flex>

          <Flex
            p={[1, 2]}
            gap={2}
            flexWrap="wrap"
          >
            <Flex
              border="1px solid #eeeff1"
              p={2}
              borderRadius={5}
              alignItems="center"
            >
              <Box p={1}>
                <FaRegStar color="yellow" />
              </Box>
              <Text>Best Rated</Text>
            </Flex>
            <Flex
              border="1px solid #eeeff1"
              p={2}
              borderRadius={5}
              alignItems="center"
            >
              <Box p={1}>
                <FaFireFlameCurved color="orange" />
              </Box>
              <Text>10,000 Bought</Text>
            </Flex>
            <Flex
              border="1px solid #eeeff1"
              p={2}
              borderRadius={5}
              alignItems="center"
            >
              <Box p={1}>
                <IoBagOutline />
              </Box>
              <Text>950+ Bought Today</Text>
            </Flex>
          </Flex>
          <Box p={3} w="100%">
            <Image
              borderRadius="20px"
              src={data1?.image}
              alt="Product Image"
              width="100%"
            />
          </Box>

          <Divider orientation="horizontal" />

          <Text fontSize={['md', 'lg', '20px']}>{data1?.description}</Text>

          <Divider orientation="horizontal" />
        </Flex>

        {/* Right Section */}
        <Flex
          direction="column"
          marginTop={[4, 6, 40]}
          w={['100%', '100%', 'auto']}
          alignItems={['center', 'center', 'flex-start']}
        >
          <Flex
            flexDirection={['column', 'row']}
            alignItems={['flex-start', 'center']}
            gap={[2, 4]}
            textAlign={['center', 'left']}
          >
            
            <Text fontSize={['md', 'lg', '25px']} fontWeight={600}>
              for 2 people to bowl 2 hours + includes free shoe rental
            </Text>
          </Flex>
          <Text
            fontSize={['lg', 'xl', '25px']}
            fontWeight={600}
            color="green"
            textAlign="center"
            mt={[2, 4]}
          >
            ${data1?.price}
          </Text>
          <Button
            bg="#008b22"
            onClick={addToCart}
            mt={[2, 4]}
            size={['sm', 'md', 'lg']}
          >
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeSingle;
