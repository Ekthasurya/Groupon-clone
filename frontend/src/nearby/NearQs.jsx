import { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export default function NearQs() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <Box maxW="1200px" p="4">
      <Text>
     <b> Embrace the Windy City with Groupon's Chicago Deals</b>
     <br /> <br />
Chicago is a city that buzzes with energy, stunning architecture, world-class museums, diverse food scenes, and dazzling nightlife. With a rich historical background and culture, one can never have a moment to spare in the Windy City'. And, what if you had the perfect platform that provides you irresistible Chicago deals for a fulfilling trip or city outing?
     <br /><br />
<b>Discover Chicago with Groupon </b>
<br /><br />
Groupon is committed to helping you explore the engaging spirit of Chicago without going heavy on your budget. We bring you an array of deals that encapsulate the essence of this vibrant city, offering savings on everything from food and drink, health and fitness, to local services, and events. Groupon is not the seller or merchant; rather, it functions as a platform connecting users to local businesses ready to offer incredible deals.
<br />
        {showMore ? (
          <>
            {" "} <b>Indulge in Chicago's Food Scene </b><br /><br />
Chicago's food scene is remarkably diverse. From deep-dish pizza and Chicago-style hot dogs to ethnic gems, treat your taste buds to a variety of cuisines without burning a hole in your pocket with our tempting Chicago deals. Whether you’re taking your family out for dinner, grabbing drinks with friends, or wanting to try that new brunch place in town, there’s a deal awaiting you.
<br /><br />
<b>Experience Chicago's Iconic Landmarks</b> <br />
Take advantage of our deals to experience Chicago’s iconic landmarks like the Navy Pier, the Art Institute of Chicago, or the Willis Tower SkyDeck. Whether you're a local or a traveler exploring the city's impressive sights and sounds, our Chicago deals make these experiences even more memorable by ensuring a pocket-friendly tour.
<br /><br />
<b>Enhance Your Wellness and Fitness </b><br />
Looking to join a new gym, try a yoga class, or book a relaxing massage? Our assortment of wellness and fitness deals allows you to maintain a healthy lifestyle without spending extravagantly. Remember, Groupon shines a spotlight on local businesses ready to offer you significant savings; we are not the actual service providers.
<br /><br />
<b>Personal and Home Services </b> <br />
From home cleaning and automotive services to photography and spa treatments, our platform brings you a diverse range of personal and home services deals. These Chicago deals not only provide the best services in town but also help you save significantly.
<br /><br />
<b>Unearth Local Events and Activities </b><br /><br />
Stay busy in Chicago with our wide gamut of deals on local events and activities. Be it a comedy show, a music concert, or a scenic boat tour, we handpick the best happenings in the city to cater to your interests and budget alike.
<br /><br />
In conclusion, Groupon is your access to the best of Chicago at incredibly reduced prices. We are committed to making your city experiences more affordable and enjoyable. Keep an eye on our website for the best chicago deals, and start discovering the city's fantastic offerings now!
          </>
        ) : (
          "..."
        )}
      </Text>
      <Button mt="2" marginLeft={500} size="sm" onClick={handleToggle} colorScheme="teal">
        {showMore ? "Show Less" : "Read More"}
      </Button>
    </Box>
  );
}
