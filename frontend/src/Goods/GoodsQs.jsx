import { useState } from "react";
import { Box, Text, Button, UnorderedList, ListItem } from "@chakra-ui/react";

export default function GoodsQs() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <Box maxW="1200px" p="4">
      <Text>
      <b>Groupon Goods for All Your Online Shopping</b> <br /> <br />
      Groupon is all about helping you find new experiences, and that extends to online shopping. Our collection of consumer goods is always expanding with new items to enrich your ever-changing life, whether it’s athletic apparel to wear on that upcoming 5K or cell phone accessories to outfit your newest gadget. Welcome to Groupon Goods, your source for deals on everything from cookware to pet sweaters.
     <br /> <br />
        {showMore ? (
          <>
            {" "} <b>Make Home Life Easier </b> <br /> <br />
            Keeping up a household is hard work, but Groupon carries all the items you need to maintain a full, happy home. That starts with transforming every space into an extension of yourself—a task to which our For the Home section is well suited, thanks to online deals on new bedding that suits your style or outdoor furniture to turn your patio into a second living room. To keep your family happy, Groceries & Pets stocks your pantry with items such as extra coffee pods—or bulk wine, which seems to run out just as fast—as well as toys for your loyal critters. Keeping up with the kids is a race you might never win, but at least you can stay apace as kids grow. (When they’re newborns, baby care essentials keep them safe; when they’re toddlers, toys keep parents sane.) Of course, maintaining a home or car sometimes requires a little maintenance, too, in which case keep chaos at bay with a range of home improvement supplies, including major appliances.
<br /> <br />
<b>Stay on Trend </b> <br /> <br />
Online shopping isn’t just for keeping up with your busy life, though—it’s also to enrich your lifestyle. Groupon keeps up with the latest trends, adding new deals every day to a selection of clothing for both men and women. Women's Fashion comprises everything from handbags to bras, whereas Men's Fashion covers both casual and business apparel. Likewise, much of our jewelry sport unisex designs—though different shoppers may have very different motives for browsing diamond jewelry . Both men’s and women’s fragrances waft through the Health & Beauty section, along with an ever-changing variety of cosmetics, haircare, skincare, and personal hygiene products.
<br /> <br />
<b>Play Hard</b> <br /> <br />
No online store is complete without a reason to have fun, so Groupon gives you plenty of ways to occupy your free time. Gadgets galore fill the Electronics section, where the virtual aisles overflow with cell phones and accessories, computers and tablets, and home theater equipment. But even the biggest HDTV is nothing without entertainment to play on it,such as movies, video games, and music—though if you’re more into books and magazines, you’ll find plenty of titles from which to choose. Not all leisure time is spent on the couch, though. Sporting goods keep you active in the Great Outdoors, outfitting you with new clubs for the golf course or plenty of provisions for a camping trip in the woods. And if it’s raining out, spend a couple happy hours adding to your collection of sports cards, commemorative coins, or other collectibles.
<br /> <br />

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
