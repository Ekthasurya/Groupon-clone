import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Box, Flex, Text } from "@chakra-ui/react";
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
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Box padding="10px">
      <Slider {...settings}>
        <Flex direction="column" align="center">
          <Flex
            border="1px solid #eeeff1"
            w={{ base: "100%", sm: "250px" }}
            gap={1}
            p={2}
            borderRadius={10}
            justify="center"
            align="center"
          >
            <FaBorderAll size={25} />
            <Text textAlign="center" fontSize={{ base: "10px", sm: "14px" }}>
              All
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="center">
          <Flex
            border="1px solid #eeeff1"
            w={{ base: "100%", sm: "250px" }}
            gap={1}
            p={2}
            borderRadius={10}
            justify="center"
            align="center"
          >
            <TfiLayoutColumn3 size={25} />
            <Text textAlign="center" fontSize={{ base: "10px", sm: "14px" }}>
              Patio, Lawn & Garden
            </Text>
            <Text
              border="1px solid #eeeff1"
              backgroundColor="#eeeff1"
              borderRadius={10}
              fontSize={{ base: "8px", sm: "10px" }}
              p={1}
            >
              500+
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="center">
          <Flex
            border="1px solid #eeeff1"
            w={{ base: "100%", sm: "250px" }}
            gap={1}
            p={2}
            borderRadius={10}
            justify="center"
            align="center"
          >
            <GiHomeGarage size={25} />
            <Text textAlign="center" fontSize={{ base: "10px", sm: "14px" }}>
              Automotive Products
            </Text>
            <Text
              border="1px solid #eeeff1"
              backgroundColor="#eeeff1"
              borderRadius={10}
              fontSize={{ base: "8px", sm: "10px" }}
              p={1}
            >
              467+
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="center">
          <Flex
            border="1px solid #eeeff1"
            w={{ base: "100%", sm: "230px" }}
            gap={1}
            p={2}
            borderRadius={10}
            justify="center"
            align="center"
          >
            <FaMaskFace size={25} />
            <Text textAlign="center" fontSize={{ base: "10px", sm: "14px" }}>
              Home Improvement
            </Text>
            <Text
              border="1px solid #eeeff1"
              backgroundColor="#eeeff1"
              borderRadius={10}
              fontSize={{ base: "8px", sm: "10px" }}
              p={1}
            >
              335+
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="center">
          <Flex
            border="1px solid #eeeff1"
            w={{ base: "100%", sm: "230px" }}
            gap={1}
            p={2}
            borderRadius={10}
            justify="center"
            align="center"
          >
            <GiComputerFan size={25} />
            <Text textAlign="center" fontSize={{ base: "10px", sm: "14px" }}>
              Heating & Cooling
            </Text>
            <Text
              border="1px solid #eeeff1"
              backgroundColor="#eeeff1"
              borderRadius={10}
              fontSize={{ base: "8px", sm: "10px" }}
              p={1}
            >
              335+
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="center">
          <Flex
            border="1px solid #eeeff1"
            w={{ base: "100%", sm: "190px" }}
            gap={1}
            p={2}
            borderRadius={10}
            justify="center"
            align="center"
          >
            <MdLightbulbOutline size={25} />
            <Text textAlign="center" fontSize={{ base: "10px", sm: "14px" }}>
              Lighting
            </Text>
            <Text
              border="1px solid #eeeff1"
              backgroundColor="#eeeff1"
              borderRadius={10}
              fontSize={{ base: "8px", sm: "10px" }}
              p={1}
            >
              201+
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="center">
          <Flex
            border="1px solid #eeeff1"
            w={{ base: "100%", sm: "210px" }}
            gap={1}
            p={2}
            borderRadius={10}
            justify="center"
            align="center"
          >
            <MdElectricalServices size={25} />
            <Text textAlign="center" fontSize={{ base: "10px", sm: "14px" }}>
              Electrical
            </Text>
            <Text
              border="1px solid #eeeff1"
              backgroundColor="#eeeff1"
              borderRadius={10}
              fontSize={{ base: "8px", sm: "10px" }}
              p={1}
            >
              197+
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="center">
          <Flex
            border="1px solid #eeeff1"
            w={{ base: "100%", sm: "210px" }}
            gap={1}
            p={2}
            borderRadius={10}
            justify="center"
            align="center"
          >
            <FaUserDoctor size={25} />
            <Text textAlign="center" fontSize={{ base: "10px", sm: "14px" }}>
              Outdoor Decor
            </Text>
            <Text
              border="1px solid #eeeff1"
              backgroundColor="#eeeff1"
              borderRadius={10}
              fontSize={{ base: "8px", sm: "10px" }}
              p={1}
            >
              177+
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="center">
          <Flex
            border="1px solid #eeeff1"
            w={{ base: "100%", sm: "200px" }}
            gap={1}
            p={2}
            borderRadius={10}
            justify="center"
            align="center"
          >
            <LiaBroomSolid size={25} />
            <Text textAlign="center" fontSize={{ base: "10px", sm: "14px" }}>
              Home Services
            </Text>
            <Text
              border="1px solid #eeeff1"
              backgroundColor="#eeeff1"
              borderRadius={10}
              fontSize={{ base: "8px", sm: "10px" }}
              p={1}
            >
              156+
            </Text>
          </Flex>
        </Flex>
      </Slider>
    </Box>
  );
}

export default Autologo;
