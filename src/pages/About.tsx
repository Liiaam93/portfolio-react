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
            <Text>I'm Liam and I'm a self-taught web developer with a passion for making things easier and more efficient. </Text>
            <Text pt="5" color={"yellow"}>
              I stumbled upon web development in 2018 as a way to automate part of my job. Within six months of learning I had working web application which scraped information from various suppliers, showed stock levels and calculated prices based on product brand and other factors. 
            </Text>
            <Text color={"yellow"}>
              I quickly fell in love with JavaScript and some of its frameworks and began using them every day. I love using my skills to bring my interests to life, like making apps for my favorite board games, video games and collections.
            </Text>
            <Text pt="5">
              Now web development is not only one of my hobbies, but I'm also looking to turn it into a career. 
            </Text>
            <Text color={"yellow"} pt="5">
              I'm always up for a challenge and love improving my skills. I'm a creative problem solver who's all about delivering great work. 
              My goal is to be part of a team that's just as passionate as I am about creating stuff for the web. I'm confident that my skills, enthusiasm, and drive will make me a valuable addition to any team. Let's make something amazing together
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default About;
