import { Box, Button, Flex,Text,Image, Center, Divider, Input, Avatar } from '@chakra-ui/react'
import React from 'react'
import { BsFillHandbagFill } from 'react-icons/bs'
import { FaBell, FaRegBell } from 'react-icons/fa'
import { GiCandleLight, GiClothes, GiLoincloth } from 'react-icons/gi'
import { IoIosHome } from 'react-icons/io'

const Coupons = () => {
  return (
    <Box p={5}>
      <Flex paddingLeft={300}>
      <Box  w={800} backgroundSize="cover" h={250} borderRadius={10} 
      backgroundPosition="center"
      backgroundRepeat="no-repeat" backgroundImage="url('https://img.grouponcdn.com/deal/25DgHydtFqmq2fnuGHPJH6mS8bx5/25-1200x720/v1/t440x300.webp')" >
        
        <Flex paddingTop={40} paddingLeft={5} gap={18}>
          <Text fontSize={30} fontWeight={700} color="white">Up To 70% off WayFair Labor Day Clearance</Text>
          <Box p={2}>
          <Button bg="green" color="white" w={40}>Get Deal</Button>
          </Box>
        </Flex>
      </Box>
      </Flex>

      <Flex bg="purple" justifyContent="space-between" paddingLeft={10} paddingRight={10} paddingTop={7} paddingBottom={7} marginTop={5}>
        <Box>
          <Text color="white" fontWeight={700} fontSize={30}>Up To 70% Off Labor Day Clearance</Text>
          <Text color="white" fontWeight={500}>at wayfair.com</Text>
        </Box>
        <Box p={2}>
          <Button w={40} bg="black" color="white">Shop Now</Button>
        </Box>
      </Flex>


      <Flex direction="column" p={10}>
         <Text>Our Favorite Merchants</Text>
         <Flex justifyContent="space-between">
          <Flex direction="column">
          <Image border="1px solid #e5e6e7" boxSize='130px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/1_800_contacts_logo_2.jpg'alt='Dan Abramov'/>
          <Text textAlign="center" color="blue">25 Offers</Text>
          </Flex>

          <Flex direction="column">
          <Image border="1px solid #e5e6e7" boxSize='130px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/amazon_logo_9.jpg'alt='Dan Abramov'/>
          <Text textAlign="center" color="blue">16 Offers</Text>
          </Flex>

          <Flex direction="column">
          <Image border="1px solid #e5e6e7" boxSize='130px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/avis_logo_4.jpg'alt='Dan Abramov'/>
          <Text textAlign="center" color="blue">110 Offers</Text>
          </Flex>

          <Flex direction="column">
          <Image border="1px solid #e5e6e7" boxSize='130px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/expedia_logo_18.jpg'alt='Dan Abramov'/>
          <Text textAlign="center" color="blue">23 Offers</Text>
          </Flex>

          <Flex direction="column">
          <Image border="1px solid #e5e6e7" boxSize='130px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/sam_s_club_logo_2.jpg'alt='Dan Abramov'/>
          <Text textAlign="center" color="blue">122 Offers</Text>
          </Flex>

          <Flex direction="column">
          <Image border="1px solid #e5e6e7" boxSize='130px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/the_home_depot_logo_1.jpg'alt='Dan Abramov'/>
          <Text textAlign="center" color="blue">23 Offers</Text>
          </Flex>

          <Flex direction="column">
          <Image border="1px solid #e5e6e7" boxSize='130px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/viator_logo_12.jpg'alt='Dan Abramov'/>
          <Text textAlign="center" color="blue">56 Offers</Text>
          </Flex>

          <Flex direction="column">
          <Image border="1px solid #e5e6e7" boxSize='130px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_114,h_114,c_fill,q_auto,fl_strip_profile,f_auto/wayfair_logo_4.jpg'alt='Dan Abramov'/>
          <Text textAlign="center" color="blue">27 Offers</Text>
          </Flex>
         </Flex>
      </Flex>


      <Box bg="#e5e6e7" paddingBottom={10} h={100}>
        <Text padding={7} fontSize={30} fontWeight={700}>Trending Discount Codes & Coupons</Text>
      </Box>



    <Flex direction="column" padding={7}>
         <Text fontWeight={700} fontSize={30}>Top Offers by Category</Text>
         <Flex justifyContent="space-between">
          <Flex gap={5}>
          <Center height='400px'>
          <Divider orientation='vertical' />
           </Center>
          <Flex direction="column" gap={7}>
               <Flex gap={2} p={2}> <Box><BsFillHandbagFill size={25}/> </Box> <Text>Travel</Text></Flex>
               <Flex gap={2} p={2} > <Box><GiLoincloth size={25}/> </Box> <Text>Women's Clothing</Text></Flex>
               <Flex gap={2} p={2}> <Box><GiClothes size={25}/> </Box> <Text>Men's Clothing</Text></Flex>
               <Flex gap={2} p={2}> <Box><IoIosHome size={25}/> </Box> <Text>Home & Garden</Text></Flex>
               <Flex gap={2} p={2}> <Box><GiCandleLight size={25}/> </Box> <Text>Helth & Beauty</Text></Flex>
               <Text>View More</Text>
          </Flex>
          </Flex>

          <Flex direction="column" gap={7}>
              <Flex gap={2}>
                <Box>
                <Image  boxSize='110px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/american_apparel_1.jpg'/>
                </Box>
                <Flex direction="column" gap={10}>
                    <Text> Get Women's Best <br />Sellers  Starting At $12</Text>
                    <Divider orientation='horizontal' />
                </Flex>
              </Flex>

              <Flex gap={2}>
                <Box>
                <Image boxSize={110} objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/city_sightseeing_new_york_logo.jpg'alt='Dan Abramov'/>
                </Box>
                <Flex direction="column" gap={9}>
                    <Text> 20% Off New York <br /> Sightseeing Pass <br /> Coupon Code</Text>
                    <Divider orientation='horizontal' />
                </Flex>
              </Flex>

              <Flex gap={2}>
                <Box>
                <Image  boxSize='110px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/booking_com_logo_1.jpg'alt='Dan Abramov'/>
                </Box>
                <Flex direction="column" gap={9}>
                    <Text>30% Off - Booking.com <br /> Coupons</Text>
                    <Divider orientation='horizontal' />
                </Flex>
              </Flex>
          </Flex>


          <Flex direction="column" gap={7}>
              <Flex gap={2}>
                <Box>
                <Image  boxSize='110px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/expedia_logo_18.jpg'alt='Dan Abramov'/>
                </Box>
                <Flex direction="column">
                    <Text>Cheap airfare, hotels,<br /> car rentals, vacations,<br /> and cruises at <br /> Expedia.com! (Coupon)</Text>
                    <Divider orientation='horizontal' />
                </Flex>
              </Flex>

              <Flex gap={2}>
                <Box>
                <Image  boxSize='110px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/qatar_airways_logo_10.jpg'alt='Dan Abramov'/>
                </Box>
                <Flex direction="column" gap={4}>
                    <Text> Flights to and from <br />Colombo Airport |<br /> Qatar Airways Coupon</Text>
                    <Divider orientation='horizontal' />
                </Flex>
              </Flex>

              <Flex gap={2}>
                <Box>
                <Image  boxSize='110px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/hotels_com_logo_6.jpg'alt='Dan Abramov'/>
                </Box>
                <Flex direction="column" gap={2}>
                    <Text>25% Or More Off Your <br /> Dream Hotel Stay - <br /> Hotels.com Coupon</Text>
                    <Divider orientation='horizontal' />
                </Flex>
              </Flex>
          </Flex>


          <Flex direction="column" gap={7}>
              <Flex gap={2}>
                <Box>
                <Image  boxSize='110px' objectFit='cover'src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/priceline_logo_8.jpg'alt='Dan Abramov'/>
                </Box>
                <Flex direction="column" gap={10}>
                    <Text>15% Off Priceline <br /> Coupon</Text>
                    <Divider orientation='horizontal' />
                </Flex>
              </Flex>

              <Flex gap={2}>
                <Box>
                <Image  boxSize='110px' objectFit='cover' src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/booking_com_logo_1.jpg'alt='Dan Abramov'/>
                </Box>
                <Flex direction="column" gap={3}>
                    <Text>15% Or More Off <br /> Getaways |  <br /> Booking.com Promo Code</Text>
                    <Divider orientation='horizontal' />
                </Flex>
              </Flex>

              <Flex gap={2}>
                <Box>
                <Image  boxSize='11 0px' objectFit='cover' src='https://invitationdigital-res-1.cloudinary.com/image/upload/w_100,h_100,c_fill,q_auto,fl_strip_profile,f_auto/expedia_logo_18.jpg'alt='Dan Abramov'/>
                </Box>
                <Flex direction="column" gap={6}>
                    <Text>Last-Minute Hotel <br /> Deals From Expedia</Text>
                    <Divider orientation='horizontal' />
                </Flex>
              </Flex>
          </Flex>


         </Flex>
    </Flex>


    <Flex direction="column" padding={5} gap={4}>
      <Text fontWeight={700} fontSize={30}>This is the best way to save more with Groupon coupons</Text>
       <Flex gap={4} justifyContent="space-between">
      <Text>Saving money is a breeze with Groupon coupons. With your favorite fashion stores like Nike, American Eagle and Old Navy plus many more all ready and waiting with money-saving opportunities, whether you’re looking for new Levi’s jeans or for kids’ accessories like hats and bags, you’ll have the best choice around. The Groupon app is so useful to have on your phone and this is where you’ll find the best deals whilst you’re on the move! Keep in touch to stay in the know about the latest sales to land, Exclusive coupons and tons more that will keep you and your bank balance happy! The best way to use our Groupon coupons is to select the ‘see sale’ option from the active offers listed and this will unlock different types of money-saving opportunities like Vistaprint free shipping, student discounts, exclusive Costco membership deals and way more! Why not browse the travel category to save cash on your next amazing experience in 2024? How much money you save each time is totally down to the offer you choose, so discover what’s on offer today and live your best life with Groupon coupons!

Groupon Coupons brings everything you love about the pioneering money-saving platform to the world of promo codes. By working directly with national brands—and</Text>
      <Text>
      relying on the money-saving tricks we’ve learned over the past 10 years—we’re able to deliver 100% real promo codes and coupons for stores like Target, eBay, Bed Bath and Beyond, and thousands more.

When we say “100% real,” we mean that every single one of our promo codes, flash sales, and offers has been vetted and verified by our dedicated brand experts. That means, when you see a promo code on Groupon Coupons, you can trust that it works. Best of all, they’re all 100% free and easy to use. Just click and save!

We also make shopping easy with promo codes and savings guides for everything from Halloween costumes to the best Black Friday deals. Get started by browsing department store promo codes & sales to shop the best deals from Macy’s, Nordstrom, and other amazing stores. Treat yourself by grabbing something off our Free Samples page, where you’ll find everything from free beauty gifts from Saks Fifth Avenue and Sephora to diapers and baby goods from Huggies. You could even start planning your next vacation with our collection of travel promo codes from sites like Hotwire, Travelocity, and Expedia.
      </Text>
       </Flex>
    </Flex>


    <Flex p={7} gap={10} border="1px solid green" marginLeft={10} marginRight={10}>
      <Flex justifyContent="space-between" gap={5}>
        <Box><FaRegBell color='green' size={50} /></Box>
        <Text fontWeight={600} fontSize={20}>Subscribe to our emails now and never miss our best <br />coupons!</Text>
      </Flex>
      <Flex direction="column" gap={2}>
        <Flex justifyContent="space-between" gap={10}>
        <Input placeholder='Email' w={350}   />
        <Button w={180} bg="white" color="green" border="1px solid" >Subscribe</Button>
        </Flex>
        <Text fontSize={12}>By clicking the Subscribe button, I agree to the Terms of Use and have read the Privacy Statement.</Text>
      </Flex>
    </Flex>


    <Flex direction="column" p={10} gap={5} bg="#eeeff1">
          <Text fontWeight={600} fontSize={30}>Popular Stores at Groupon</Text>
          <Flex justifyContent='space-between'>
          <Flex border="1px solid #eeeff1" bg='white' w={130} p={2} >
          <Text color='blue'>1800 Flowers</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={90} p={2} >
          <Text color='blue'>adidas</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={90} p={2} >
          <Text color='blue'>Amazon</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={130} p={2} >
          <Text color='blue'>American Eagle</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={90} p={2} >
          <Text color='blue'>Ancestry</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={70} p={2} >
          <Text color='blue'>ASOS</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={200} p={2} >
          <Text color='blue'>Bed Bath and Beyond</Text>
          </Flex>
          </Flex>

          <Flex justifyContent='space-between'>
          <Flex border="1px solid #eeeff1" bg='white' w={90} p={2} >
          <Text color='blue'>boohoo</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={70} p={2} >
          <Text color='blue'>Costco</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={70} p={2} >
          <Text color='blue'>eBay</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={190} p={2} >
          <Text color='blue'>Edible Arrangements</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={90} p={2} >
          <Text color='blue'>Expedia</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={100} p={2} >
          <Text color='blue'>Forever 21</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={110} p={2} >
          <Text color='blue'>H&R Block</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={70} p={2} >
          <Text color='blue'>Kohl's</Text>
          </Flex>
          </Flex>


          <Flex justifyContent='space-between'>
          <Flex border="1px solid #eeeff1" bg='white' w={90} p={2} >
          <Text color='blue'>L.L.Bean</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={90} p={2} >
          <Text color='blue'>Lowe's</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={90} p={2} >
          <Text color='blue'>Macy's</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={90} p={2} >
          <Text color='blue'>Michaels</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={90} p={2} >
          <Text color='blue'>Old Navy</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={110} p={2} >
          <Text color='blue'>Quickbooks</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={100} p={2} >
          <Text color='blue'>Samsung</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={100} p={2} >
          <Text color='blue'>Sephora</Text>
          </Flex>
          </Flex>


          <Flex justifyContent='space-between'>
          <Flex border="1px solid #eeeff1" bg='white' w={70} p={2} >
          <Text color='blue'>Target</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={150} p={2} >
          <Text color='blue'>The Home Depot</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={90} p={2} >
          <Text color='blue'>TJ Maxx</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={100} p={2} >
          <Text color='blue'>TurboTax</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={90} p={2} >
          <Text color='blue'>Udemy</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" w={90} p={2} >
          <Text color='blue'>Verizon</Text>
          </Flex>

          <Flex border="1px solid #eeeff1" bg='white' w={100} p={2} >
          <Text color='blue'>Walmart</Text>
          </Flex>
          </Flex>
    </Flex>


    <Flex direction='column' gap={5}>
      <Flex justifyContent="center" alignItems="center">
        <Box p={1}>
      <Avatar size='2xs' name='Dan Abrahmov' src='https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller' />
      </Box>
        <Text color="blue" fontWeight={600}> Sephora Sales Calendar</Text>
        <Box p={1}>
        <Avatar size='2xs' name='Dan Abrahmov' src='https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller' />
        </Box>
        <Text color="blue" fontWeight={600}> Shein Size Guide</Text>
         <Box p={1}>
        <Avatar size='2xs' name='Dan Abrahmov' src='https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller' />
        </Box>
        <Text color="blue" fontWeight={600}>Hobby Lobby Sales Calendar</Text>
        <Box p={1}>
        <Avatar size='2xs' name='Dan Abrahmov' src='https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller' />
        </Box>
        <Text color="blue" fontWeight={600}>Ulta Beauty Sales Calendar</Text>
        <Box>
        <Avatar size='2xs' name='Dan Abrahmov' src='https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller' />
        </Box>
        <Text color="blue" fontWeight={600}>Nordstrom Sales Calendar</Text>
      </Flex>


      <Flex justifyContent="center" alignItems="center">
        <Box p={1}>
      <Avatar size='2xs' name='Dan Abrahmov' src='https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller' />
      </Box>
        <Text color="blue" fontWeight={600}> Fourth of July Offers </Text>
        <Box p={1}>
        <Avatar size='2xs' name='Dan Abrahmov' src='https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller' />
        </Box>
        <Text color="blue" fontWeight={600}> Amazon Prime Days Offers</Text>
         <Box p={1}>
        <Avatar size='2xs' name='Dan Abrahmov' src='https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller' />
        </Box>
        <Text color="blue" fontWeight={600}> Summer Sale</Text>
        <Box p={1}>
        <Avatar size='2xs' name='Dan Abrahmov' src='https://invitationdigital-res-1.cloudinary.com/image/upload/q_auto,f_auto,fl_strip_profile/Groupon_favicon_smaller' />
        </Box>
        <Text color="blue" fontWeight={600}> Back To School Sales</Text>
        
      </Flex>

      <Text textAlign="center">Groupon may earn a commission when you buy through links on our site.</Text>
      
    </Flex>

    </Box>
  )
}

export default Coupons