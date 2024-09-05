import React, { useState } from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";

function ReadMoreExample() {
    const [isExpanded, setIsExpanded] = useState(false);

    const paragraph = `
    Chicago is one of the busiest cities in America. This metropolis is known for its impressive skyline, eclectic restaurants and active art scene. Residents need to be well-coiffed and groomed for all this "out and about". Chicago hair salons are just as diverse as the city's many neighborhoods. Residents can relax with a deep massage, revitalize with an invigorating facial or get a sun-kissed glow from one of the local tanning salons. Old school charm and Hollywood glamour meet at Pete's Barber Shop. The retro decor and cool vibe make this one of Chicago's hidden treasures. Pete serves up trendy hairstyles, free beer and the classic shave treatment with humor and a smile. The free parking is one perk that is hard to find in the city. Edit Salon in West Town is the trendy beauty salon with the personalized touch. Cutting edge stylists use the latest coloring techniques and create modern cuts with style and personality. This hip salon is one of the city's best for its service and talented professionals. When a customer wants a natural-looking tan, Golden Girl Chicago is the place to go. This salon offers more than just traditional spray tanning services. Nourishing keratin hair treatments, seamless hair extensions, creative cuts and expert coloring are also offered at this inviting salon on the West Loop. Ortanic on the north side offers the latest airbrushing techniques for a tanning experience unlike any other. Customers can enjoy a revitalizing, pH-balancing skin treatment infused with invigorating pink grapefruit or kick back at a sunless spa party with a group of friends. Licensed estheticians are on hand to consult with clients and create a personalized experience. 4 Elements Salon specializes in pampering. Expert stylists cut, color and straighten hair with the latest Japanese thermal straightening technology. Exclusive nail services include traditional shaping and polishing, paraffin treatments and spa manicures. After a hard day at work, clients can unwind with a rejuvenating massage. The exclusive Chicago hair salons and tanning parlors have many choices to fit any taste. 
  `;

    const previewLength = 490; // Number of characters to show in the preview

    return (
        <VStack spacing={4} align="start" width="full" maxWidth="1200px" margin="0 auto" padding="20px">
            <Box>
                <Text>
                    {isExpanded ? paragraph : paragraph.slice(0, previewLength) + "..."}
                </Text>
            </Box>
            <Button
                variant="link"
                onClick={() => setIsExpanded(!isExpanded)}
                colorScheme="teal"
                paddingLeft={500}
            >
                {isExpanded ? "Show Less" : "Read More"}
            </Button>
        </VStack>
    );
}

export default ReadMoreExample;
