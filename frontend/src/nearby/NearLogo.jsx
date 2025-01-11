import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Flex, Text } from "@chakra-ui/react";
import { FaBorderAll } from "react-icons/fa";
import { PiFlowerLotusThin } from "react-icons/pi";
import { MdDeliveryDining } from "react-icons/md";
import { LuHeartPulse } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import { RiHomeHeartLine } from "react-icons/ri";
import { GiHomeGarage, GiKnifeFork } from "react-icons/gi";
import { LiaBroomSolid } from "react-icons/lia";

function Nearlogo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default number of slides
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const categories = [
    { icon: FaBorderAll, label: "All" },
    { icon: PiFlowerLotusThin, label: "Beauty & Spas", count: "500+" },
    { icon: MdDeliveryDining, label: "Personal Services", count: "467+" },
    { icon: LuHeartPulse, label: "Health & Fitness", count: "335+" },
    { icon: TbTargetArrow, label: "Things To Do", count: "335+" },
    { icon: RiHomeHeartLine, label: "Retail", count: "201+" },
    { icon: GiKnifeFork, label: "Food & Drink", count: "197+" },
    { icon: GiHomeGarage, label: "AutoMative", count: "177+" },
    { icon: LiaBroomSolid, label: "Home Services", count: "156+" },
  ];

  return (
    <div className="slider-container" style={{ padding: "10px" }}>
      <Slider {...settings}>
        {categories.map((category, idx) => (
          <Flex key={idx} justifyContent="center" p={2}>
            <Flex
              border="1px solid #eeeff1"
              w={{ base: "90%", sm: "80%", md: "70%" }}
              gap={2}
              p={2}
              borderRadius={10}
              alignItems="center"
              justifyContent="space-between"
            >
              <category.icon size={25} />
              <Text fontSize={{ base: "sm", md: "md" }}>{category.label}</Text>
              {category.count && (
                <Text
                  border="1px solid #eeeff1"
                  backgroundColor="#eeeff1"
                  borderRadius={10}
                  fontSize={{ base: "xs", md: "sm" }}
                  p={1}
                >
                  {category.count}
                </Text>
              )}
            </Flex>
          </Flex>
        ))}
      </Slider>
    </div>
  );
}

export default Nearlogo;
