import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const navigate = useNavigate();

  // Calculate total price and total quantity
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  const totalQuantity = cart.length;

  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <Box padding={[4, 6, 10]}>
      <Text fontSize={['xl', '2xl', '30px']} fontWeight={700} mb={4}>
        Your Cart
      </Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty!</Text>
      ) : (
        <Box>
          {cart.map((item, index) => (
            <Flex
              key={index}
              justifyContent={['flex-start', 'space-between']}
              flexDirection={['column', 'row']}
              alignItems={['flex-start', 'center']}
              mb={4}
              p={4}
              borderBottom="1px solid #e1e1e1"
            >
              <Flex flexDirection={['column', 'row']} alignItems={['flex-start', 'center']} mb={[4, 0]}>
                <Image
                  src={item.image}
                  alt={item.title}
                  boxSize={['80px', '100px']}
                  objectFit="cover"
                  borderRadius="8px"
                  mr={[0, 4]}
                  mb={[2, 0]}
                />
                <Text fontWeight={500} width={['100%', '200px']}>
                  {item.title}
                </Text>
              </Flex>
              <Text fontWeight={600} mt={[2, 0]}>
                ${item.price}
              </Text>
              <Button
                colorScheme="red"
                size={['sm', 'md']}
                mt={[2, 0]}
                onClick={() => handleRemove(index)}
              >
                Remove
              </Button>
            </Flex>
          ))}

          {/* Cart Summary */}
          <Box mt={6} p={4} borderTop="1px solid #e1e1e1">
            <Flex justifyContent="space-between" mb={2} flexDirection={['column', 'row']} gap={[2, 0]}>
              <Text fontWeight={600}>Total Items:</Text>
              <Text fontWeight={600}>{totalQuantity}</Text>
            </Flex>
            <Flex justifyContent="space-between" mb={4} flexDirection={['column', 'row']} gap={[2, 0]}>
              <Text fontWeight={600}>Total Price:</Text>
              <Text fontWeight={600}>${totalPrice.toFixed(2)}</Text>
            </Flex>
            <Button
              colorScheme="teal"
              width={['100%', 'auto']}
              onClick={handleCheckout}
            >
              Proceed to Payment
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
