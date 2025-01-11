import { Box, Button, Flex, Text, Image, Center, Divider, Input, Avatar, Grid } from '@chakra-ui/react'
import React from 'react'
import { BsFillHandbagFill } from 'react-icons/bs'
import { FaBell, FaRegBell } from 'react-icons/fa'
import { GiCandleLight, GiClothes, GiLoincloth } from 'react-icons/gi'
import { IoIosHome } from 'react-icons/io'


const merchants = [
  {
    src: "https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/1_800_contacts_logo_2.jpg",
    offers: "25 Offers",
  },
  {
    src: "https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/amazon_logo_9.jpg",
    offers: "16 Offers",
  },
  {
    src: "https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/avis_logo_4.jpg",
    offers: "110 Offers",
  },
  {
    src: "https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/expedia_logo_18.jpg",
    offers: "23 Offers",
  },
  {
    src: "https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/sam_s_club_logo_2.jpg",
    offers: "122 Offers",
  },
  {
    src: "https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/the_home_depot_logo_1.jpg",
    offers: "23 Offers",
  },
  {
    src: "https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/viator_logo_12.jpg",
    offers: "56 Offers",
  },
  {
    src: "https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/wayfair_logo_4.jpg",
    offers: "27 Offers",
  },
];

const Coupons = () => {
  return (
    <Box p={5}>
      <Flex px={{ base: 4, md: 20, lg: 300 }} justifyContent="center">
        <Box
          w={{ base: "100%", md: 600, lg: 800 }}
          h={{ base: 200, md: 250 }}
          backgroundSize="cover"
          borderRadius={10}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundImage="url('https://img.grouponcdn.com/deal/25DgHydtFqmq2fnuGHPJH6mS8bx5/25-1200x720/v1/t440x300.webp')"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-start" }}
            justify="space-between"
            h="100%"
            px={{ base: 2, md: 5 }}
            py={{ base: 4, md: 10 }}
            gap={4}
          >
            <Text
              fontSize={{ base: 20, md: 25, lg: 30 }}
              fontWeight={700}
              color="white"
              textAlign={{ base: "center", md: "left" }}
            >
              Up To 70% off WayFair Labor Day Clearance
            </Text>
            <Box>
              <Button
                bg="green"
                color="white"
                w={{ base: "80%", md: 40 }}
                size={{ base: "sm", md: "md" }}
                _hover={{ bg: "darkgreen" }}
              >
                Get Deal
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex
        bg="purple"
        justifyContent="space-between"
        alignItems="center"
        px={{ base: 4, md: 10 }}
        py={{ base: 4, md: 7 }}
        mt={5}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 0 }}
      >
        <Box textAlign={{ base: "center", md: "left" }}>
          <Text
            color="white"
            fontWeight={700}
            fontSize={{ base: 20, md: 30 }}
          >
            Up To 70% Off Labor Day Clearance
          </Text>
          <Text
            color="white"
            fontWeight={500}
            fontSize={{ base: 14, md: 16 }}
          >
            at wayfair.com
          </Text>
        </Box>
        <Box>
          <Button
            w={{ base: "100%", md: 40 }}
            bg="black"
            color="white"
            _hover={{ bg: "darkgray" }}
          >
            Shop Now
          </Button>
        </Box>
      </Flex>


      <Flex direction="column" p={{ base: 4, md: 10 }}>
        <Text fontSize={{ base: "lg", md: "xl" }} mb={5}>
          Our Favorite Merchants
        </Text>
        <Flex
          wrap="wrap"
          justifyContent={{ base: "center", md: "space-between" }}
          gap={4}
        >
          {merchants.map((merchant, index) => (
            <Flex
              key={index}
              direction="column"
              alignItems="center"
              w={{ base: "45%", sm: "30%", md: "20%" }}
            >
              <Image
                border="1px solid #e5e6e7"
                boxSize="130px"
                objectFit="cover"
                src={merchant.src}
                alt={`Merchant ${index}`}
              />
              <Text textAlign="center" color="blue" mt={2}>
                {merchant.offers}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>


      <Box bg="#e5e6e7" paddingBottom={{ base: 5, md: 10 }} h="auto">
        <Text
          padding={{ base: 4, md: 7 }}
          fontSize={{ base: "lg", md: "2xl", lg: "30px" }}
          fontWeight={700}
          textAlign="center"
        >
          Trending Discount Codes & Coupons
        </Text>
      </Box>



      <Flex direction="column" padding={7}>
        <Text fontWeight={700} fontSize={30}>Top Offers by Category</Text>
        <Flex justifyContent="space-between">
          <Grid
            templateColumns={{
              base: 'repeat(2, 1fr)',    // 1 column on small screens
              sm: 'repeat(2, 1fr)',      // 2 columns on small screens
              md: 'repeat(3, 1fr)',      // 3 columns on medium screens
              lg: 'repeat(4, 1fr)',      // 4 columns on large screens
            }}
            gap={10} // Spacing between grid items
            padding={4} // Padding around the grid
          >
            <Flex direction={{ base: "column", lg: "row" }} gap={5} align="center">
              {/* Divider Section */}


              {/* Category Section */}
              <Flex
                direction={{ base: "column", lg: "column" }}
                gap={{ base: 4, md: 6 }}
                p={2}
              >
                <Flex gap={2} p={2}>
                  <Box>
                    <BsFillHandbagFill size={{ base: 20, md: 25 }} />
                  </Box>
                  <Text fontSize={{ base: "sm", md: "md" }}>Travel</Text>
                </Flex>

                <Flex gap={2} p={2}>
                  <Box>
                    <GiLoincloth size={{ base: 20, md: 25 }} />
                  </Box>
                  <Text fontSize={{ base: "sm", md: "md" }}>Women's Clothing</Text>
                </Flex>

                <Flex gap={2} p={2}>
                  <Box>
                    <GiClothes size={{ base: 20, md: 25 }} />
                  </Box>
                  <Text fontSize={{ base: "sm", md: "md" }}>Men's Clothing</Text>
                </Flex>

                <Flex gap={2} p={2}>
                  <Box>
                    <IoIosHome size={{ base: 20, md: 25 }} />
                  </Box>
                  <Text fontSize={{ base: "sm", md: "md" }}>Home & Garden</Text>
                </Flex>

                <Flex gap={2} p={2}>
                  <Box>
                    <GiCandleLight size={{ base: 20, md: 25 }} />
                  </Box>
                  <Text fontSize={{ base: "sm", md: "md" }}>Health & Beauty</Text>
                </Flex>

                <Text fontSize={{ base: "sm", md: "md" }}>View More</Text>
              </Flex>
            </Flex>

            <Flex direction="column" gap={{ base: 5, md: 7 }}>
              {/* First Item */}
              <Flex direction={{ base: "column", md: "row" }} gap={2}>
                <Box>
                  <Image
                    boxSize={{ base: '80px', md: '110px' }}
                    objectFit="cover"
                    src="https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/american_apparel_1.jpg"
                  />
                </Box>
                <Flex direction="column" gap={{ base: 4, md: 10 }}>
                  <Text fontSize={{ base: "sm", md: "md" }}>Get Women's Best <br />Sellers Starting At $12</Text>
                  <Divider orientation="horizontal" />
                </Flex>
              </Flex>

              {/* Second Item */}
              <Flex direction={{ base: "column", md: "row" }} gap={2}>
                <Box>
                  <Image
                    boxSize={{ base: '80px', md: '110px' }}
                    objectFit="cover"
                    src="https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/city_sightseeing_new_york_logo.jpg"
                    alt="Dan Abramov"
                  />
                </Box>
                <Flex direction="column" gap={{ base: 4, md: 9 }}>
                  <Text fontSize={{ base: "sm", md: "md" }}>20% Off New York <br />Sightseeing Pass Coupon Code</Text>
                  <Divider orientation="horizontal" />
                </Flex>
              </Flex>

              {/* Third Item */}
              <Flex direction={{ base: "column", md: "row" }} gap={2}>
                <Box>
                  <Image
                    boxSize={{ base: '80px', md: '110px' }}
                    objectFit="cover"
                    src="https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/booking_com_logo_1.jpg"
                    alt="Dan Abramov"
                  />
                </Box>
                <Flex direction="column" gap={{ base: 4, md: 9 }}>
                  <Text fontSize={{ base: "sm", md: "md" }}>30% Off - Booking.com <br />Coupons</Text>
                  <Divider orientation="horizontal" />
                </Flex>
              </Flex>
            </Flex>

            <Flex direction="column" gap={{ base: 5, md: 7 }}>
              {/* First Item */}
              <Flex direction={{ base: "column", md: "row" }} gap={2}>
                <Box>
                  <Image
                    boxSize={{ base: '80px', md: '110px' }}
                    objectFit="cover"
                    src="https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/expedia_logo_18.jpg"
                    alt="Dan Abramov"
                  />
                </Box>
                <Flex direction="column" gap={{ base: 4, md: 6 }}>
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    Cheap airfare, hotels, <br /> car rentals, vacations, <br /> and cruises at <br /> Expedia.com! (Coupon)
                  </Text>
                  <Divider orientation="horizontal" />
                </Flex>
              </Flex>

              {/* Second Item */}
              <Flex direction={{ base: "column", md: "row" }} gap={2}>
                <Box>
                  <Image
                    boxSize={{ base: '80px', md: '110px' }}
                    objectFit="cover"
                    src="https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/qatar_airways_logo_10.jpg"
                    alt="Dan Abramov"
                  />
                </Box>
                <Flex direction="column" gap={{ base: 4, md: 4 }}>
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    Flights to and from <br /> Colombo Airport | <br /> Qatar Airways Coupon
                  </Text>
                  <Divider orientation="horizontal" />
                </Flex>
              </Flex>

              {/* Third Item */}
              <Flex direction={{ base: "column", md: "row" }} gap={2}>
                <Box>
                  <Image
                    boxSize={{ base: '80px', md: '110px' }}
                    objectFit="cover"
                    src="https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/hotels_com_logo_6.jpg"
                    alt="Dan Abramov"
                  />
                </Box>
                <Flex direction="column" gap={{ base: 4, md: 4 }}>
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    25% Or More Off Your <br /> Dream Hotel Stay - <br /> Hotels.com Coupon
                  </Text>
                  <Divider orientation="horizontal" />
                </Flex>
              </Flex>
            </Flex>

            <Flex direction="column" gap={7}>
              <Flex gap={2}>
                <Box>
                  <Image boxSize='110px' objectFit='cover' src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/priceline_logo_8.jpg' alt='Dan Abramov' />
                </Box>
                <Flex direction="column" gap={10}>
                  <Text>15% Off Priceline <br /> Coupon</Text>
                  <Divider orientation='horizontal' />
                </Flex>
              </Flex>

              <Flex gap={2}>
                <Box>
                  <Image boxSize='110px' objectFit='cover' src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/booking_com_logo_1.jpg' alt='Dan Abramov' />
                </Box>
                <Flex direction="column" gap={3}>
                  <Text>15% Or More Off <br /> Getaways |  <br /> Booking.com Promo Code</Text>
                  <Divider orientation='horizontal' />
                </Flex>
              </Flex>

              <Flex gap={2}>
                <Box>
                  <Image boxSize='11 0px' objectFit='cover' src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/expedia_logo_18.jpg' alt='Dan Abramov' />
                </Box>
                <Flex direction="column" gap={6}>
                  <Text>Last-Minute Hotel <br /> Deals From Expedia</Text>
                  <Divider orientation='horizontal' />
                </Flex>
              </Flex>
            </Flex>
          </Grid>

        </Flex>
      </Flex>


      <Flex direction="column" padding={5} gap={4}>
        <Text fontWeight={700} fontSize={{ base: "20px", md: "30px" }}>
          This is the best way to save more with Groupon coupons
        </Text>
        <Flex direction={{ base: "column", md: "row" }} gap={4} justifyContent="space-between">
          <Text fontSize={{ base: "sm", md: "md" }}>
            Saving money is a breeze with Groupon coupons. With your favorite fashion stores like Nike, American Eagle and Old Navy plus many more all ready and waiting with money-saving opportunities, whether you’re looking for new Levi’s jeans or for kids’ accessories like hats and bags, you’ll have the best choice around. The Groupon app is so useful to have on your phone and this is where you’ll find the best deals whilst you’re on the move! Keep in touch to stay in the know about the latest sales to land, Exclusive coupons and tons more that will keep you and your bank balance happy! The best way to use our Groupon coupons is to select the ‘see sale’ option from the active offers listed and this will unlock different types of money-saving opportunities like Vistaprint free shipping, student discounts, exclusive Costco membership deals and way more! Why not browse the travel category to save cash on your next amazing experience in 2024? How much money you save each time is totally down to the offer you choose, so discover what’s on offer today and live your best life with Groupon coupons!
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }}>
            Groupon Coupons brings everything you love about the pioneering money-saving platform to the world of promo codes. By working directly with national brands—and relying on the money-saving tricks we’ve learned over the past 10 years—we’re able to deliver 100% real promo codes and coupons for stores like Target, eBay, Bed Bath and Beyond, and thousands more.
            When we say “100% real,” we mean that every single one of our promo codes, flash sales, and offers has been vetted and verified by our dedicated brand experts. That means, when you see a promo code on Groupon Coupons, you can trust that it works. Best of all, they’re all 100% free and easy to use. Just click and save!
            We also make shopping easy with promo codes and savings guides for everything from Halloween costumes to the best Black Friday deals. Get started by browsing department store promo codes & sales to shop the best deals from Macy’s, Nordstrom, and other amazing stores. Treat yourself by grabbing something off our Free Samples page, where you’ll find everything from free beauty gifts from Saks Fifth Avenue and Sephora to diapers and baby goods from Huggies. You could even start planning your next vacation with our collection of travel promo codes from sites like Hotwire, Travelocity, and Expedia.
          </Text>
        </Flex>
      </Flex>



      <Flex
        p={7}
        gap={10}
        border="1px solid green"
        marginLeft={{ base: 5, md: 10 }}
        marginRight={{ base: 5, md: 10 }}
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        <Flex justifyContent="space-between" gap={5} direction={{ base: "column", md: "row" }} align="center">
          <Box>
            <FaRegBell color="green" size={50} />
          </Box>
          <Text fontWeight={600} fontSize={{ base: "16px", md: "20px" }} textAlign={{ base: "center", md: "left" }}>
            Subscribe to our emails now and never miss our best <br /> coupons!
          </Text>
        </Flex>

        <Flex direction="column" gap={2} align={{ base: "center", md: "flex-start" }}>
          <Flex justifyContent="space-between" gap={5} direction={{ base: "column", sm: "row" }} w="100%">
            <Input placeholder="Email" w={{ base: "100%", sm: 350 }} />
            <Button
              w={{ base: "100%", sm: 180 }}
              bg="white"
              color="green"
              border="1px solid"
              mt={{ base: 3, sm: 0 }}
            >
              Subscribe
            </Button>
          </Flex>
          <Text fontSize="12px" textAlign={{ base: "center", md: "left" }}>
            By clicking the Subscribe button, I agree to the Terms of Use and have read the Privacy Statement.
          </Text>
        </Flex>
      </Flex>



      <Flex direction="column" p={10} gap={5} bg="#eeeff1">
        <Text fontWeight={600} fontSize={{ base: "24px", md: "30px" }}>
          Popular Stores at Groupon
        </Text>

        {/* First Row of Items */}
        <Flex wrap="wrap" gap={5} justifyContent="space-between">
          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 130 }} p={2}>
            <Text color="blue">1800 Flowers</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">adidas</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">Amazon</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 130 }} p={2}>
            <Text color="blue">American Eagle</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">Ancestry</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 70 }} p={2}>
            <Text color="blue">ASOS</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 200 }} p={2}>
            <Text color="blue">Bed Bath and Beyond</Text>
          </Flex>
        </Flex>

        {/* Second Row of Items */}
        <Flex wrap="wrap" gap={5} justifyContent="space-between">
          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">boohoo</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 70 }} p={2}>
            <Text color="blue">Costco</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 70 }} p={2}>
            <Text color="blue">eBay</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 190 }} p={2}>
            <Text color="blue">Edible Arrangements</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">Expedia</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 100 }} p={2}>
            <Text color="blue">Forever 21</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 110 }} p={2}>
            <Text color="blue">H&R Block</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 70 }} p={2}>
            <Text color="blue">Kohl's</Text>
          </Flex>
        </Flex>

        {/* Third Row of Items */}
        <Flex wrap="wrap" gap={5} justifyContent="space-between">
          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">L.L.Bean</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">Lowe's</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">Macy's</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">Michaels</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">Old Navy</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 110 }} p={2}>
            <Text color="blue">Quickbooks</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 100 }} p={2}>
            <Text color="blue">Samsung</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 100 }} p={2}>
            <Text color="blue">Sephora</Text>
          </Flex>
        </Flex>

        {/* Fourth Row of Items */}
        <Flex wrap="wrap" gap={5} justifyContent="space-between">
          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 70 }} p={2}>
            <Text color="blue">Target</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 150 }} p={2}>
            <Text color="blue">The Home Depot</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">TJ Maxx</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 100 }} p={2}>
            <Text color="blue">TurboTax</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">Udemy</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 90 }} p={2}>
            <Text color="blue">Verizon</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg="white" w={{ base: "auto", sm: 100 }} p={2}>
            <Text color="blue">Walmart</Text>
          </Flex>
        </Flex>
      </Flex>



      <Flex direction="column" gap={5} p={5}>
        {/* First Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          wrap="wrap"
          gap={5}
        >
          <Box p={1}>
            <Avatar
              size={{ base: "xs", md: "2xs" }}
              name="Dan Abrahmov"
              src="https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller"
            />
          </Box>
          <Text color="blue" fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
            Sephora Sales Calendar
          </Text>

          <Box p={1}>
            <Avatar
              size={{ base: "xs", md: "2xs" }}
              name="Dan Abrahmov"
              src="https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller"
            />
          </Box>
          <Text color="blue" fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
            Shein Size Guide
          </Text>

          <Box p={1}>
            <Avatar
              size={{ base: "xs", md: "2xs" }}
              name="Dan Abrahmov"
              src="https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller"
            />
          </Box>
          <Text color="blue" fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
            Hobby Lobby Sales Calendar
          </Text>

          <Box p={1}>
            <Avatar
              size={{ base: "xs", md: "2xs" }}
              name="Dan Abrahmov"
              src="https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller"
            />
          </Box>
          <Text color="blue" fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
            Ulta Beauty Sales Calendar
          </Text>

          <Box p={1}>
            <Avatar
              size={{ base: "xs", md: "2xs" }}
              name="Dan Abrahmov"
              src="https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller"
            />
          </Box>
          <Text color="blue" fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
            Nordstrom Sales Calendar
          </Text>
        </Flex>

        {/* Second Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          wrap="wrap"
          gap={5}
        >
          <Box p={1}>
            <Avatar
              size={{ base: "xs", md: "2xs" }}
              name="Dan Abrahmov"
              src="https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller"
            />
          </Box>
          <Text color="blue" fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
            Fourth of July Offers
          </Text>

          <Box p={1}>
            <Avatar
              size={{ base: "xs", md: "2xs" }}
              name="Dan Abrahmov"
              src="https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller"
            />
          </Box>
          <Text color="blue" fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
            Amazon Prime Days Offers
          </Text>

          <Box p={1}>
            <Avatar
              size={{ base: "xs", md: "2xs" }}
              name="Dan Abrahmov"
              src="https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller"
            />
          </Box>
          <Text color="blue" fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
            Summer Sale
          </Text>

          <Box p={1}>
            <Avatar
              size={{ base: "xs", md: "2xs" }}
              name="Dan Abrahmov"
              src="https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller"
            />
          </Box>
          <Text color="blue" fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
            Back To School Sales
          </Text>
        </Flex>

        {/* Footer Text */}
        <Text
          textAlign="center"
          fontSize={{ base: "sm", md: "md" }}
          mt={5}
          color="gray.500"
        >
          Groupon may earn a commission when you buy through links on our site.
        </Text>
      </Flex>



    </Box>
  )
}

export default Coupons