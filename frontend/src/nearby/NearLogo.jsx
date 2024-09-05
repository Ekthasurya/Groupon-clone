import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Flex,Text } from "@chakra-ui/react";
import { FaBorderAll } from "react-icons/fa";
import { PiBroomBold, PiEyeDuotone, PiFlowerLotusThin } from "react-icons/pi";
import { MdDeliveryDining, MdFace3, MdOutlinePanoramaPhotosphere } from "react-icons/md";
import { BiInjection } from "react-icons/bi";
import { TbMassage, TbTargetArrow, TbVaccineBottle } from "react-icons/tb";
import { LuHeartPulse } from "react-icons/lu";
import { RiHomeHeartLine } from "react-icons/ri";
import { GiHomeGarage, GiKnifeFork } from "react-icons/gi";
import { LiaBroomSolid } from "react-icons/lia";



function Nearlogo() {
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
        <Flex border="1px solid #eeeff1" w={200} gap={1} p={2} borderRadius={10}> <PiFlowerLotusThin size={25}/> <Text>Beauty & Spas</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>500+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <MdDeliveryDining size={25}/> <Text>Personal Services</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>467+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <LuHeartPulse size={25}/> <Text>Health & Fitness</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>335+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <TbTargetArrow size={25}/> <Text>Things To Do</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>335+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={190} gap={1} p={2} borderRadius={10}> <RiHomeHeartLine size={25}/> <Text>Retail</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>201+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <GiKnifeFork size={25}/> <Text>Food & Drink</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>197+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={190} gap={1} p={2} borderRadius={10}> <GiHomeGarage size={25}/> <Text>AutoMative</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>177+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={200} gap={1} p={2} borderRadius={10}> <LiaBroomSolid size={25}/> <Text>Home Services</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>156+</Text></Flex>
       </Flex>
       
       
    
        
      </Slider>
    </div>
  );
}

export default Nearlogo;
