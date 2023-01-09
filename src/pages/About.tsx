import { Box, Text, Image, Flex, Divider } from "@chakra-ui/react";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const About = () => {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  const variant = {
    visible: { opacity: 1, scale: 1, y: 100 },
    hidden: { opacity: 0, scale: 0.5, y: -100 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <Flex
      as={motion.div}
      ref={ref}
      id="about"
      minHeight={"100vh"}
      variants={variant}
      initial="hidden"
      animate={control}
    >
      <Box pt="15vh">
        <Text fontSize={"3xl"} textAlign="center" textShadow={"2px 2px #000"}>
          About Me
        </Text>
        <Divider ml="5" w="100" />
        <Box mt="10">
          <Box
            w={205}
            alignSelf={["center", "none"]}
            h={205}
            borderWidth={2}
            borderRadius={"100"}
            m="auto"
            float={["none", "left"]}
            mr={["auto", "5"]}
          >
            <Image
              src="/avatar.png"
              w={[200]}
              h={200}
              borderRadius={"100"}
              backgroundColor={"rgba(255, 255, 255, 0.2)"}
            />
          </Box>
          <Box fontSize="xl" textShadow={"1px 1px #000"}>
            <Text textAlign={"left"}>Hey</Text>
            <Text>I'm Liam and I like building apps and websites.</Text>
            <Text pt="5" color={"yellow"}>
              In 2019, I was working for an e-commerce store, uploading
              products, adjusting prices and stock levels...
            </Text>
            <Text color={"yellow"}>
              I did some research into programming as I figured there had to be
              a way of automating some of my work.
            </Text>
            <Text pt="5">
              Fast forward to six months later I had a fully working web app
              built using React, that pulled new product data from multiple
              suppliers, calulated prices, and shipping costs based on product
              weight and even displayed stock levels!
            </Text>
            <Text color={"yellow"} pt="5">
              Since then I've been hooked on building apps and websites, and
              would love for the oppurtunity to turn my hobby into a career!
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default About;
