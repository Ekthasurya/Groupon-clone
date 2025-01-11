import { Box, Button, Text, Input, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({ name: '', cardNumber: '', expiry: '', cvv: '' });
  const navigate = useNavigate();

  const handlePayment = () => {
    alert('Payment Successful!');
    localStorage.removeItem('cart');
    navigate('/');
  };

  return (
    <Box padding={[4, 6, 10]}>
      <Text fontSize={['2xl', '3xl', '30px']} fontWeight={700} mb={6} textAlign="center">
        Payment
      </Text>
      <Flex
        flexDirection="column"
        gap={4}
        maxWidth={['100%', '400px']}
        margin="0 auto"
        padding={4}
        boxShadow={['none', 'md']}
        borderRadius="8px"
        backgroundColor={['transparent', 'white']}
      >
        <Input
          placeholder="Name on Card"
          value={paymentDetails.name}
          onChange={(e) => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
          size={['sm', 'md']}
        />
        <Input
          placeholder="Card Number"
          value={paymentDetails.cardNumber}
          onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
          size={['sm', 'md']}
        />
        <Input
          placeholder="Expiry Date (MM/YY)"
          value={paymentDetails.expiry}
          onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value })}
          size={['sm', 'md']}
        />
        <Input
          placeholder="CVV"
          type="password"
          value={paymentDetails.cvv}
          onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
          size={['sm', 'md']}
        />
        <Button
          colorScheme="teal"
          size={['sm', 'md']}
          width={['100%', 'auto']}
          onClick={handlePayment}
        >
          Pay Now
        </Button>
      </Flex>
    </Box>
  );
};

export default PaymentPage;
