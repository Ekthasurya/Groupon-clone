import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Flex,Text } from "@chakra-ui/react";
import { FaBorderAll } from "react-icons/fa";
import { PiBroomBold, PiEyeDuotone, PiFlowerLotusThin } from "react-icons/pi";
import { MdDeliveryDining, MdElectricalServices, MdFace3, MdLightbulbOutline, MdOutlinePanoramaPhotosphere } from "react-icons/md";
import { BiInjection } from "react-icons/bi";
import { TbMassage, TbTargetArrow, TbVaccineBottle } from "react-icons/tb";
import { LuHeartPulse } from "react-icons/lu";
import { RiHomeHeartLine } from "react-icons/ri";
import { GiComputerFan, GiHomeGarage, GiKnifeFork } from "react-icons/gi";
import { LiaBroomSolid } from "react-icons/lia";
import { TfiLayoutColumn3 } from "react-icons/tfi";
import { FaMaskFace, FaUserDoctor } from "react-icons/fa6";



function Autologo() {
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
        <Flex border="1px solid #eeeff1" w={250} gap={1} p={2} borderRadius={10}> <TfiLayoutColumn3 size={25}/> <Text>Patio, Lawn & Garden</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>500+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={250} gap={1} p={2} borderRadius={10}> <GiHomeGarage size={25}/> <Text>Automotive Products</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>467+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={250} gap={1} p={2} borderRadius={10}> <FaMaskFace size={25}/> <Text>Home Improvement</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>335+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={230} gap={1} p={2} borderRadius={10}> <GiComputerFan size={25}/> <Text>Heating & Cooling</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>335+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={190} gap={1} p={2} borderRadius={10}> <MdLightbulbOutline size={25}/> <Text>Lighting</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>201+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <MdElectricalServices size={25}/> <Text>Electrical</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>197+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <FaUserDoctor size={25}/> <Text>Outdoor Decor</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>177+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={200} gap={1} p={2} borderRadius={10}> <LiaBroomSolid size={25}/> <Text>Home Services</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>156+</Text></Flex>
       </Flex>
       
       
    
        
      </Slider>
    </div>
  );
}

export default Autologo;
