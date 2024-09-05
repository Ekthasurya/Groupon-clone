import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from "react";
import { FaCircle, FaRegCheckCircle } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import GiftData from '../components/GiftData'

const Gift = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked1, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  const [isClicked6, setIsClicked6] = useState(false);
  const [isClicked7, setIsClicked7] = useState(false);
  const [isClicked8, setIsClicked8] = useState(false);
  const [isClicked9, setIsClicked9] = useState(false);
  const [isClicked10, setIsClicked10] = useState(false);
  const [isClicked11, setIsClicked11] = useState(false);
  const [isClicked12, setIsClicked12] = useState(false);
  const [isClicked13, setIsClicked13] = useState(false);
  const [isClicked14, setIsClicked14] = useState(false);
  const [isClicked15, setIsClicked15] = useState(false);
  const [isClicked16, setIsClicked16] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClick2 = () => {
    setIsClicked2(!isClicked2);
  };

  const handleClick3 = () => {
    setIsClicked3(!isClicked1);
  };

  const handleClick4 = () => {
    setIsClicked4(!isClicked4);
  };

  const handleClick5 = () => {
    setIsClicked5(!isClicked5);
  };

  const handleClick6 = () => {
    setIsClicked6(!isClicked6);
  };

  const handleClick7 = () => {
    setIsClicked7(!isClicked7);
  };

  const handleClick8 = () => {
    setIsClicked8(!isClicked8);
  };

  const handleClick9 = () => {
    setIsClicked9(!isClicked9);
  };

  const handleClick10 = () => {
    setIsClicked10(!isClicked10);
  };

  const handleClick11 = () => {
    setIsClicked11(!isClicked11);
  };

  const handleClick12 = () => {
    setIsClicked12(!isClicked12);
  };

  const handleClick13 = () => {
    setIsClicked13(!isClicked13);
  };

  const handleClick14 = () => {
    setIsClicked14(!isClicked14);
  };

  const handleClick15 = () => {
    setIsClicked15(!isClicked15);
  };

  const handleClick16 = () => {
    setIsClicked16(!isClicked16);
  };
  return (
    <Box>
      <Box backgroundColor="#b20b8e" h={500} paddingTop={130} paddingLeft={70} >
        <Flex backgroundColor='white' w={1150} h={300}  gap={3} borderRadius={50} direction="column" >
          <Flex gap={50} paddingLeft={10} paddingTop={3}>
            <Flex direction="column" gap={5}>
              <Text fontWeight={600}>Recipient</Text>
              <Flex gap={1}>

                <Button fontSize={12} onClick={handleClick} bg={isClicked ? "Black" : "White"} color={isClicked ? "White" : "Black"} border="1px solid black" borderRadius={20}>
                  For Him
                </Button>

                <Button fontSize={12} onClick={handleClick2} bg={isClicked2 ? "Black" : "White"} color={isClicked2 ? "White" : "Black"} border="1px solid black" borderRadius={20}>
                  For Her
                </Button>

                <Button fontSize={12} onClick={handleClick3} bg={isClicked1 ? "Black" : "White"} color={isClicked1 ? "White" : "Black"} border="1px solid black" borderRadius={20}>
                  For Couples
                </Button>

                <Button fontSize={12} onClick={handleClick4} bg={isClicked4 ? "Black" : "White"} color={isClicked4 ? "White" : "Black"} border="1px solid black" borderRadius={20}>
                  For Kids
                </Button>
              </Flex>
            </Flex>

            <Flex direction="column" gap={5}>
              <Text fontWeight={600}>Occasions</Text>
              <Flex gap={1}>

                <Button fontSize={12} onClick={handleClick5} bg={isClicked5 ? "Black" : "White"} color={isClicked5 ? "White" : "Black"} border="1px solid black" borderRadius={20}>
                  Anniversary
                </Button>

                <Button fontSize={12} onClick={handleClick6} bg={isClicked6 ? "Black" : "White"} color={isClicked6 ? "White" : "Black"} border="1px solid black" borderRadius={20}>
                  Wedding
                </Button>

                <Button fontSize={12} onClick={handleClick7} bg={isClicked7 ? "Black" : "White"} color={isClicked7 ? "White" : "Black"} border="1px solid black" borderRadius={20}>
                  Birthday
                </Button>

                <Button fontSize={12} onClick={handleClick8} bg={isClicked8 ? "Black" : "White"} color={isClicked8 ? "White" : "Black"} border="1px solid black" borderRadius={20}>
                  Graduation
                </Button>
              </Flex>
            </Flex>

          </Flex>
          <Flex direction="column" paddingLeft={10} gap={5}>
            <Text>Interests</Text>
            <Flex gap={1}>

              <Button fontSize={12} onClick={handleClick9} bg={isClicked9 ? "Black" : "White"} color={isClicked9 ? "White" : "Black"} leftIcon={isClicked9 ? <FaRegCheckCircle size={20} /> : <FaCircle size={20} />} border="1px solid black" borderRadius={20}>
                For Foodies
              </Button>

              <Button fontSize={12} onClick={handleClick10} bg={isClicked10 ? "Black" : "White"} color={isClicked10 ? "White" : "Black"} leftIcon={isClicked9 ? <FaRegCheckCircle size={20} /> : <FaCircle size={20} />} border="1px solid black" borderRadius={20}>
                For Relaxing
              </Button>

              <Button fontSize={12} onClick={handleClick11} bg={isClicked11 ? "Black" : "White"} color={isClicked11 ? "White" : "Black"} leftIcon={isClicked9 ? <FaRegCheckCircle size={20} /> : <FaCircle size={20} />} border="1px solid black" borderRadius={20}>
                For Care
              </Button>

              <Button fontSize={12} onClick={handleClick12} bg={isClicked12 ? "Black" : "White"} color={isClicked12 ? "White" : "Black"} leftIcon={isClicked9 ? <FaRegCheckCircle size={20} /> : <FaCircle size={20} />} border="1px solid black" borderRadius={20}>
                For Sports
              </Button>

              <Button fontSize={12} onClick={handleClick13} bg={isClicked13 ? "Black" : "White"} color={isClicked13 ? "White" : "Black"} leftIcon={isClicked9 ? <FaRegCheckCircle size={20} /> : <FaCircle size={20} />} border="1px solid black" borderRadius={20}>
                For Fun Leisure
              </Button>

              <Button fontSize={12} onClick={handleClick14} bg={isClicked14 ? "Black" : "White"} color={isClicked14 ? "White" : "Black"} leftIcon={isClicked9 ? <FaRegCheckCircle size={20} /> : <FaCircle size={20} />} border="1px solid black" borderRadius={20}>
                For Housewarming
              </Button>

              <Button fontSize={12} onClick={handleClick15} bg={isClicked15 ? "Black" : "White"} color={isClicked15 ? "White" : "Black"} leftIcon={isClicked9 ? <FaRegCheckCircle size={20} /> : <FaCircle size={20} />} border="1px solid black" borderRadius={20}>
                For For Travlers
              </Button>

              <Button fontSize={12} onClick={handleClick16} bg={isClicked16 ? "Black" : "White"} color={isClicked16 ? "White" : "Black"} leftIcon={isClicked9 ? <FaRegCheckCircle size={20} /> : <FaCircle size={20} />} border="1px solid black" borderRadius={20}>
                For Learnig
              </Button>
            </Flex>
          </Flex>


          <Flex paddingLeft={10} justifyContent="space-evenly">
            <Flex direction="column">
              <Text>Price</Text>
              <Select placeholder='Any Price' w={250}>
                <option value='option1'>Under $10.0</option>
                <option value='option2'>Under $20.0</option>
                <option value='option3'>Under $50.0</option>
                <option value='option3'>Under $100.0</option>
                <option value='option3'>$100.0+</option>
              </Select>
            </Flex>
            <Flex direction="column">
              <Text>Location</Text>
              <InputGroup w={250}>
                <InputLeftElement pointerEvents='none'>
                <IoLocationOutline size={20} />
                </InputLeftElement>
                <Input type='tel' placeholder='Chicago' />
              </InputGroup>
            </Flex>
            <Box padding={5}>
            <Button bg="green" w={500} borderRadius={20} color="white" >Search Gifts</Button>
            </Box>
          </Flex>



        </Flex>
      </Box> 

    <GiftData/>

      <Box  w={1300} backgroundSize="cover" h={325}
      backgroundPosition="center" borderRadius={20}
      backgroundRepeat="no-repeat" backgroundImage="url('https://img.grouponcdn.com/sls/3gYiYpGigQQ55ZYzYo3Nif6XNWVw/3g-1208x327.webp')" >
        
        <Flex direction="column" paddingLeft={5} paddingTop={40} gap={1}>
          <Text fontSize={30} fontWeight={700} color="White">Give the Gift of Groupon</Text>
          <Text fontSize={20} fontWeight={500} color="White" >The perfect gift for any occasion.</Text>
          <Button w={150} h={50} border="1px solid" borderRadius={50}>Shop Gift Cards</Button>
        </Flex>
      </Box>

      <GiftData/>

    </Box>
  )
}

export default Gift