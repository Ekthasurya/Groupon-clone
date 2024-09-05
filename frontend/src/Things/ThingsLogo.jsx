import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Flex,Text } from "@chakra-ui/react";
import { FaBorderAll } from "react-icons/fa";
import { PiBroomBold, PiEyeDuotone, PiFlowerLotusThin } from "react-icons/pi";
import { MdDeliveryDining, MdFace3, MdOutlinePanoramaPhotosphere, MdSportsHandball } from "react-icons/md";
import { BiInjection } from "react-icons/bi";
import { TbMassage, TbTargetArrow, TbVaccineBottle } from "react-icons/tb";
import { LuHeartPulse, LuPartyPopper, LuTrees } from "react-icons/lu";
import { RiHomeHeartLine } from "react-icons/ri";
import { GiHomeGarage, GiKidSlide, GiKnifeFork } from "react-icons/gi";
import { LiaBroomSolid } from "react-icons/lia";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { BsTicketDetailed } from "react-icons/bs";



function Thingslogo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  return (
    <div className="slider-container" style={{padding:"10px"}}>
      <Slider {...settings}>
       <Flex  >
        <Flex border="1px solid #eeeff1" w={20} gap={1} p={2} borderRadius={10}> <FaBorderAll size={25}/> <Text>All</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={200} gap={1} p={2} borderRadius={10}> <FaFaceGrinHearts size={25}/> <Text> Fun & Leisure</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>500+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <BsTicketDetailed size={25}/> <Text>Tickets & Events</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>467+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <LuPartyPopper size={25}/> <Text>Nightlife</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>335+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <GiKidSlide size={25}/> <Text>Kids Activities</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>335+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={230} gap={1} p={2} borderRadius={10}> <LuTrees size={25}/> <Text>Sightseeing & Tours</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>201+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={230} gap={1} p={2} borderRadius={10}> <MdSportsHandball size={25}/> <Text>Sports & Outdoors</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>197+</Text></Flex>
       </Flex>
       
       
       
    
        
      </Slider>
    </div>
  );
}

export default Thingslogo;
