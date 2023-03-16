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
        <Text
          fontSize={["2xl", "3xl"]}
          textAlign="center"
          textShadow={"2px 2px #000"}
        >
          About Me
        </Text>
        <Divider ml="5" w="100" />
        <Box mt="10">
          <Box
            w={201}
            h={201}
            alignSelf={["center", "none"]}
            border="black 2px solid"
            borderRadius={"100"}
            m="auto"
            float={["none", "left"]}
            mr={["auto", "5"]}
          >
            <Image
              src="/avatar1.png"
              w={[200]}
              h={200}
              border={"solid white"}
              borderRadius={"100"}
              backgroundColor={"rgba(255, 255, 255, 0.3)"}
            />
          </Box>
          <Box fontSize="xl" textShadow={"1px 1px #000"} mt="2">
            <Text textAlign={["center", "left"]}>Hey</Text>
            <Text mt="2" textAlign={["center", "left"]}>
              I'm Liam and I'm a self-taught web developer with a passion for
              making things easier and more efficient.
            </Text>
            <Text textAlign={["center", "left"]} mt="2" color={"#b82601"}>
              I stumbled upon web development in 2018 as a way to automate part
              of my job. Within six months, I had a working web application
              which scraped product information, stock levels and calculated
              prices based on brand and other factors.
            </Text>
            <Text textAlign={["center", "left"]} mt="2" color={"white"}>
              Since then I've decided to follow my dream of turning my hobby
              into a career.
            </Text>

            <Text textAlign={["center", "left"]} color={"#b82601"} mt="2">
              I'm always up for a challenge and love improving my skills. Let's
              make something amazing together!
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default About;
