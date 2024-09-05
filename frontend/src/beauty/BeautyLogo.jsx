import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Flex,Text } from "@chakra-ui/react";
import { FaBorderAll } from "react-icons/fa";
import { PiBroomBold, PiEyeDuotone } from "react-icons/pi";
import { MdFace3, MdOutlinePanoramaPhotosphere } from "react-icons/md";
import { BiInjection } from "react-icons/bi";
import { TbMassage, TbVaccineBottle } from "react-icons/tb";



function Beautylogo() {
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
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <PiBroomBold size={25}/> <Text>Face & Skin Care</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>500+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={250} gap={1} p={2} borderRadius={10}> <BiInjection size={25}/> <Text>Cosmetic Procedures</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>467+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={150} gap={1} p={2} borderRadius={10}> <MdFace3 size={25}/> <Text>Salons</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>335+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={150} gap={1} p={2} borderRadius={10}> <TbMassage size={25}/> <Text>Massage</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>335+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={190} gap={1} p={2} borderRadius={10}> <TbVaccineBottle size={25}/> <Text>Hair Removal</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>201+</Text></Flex>
       </Flex>

       <Flex >
        <Flex border="1px solid #eeeff1" w={210} gap={1} p={2} borderRadius={10}> <PiEyeDuotone size={25}/> <Text>Brows & Lashes</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>197+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={190} gap={1} p={2} borderRadius={10}> <MdFace3 size={25}/> <Text>Hair & Styling</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>177+</Text></Flex>
       </Flex>
       <Flex >
        <Flex border="1px solid #eeeff1" w={150} gap={1} p={2} borderRadius={10}> <MdOutlinePanoramaPhotosphere size={25}/> <Text>Spas</Text> <Text border="1px solid #eeeff1" backgroundColor="#eeeff1" borderRadius={10} fontSize={10} p={1}>156+</Text></Flex>
       </Flex>
       
       
    
        
      </Slider>
    </div>
  );
}

export default Beautylogo;
