import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Box, Flex, Text } from "@chakra-ui/react";
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
    slidesToShow: 5, // Default for large screens
    slidesToScroll: 5, // Scroll 5 items at a time
    responsive: [
      {
        breakpoint: 1024, // Medium screens (tablets)
        settings: {
          slidesToShow: 3, // Show 3 items
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600, // Small screens (mobiles)
        settings: {
          slidesToShow: 1, // Show 1 item
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box padding={4}>
      <Slider {...settings}>
        <Flex direction="column" align="center" border="1px solid #eeeff1" borderRadius="10px" p={3} >
          <FaBorderAll size={25} />
          <Text textAlign="center">All</Text>
        </Flex>

        <Flex direction="column" align="center" border="1px solid #eeeff1" borderRadius="10px" p={3} >
          <PiBroomBold size={25} />
          <Text textAlign="center">Face & Skin Care</Text>
          <Text fontSize="xs" bg="#eeeff1" borderRadius="10px" p={1}>500+</Text>
        </Flex>

        <Flex direction="column" align="center" border="1px solid #eeeff1" borderRadius="10px" p={3} >
          <BiInjection size={25} />
          <Text textAlign="center">Cosmetic Procedures</Text>
          <Text fontSize="xs" bg="#eeeff1" borderRadius="10px" p={1}>467+</Text>
        </Flex>

        <Flex direction="column" align="center" border="1px solid #eeeff1" borderRadius="10px" p={3} >
          <MdFace3 size={25} />
          <Text textAlign="center">Salons</Text>
          <Text fontSize="xs" bg="#eeeff1" borderRadius="10px" p={1}>335+</Text>
        </Flex>

        <Flex direction="column" align="center" border="1px solid #eeeff1" borderRadius="10px" p={3} >
          <TbMassage size={25} />
          <Text textAlign="center">Massage</Text>
          <Text fontSize="xs" bg="#eeeff1" borderRadius="10px" p={1}>335+</Text>
        </Flex>

        <Flex direction="column" align="center" border="1px solid #eeeff1" borderRadius="10px" p={3} >
          <TbVaccineBottle size={25} />
          <Text textAlign="center">Hair Removal</Text>
          <Text fontSize="xs" bg="#eeeff1" borderRadius="10px" p={1}>201+</Text>
        </Flex>

        <Flex direction="column" align="center" border="1px solid #eeeff1" borderRadius="10px" p={3} >
          <PiEyeDuotone size={25} />
          <Text textAlign="center">Brows & Lashes</Text>
          <Text fontSize="xs" bg="#eeeff1" borderRadius="10px" p={1}>197+</Text>
        </Flex>

        <Flex direction="column" align="center" border="1px solid #eeeff1" borderRadius="10px" p={3} >
          <MdFace3 size={25} />
          <Text textAlign="center">Hair & Styling</Text>
          <Text fontSize="xs" bg="#eeeff1" borderRadius="10px" p={1}>177+</Text>
        </Flex>

        <Flex direction="column" align="center" border="1px solid #eeeff1" borderRadius="10px" p={3} >
          <MdOutlinePanoramaPhotosphere size={25} />
          <Text textAlign="center">Spas</Text>
          <Text fontSize="xs" bg="#eeeff1" borderRadius="10px" p={1}>156+</Text>
        </Flex>
      </Slider>
    </Box>
  );
}

export default Beautylogo;
