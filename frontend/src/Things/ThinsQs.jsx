import { useState } from "react";
import { Box, Text, Button, UnorderedList, ListItem } from "@chakra-ui/react";

export default function ThingsQs() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <Box maxW="1200px" p="4">
      <Text>
      <b>Top Things to Do in Chicago </b> <br /> <br />
      Riverboat tours offer unbeatable skyline views, mesmerizing architecture spanning a range of times and trends, and endless culture in museums, concert halls, and theaters. Chicago has much to offer visitors and those who call the city home. And, with offers from Groupon, you can experience more of it—for less.
     
        {showMore ? (
          <>
            {" "} <b>Top Things to Do in Chicago </b> <br /> <br />
Riverboat tours offer unbeatable skyline views, mesmerizing architecture spanning a range of times and trends, and endless culture in museums, concert halls, and theaters. Chicago has much to offer visitors and those who call the city home. And, with offers from Groupon, you can experience more of it—for less.
<br /> <br />
<b>Explore the Best Things to Do in Chicago </b> <br /> <br />
Chicago, the Windy City, abounds with unparalleled attractions. Whether you’re a tourist or a native seeking new ways to appreciate the city, you can always find things to do in Chicago. Families will find entertainment for all ages. Couples can wine and dine on a romantic getaway. Or get your girls — or guys — together to make memories. Before you go, grab an offer from Groupon. Then make your experience an unforgettable one.
<br /> <br />
<b>Experience Arts & Culture in Chicago </b> <br /> <br />
As one of the world's major cultural hubs, Chicago offers a variety of museums and attractions. Immerse yourself in the Art Institute of Chicago's iconic collections or dive deep into natural history at the Field Museum. Chicago is perfect for lovers of art and culture. More into architecture and historic neighborhoods? You can’t miss the famous Loop, Lincoln Park, and the historic Bronzeville district. You might even be able to catch a river cruise to see it all. Before you make plans, check Groupon for things to do in Chicago this weekend.
<br /> <br />
<b>Outdoor Activities for Any Budget </b> <br /> <br />
Crave a bit of adventure? Take advantage of Groupon's irresistible offers on outdoor activities in Chicago. From stunning boat tours on Lake Michigan or the Chicago River to exhilarating bike rides along the Lakefront Trail, you can always get outside and find things to do in Chicago. For thrill-seekers, Chicago offers skydiving and helicopter tours that take your breath away. No visit is complete without visiting the Bean at Millennium Park and the Skydeck at Willis Tower to see the city’s famous skyline from 1,353 feet. These unique adventures provide an exciting opportunity to see the Windy City from a new perspective.
<br /> <br />
<b>Savor Chicago's Culinary Wonders </b> <br /> <br />
Chicago is a food lover's delight. Look for tempting deals on food tours to explore the city's diverse and delicious culinary scene. Taste the legendary deep-dish pizza, relish the classic Chicago-style hot dogs, or explore globally inspired cuisine from world-class chefs. The gourmet foodie scene is centered around the West Loop. Want to check out more diverse flavors? Head to Pilsen for authentic tacos, tamales, elotes, or Andersonville for Swedish bakeries and eclectic eateries. Don’t overlook the city's vibrant food culture among all the incredible things to do in Chicago.
<br /> <br />
<b>Make Memories with Family-Friendly Activities </b> <br /> <br />
Chicago offers plenty of kids’ activities. Families can’t miss the interactive exhibits at the Museum of Science and Industry, the Shedd Aquarium, and the Children’s Museum. When you’re done learning, head over to Maggie Daley Park, which has a fantastic playground and mini golf, or head out on the pedal boats at Humboldt Park. Want to stay indoors? The city is full of bowling alleys, arcades, and movie theaters. Or kick it up a notch with indoor rock climbing, ice skating, or trampoline parks. You’ll never run out of family-friendly things to do in Chicago.
<br /> <br />
<b>Discover Chicago Nightlife </b> <br /> <br />
Chicago is known worldwide as a theater city, so don’t miss out on your chance to indulge in the city's invigorating nightlife. Fall under the spell of Broadway classics, laugh out loud at the Second City, dance the night away at a nightclub, or enjoy the views at one of the city’s many rooftop bars. Music lovers can catch live performances at iconic venues like the Chicago Theatre or enjoy jazz at the historic Green Mill Cocktail Lounge, a personal favorite of Al Capone. Ready to make your weekend plans? Check out our deals on things to do in Chicago this weekend. Your nights will never be the same.
<br /> <br /> 
<b>Indulge in Ultimate Relaxation </b> <br /> <br />
Chicago isn’t just about restaurants and nightlife. Pilates and workout classes are a great way to get in shape while meeting new people. Enjoy outdoor yoga sessions at Millennium Park or take a serene stroll through the beautiful Chicago Botanic Garden. After a busy day of exploring Chicago's many attractions, there's nothing better than well-deserved relaxation. Groupon offers spa services, massages, and wellness centers throughout the city for those seeking peace and tranquility in this bustling metropolis.
<br /><br />
<b>Popular Searches </b> <br /> <br />
Chicago is a city of endless fun, vibrancy, and dynamic spirit, all waiting for you to explore. Using Groupon to experience the very best things to do in Chicago is an unbeatable way to enjoy the city while saving money at the same time. If you still need some inspiration, check out our popular searches below. From cultural immersion to outdoor adventure, everything is just a click away.
<br />
<br />

<UnorderedList>
  <ListItem>Food & Drink in Chicago</ListItem>
  <ListItem>Retail in Chicago</ListItem>
  <ListItem>Nightlife in Chicago</ListItem>
  <ListItem>Beauty & Spas in Chicago</ListItem>
  <ListItem>Museums & Galleries in Chicago</ListItem>
  <ListItem>Music in Chicago</ListItem>
  <ListItem>Cinema in Chicago</ListItem>
  <ListItem>Comedy Clubs in Chicago</ListItem>
  <ListItem>Fun & Leisure in Chicago</ListItem>
  <ListItem>Clubs in Chicago</ListItem>
  <ListItem>Kids’ Activities in Chicago</ListItem>
</UnorderedList>
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
