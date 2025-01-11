import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Text,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Checkbox,
  IconButton
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { IoSearchCircleOutline, IoLocationSharp, IoCartOutline, IoPersonOutline, IoLocationOutline } from 'react-icons/io5';
import { TbCurrentLocation } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CiGift } from 'react-icons/ci';
import { PiFlowerLotusThin } from 'react-icons/pi';
import { TbTargetArrow } from 'react-icons/tb';
import { RiHomeOfficeLine } from 'react-icons/ri';
import { GiKnifeFork } from 'react-icons/gi';
import { SlBag } from 'react-icons/sl';
import { IoBedOutline } from 'react-icons/io5';
import { RiCouponLine } from 'react-icons/ri';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IoIosSearch } from 'react-icons/io';


const Navbar = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isSmallScreen = useBreakpointValue({ base: true, md: false }); 

  const handleSubmit = async () => {
    const payload = { name, email, password };
    try {
      await fetch('https://groupon-backend-2.onrender.com/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      alert('User registered successfully');
    } catch (error) {
      alert(`An error occurred ${error}`);
    }
  };

  const handleLogin = async () => {
    const payload = { email, password };
    try {
      const response = await fetch('https://groupon-backend-2.onrender.com/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        alert(data.message);
      }
    } catch (error) {
      alert(`An error occurred ${error}`);
    }
  };

  return (
    <Box>
      <Flex direction="row" justifyContent="space-between" alignItems="center" p={3}>
        <Link to="/">
          <img
            style={{ width: '120px', height: '25px' }}
            src="https://freelogopng.com/images/all_img/1659808264groupon-logo-png.png"
            alt="logo"
          />
        </Link>

        {/* Search bar */}
        {!isSmallScreen && (
        <InputGroup w={530}>
          <InputLeftElement>
            <IoIosSearch size={25} />
          </InputLeftElement>
          <Input placeholder="Search for deals" borderRadius={30} h="3rem" />
          <InputRightElement width="12.5rem">
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    borderRadius={20}
                    m={2}
                  >
                    {isOpen ? 'Chicago, IL' : 'Chicago, IL'}
                  </MenuButton>
                  <MenuList>
                    <Card w={500}>
                      <CardBody>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <IoLocationSharp />
                          </InputLeftElement>
                          <Input type="tel" placeholder="Zip Code, Neighborhood, City" />
                        </InputGroup>
                        <Flex p={5} gap={5}>
                          <TbCurrentLocation size={20} color="blue" />
                          <Text color="blue">Set Current Location</Text>
                        </Flex>
                        <Divider />
                        <Text p={10}></Text>
                      </CardBody>
                    </Card>
                  </MenuList>
                </>
              )}
            </Menu>
            <IoSearchCircleOutline size={40} color="green" />
          </InputRightElement>
        </InputGroup>
      )}
        {/* Icons */}
        <Flex gap={10} justifyContent="space-around">
          <Link to="/wishlist">
            <FaRegHeart size={30} />
          </Link>
          <Link to="/cart">
            <IoCartOutline size={30} />
          </Link>
          <IoPersonOutline size={30} onClick={() => setDrawerOpen(true)} />
        </Flex>

        {/* Hamburger Icon for Mobile */}
        {isMobile && (
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={() => setMenuOpen(!isMenuOpen)}
            display={{ base: 'block', md: 'none' }}
          />
        )}
      </Flex>

      {/* Mobile Drawer for Sign In & Menu */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={() => setDrawerOpen(false)}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Sign In</DrawerHeader>
            <DrawerBody>
              <Tabs>
                <TabList>
                  <Tab>I have an account</Tab>
                  <Tab>I'm a new customer</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Flex direction="column" p={5} gap={4}>
                      <Text textAlign="center" fontWeight={300}>
                        Or sign in with email
                      </Text>
                      <Divider orientation="horizontal" />
                      <Box>
                        <Input
                          placeholder="Email"
                          size="md"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Box>
                      <Box>
                        <Input
                          placeholder="Password"
                          size="md"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Box>
                      <Flex justifyContent="space-between">
                        <Box>
                          <Checkbox defaultChecked>
                            <Text fontSize={12}>Remember me</Text>
                          </Checkbox>
                        </Box>
                        <Box>
                          <Text fontSize={12}>Forgot Password?</Text>
                        </Box>
                      </Flex>
                      <Button bg="#008b22" size="md" onClick={handleLogin}>
                        Sign In
                      </Button>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <Flex direction="column" p={5} gap={4}>
                      <Text textAlign="center" fontWeight={300}>
                        Or sign up with email
                      </Text>
                      <Divider orientation="horizontal" />
                      <Box>
                        <Input
                          placeholder="Name"
                          size="md"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Box>
                      <Box>
                        <Input
                          placeholder="Email"
                          size="md"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Box>
                      <Box>
                        <Input
                          placeholder="Password"
                          size="md"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Box>
                      <Flex justifyContent="space-between" direction="column" gap={2}>
                        <Box>
                          <Checkbox defaultChecked>
                            <Text fontSize={12}>
                              Yes, I want to save money by receiving personalized Groupon emails with awesome deals
                            </Text>
                          </Checkbox>
                        </Box>
                        <Box>
                          <Text fontSize={13}>
                            By creating an account, you agree to our Terms of Service
                          </Text>
                        </Box>
                      </Flex>
                      <Button bg="#008b22" size="md" onClick={handleSubmit}>
                        Sign Up
                      </Button>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Desktop Menu */}
      {!isMobile && (
        <Flex boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" justifyContent="space-between" p={5}>
          <Link to="/nearby">
            <Flex _hover={{ color: 'green', textDecoration: '2px solid green' }} gap={1}>
              <IoLocationOutline size={20} />
              <Text>Nearby</Text>
            </Flex>
          </Link>
          <Link to="/gift">
            <Flex _hover={{ color: 'green' }} gap={1}>
              <CiGift size={20} />
              <Text>Gifts</Text>
            </Flex>
          </Link>
          <Link to="/Beauty-and-Spas">
            <Flex _hover={{ color: 'green' }} gap={1}>
              <PiFlowerLotusThin size={20} />
              <Text>Beauty & Spas</Text>
            </Flex>
          </Link>
          <Link to="/things">
            <Flex _hover={{ color: 'green' }} gap={1}>
              <TbTargetArrow size={20} />
              <Text>Things To Do</Text>
            </Flex>
          </Link>
          <Link to="/autohome">
            <Flex _hover={{ color: 'green' }} gap={1}>
              <RiHomeOfficeLine size={20} />
              <Text>Auto & Home Improvement</Text>
            </Flex>
          </Link>
          <Link to="/food">
            <Flex _hover={{ color: 'green' }} gap={1}>
              <GiKnifeFork size={20} />
              <Text>Food & Drink</Text>
            </Flex>
          </Link>
          <Link to="/goods">
            <Flex _hover={{ color: 'green' }} gap={1}>
              <SlBag size={20} />
              <Text>Goods</Text>
            </Flex>
          </Link>
          <Link to="/travel">
            <Flex _hover={{ color: 'green' }} gap={1}>
              <IoBedOutline size={20} />
              <Text>Travel</Text>
            </Flex>
          </Link>
          <Link to="/coupons">
            <Flex _hover={{ color: 'green' }} gap={1}>
              <RiCouponLine size={20} />
              <Text>Coupons</Text>
            </Flex>
          </Link>
        </Flex>
      )}

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
  <Drawer isOpen={isMenuOpen} placement="left" onClose={() => setMenuOpen(false)}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <Stack spacing={4}>
            <Link to="/nearby">
              <Flex align="center" gap={3}>
                <IoLocationOutline size={20} />
                <Text p={2}>Nearby</Text>
              </Flex>
            </Link>
            <Link to="/gift">
              <Flex align="center" gap={3}>
                <CiGift size={20} />
                <Text p={2}>Gifts</Text>
              </Flex>
            </Link>
            <Link to="/Beauty-and-Spas">
              <Flex align="center" gap={3}>
                <PiFlowerLotusThin size={20} />
                <Text p={2}>Beauty & Spas</Text>
              </Flex>
            </Link>
            <Link to="/things">
              <Flex align="center" gap={3}>
                <TbTargetArrow size={20} />
                <Text p={2}>Things To Do</Text>
              </Flex>
            </Link>
            <Link to="/autohome">
              <Flex align="center" gap={3}>
                <RiHomeOfficeLine size={20} />
                <Text p={2}>Auto & Home Improvement</Text>
              </Flex>
            </Link>
            <Link to="/food">
              <Flex align="center" gap={3}>
                <GiKnifeFork size={20} />
                <Text p={2}>Food & Drink</Text>
              </Flex>
            </Link>
            <Link to="/goods">
              <Flex align="center" gap={3}>
                <SlBag size={20} />
                <Text p={2}>Goods</Text>
              </Flex>
            </Link>
            <Link to="/travel">
              <Flex align="center" gap={3}>
                <IoBedOutline size={20} />
                <Text p={2}>Travel</Text>
              </Flex>
            </Link>
            <Link to="/coupons">
              <Flex align="center" gap={3}>
                <RiCouponLine size={20} />
                <Text p={2}>Coupons</Text>
              </Flex>
            </Link>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
)}

    </Box>
  );
};

export default Navbar;
