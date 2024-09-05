import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, Text, BreadcrumbLink, Card, CardBody, Divider, Flex, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuList, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5'
import { TbCurrentLocation } from 'react-icons/tb'
import Nearlogo from '../nearby/NearLogo'
import { BiChevronDown, BiFilter, BiSlider } from 'react-icons/bi'
import { CiMap } from 'react-icons/ci'
import NearQs from '../nearby/NearQs'
import Nearfo from '../nearby/NearFo'
import NearData from '../components/NearData'


const Nearby = () => {
  return (
    <Box>
      <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Nearby</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>


      <Flex  marginTop={5} p={3}>
        <Flex p={2} gap={2}>
          <Box p={2}>
            <GoArrowLeft size={30} />
          </Box>
          <Text fontWeight={700} fontSize={30}>Deals in and near</Text>
        </Flex>
        <Menu >
          {({ isOpen }) => (
            <>
              <MenuButton fontWeight={700} fontSize={30} isActive={isOpen} as={Text} borderRadius={20} m={2}>
                {isOpen ? 'Chicago,IL' : 'Chicago,IL'}
              </MenuButton>
              <MenuList>
                <Card w={600}>
                  <CardBody >
                    <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                        <IoLocationSharp />
                      </InputLeftElement>
                      <Input type='tel' placeholder='Zip Code, Neighborhood,City' />
                    </InputGroup>
                    <Flex p={5} gap={5}>
                      <TbCurrentLocation size={20} color='blue' />
                      <Text color='blue'>Set Current Location</Text>
                    </Flex>
                    <Divider />
                    <Text p={10}></Text>
                  </CardBody>
                </Card>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>

      <Nearlogo />

      <Flex justifyContent="space-between" p={5}>
        <Flex gap={2}>
          <Flex border="1px solid #eeeff1" p={2} gap={1} borderRadius={20} backgroundColor="#eeeff1">
            <BiSlider size={25} />
            <Text fontWeight={600}>Show Filters</Text>
          </Flex>
          <Text p={2}>5,536 deals</Text>
        </Flex>
        <Flex gap={2}>
          <Flex border="1px solid #eeeff1" p={2} gap={1} borderRadius={20} backgroundColor="#eeeff1">
            <BiFilter size={25} />
            <Text fontWeight={600}>Sort</Text>
            <BiChevronDown size={25} />
          </Flex>

          <Button leftIcon={<CiMap />} backgroundColor="white" border="1px solid" borderRadius={20}>
            Show on Map
          </Button>
        </Flex>
      </Flex>

      <NearData/>

      <NearData/>

      <NearQs />

      <Flex direction="column">
        <Text fontWeight={600} fontSize={25}>Frequently Asked Questions</Text>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' fontWeight={600}>
                  What is the best time to visit Chicago?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Chicago can be visited any time of the year. However, the best time to visit Chicago is during the spring (April through June) and the fall (September through October), when temperatures are mild and there are numerous festivals to enjoy.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' fontWeight={600}>
                  What neighborhoods should I explore in Chicago?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontWeight={600}>
              Chicago is filled with vibrant neighborhoods worth exploring. These include Magnificent Mile, known for its shopping; Lincoln Park, home to the free Lincoln Park Zoo; Hyde Park, where the University of Chicago and President Obama's old home is located; and Wicker Park, known for its indie spirit, among others.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' fontWeight={600}>
                  What famous attractions can I check out in Chicago?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              There are numerous famous attractions in Chicago. These include the Navy Pier, the Art Institute of Chicago, the Skydeck Chicago - Willis Tower, and the Chicago Riverwalk, amongst others
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' fontWeight={600}>
                  What food is Chicago known for?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Chicago is famous for its food. Some traditional and famous foods include Chicago-style pizza, Chicago-style hot dogs, and Italian Beef. Additionally, it's a city with a varied and vibrant dining scene, with many top-rated restaurants.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' fontWeight={600}>
                  What transportation options are available in Chicago?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Chicago has a very comprehensive transportation system which includes the 'L' train, buses, taxis, rideshares like Uber and Lyft, and bike sharing with Divvy. It's also a walkable city with many attractions within walking distance depending on where you're staying.
            </AccordionPanel>
          </AccordionItem>


        </Accordion>
      </Flex>

      <Nearfo/>
    </Box>
  )
}

export default Nearby