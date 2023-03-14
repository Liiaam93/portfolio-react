import { EmailIcon } from "@chakra-ui/icons";
import { Text, Flex, Link, Button, Divider } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Contact = () => {
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
      id="contact"
      variants={variant}
      initial="hidden"
      animate={control}
      verticalAlign={"center"}
      flexDirection="column"
      textAlign="center"
      minH="50vh"
      mt="10vh"
    >
      <Text
        pt="5"
        fontSize={["2xl", "3xl"]}
        textAlign="center"
        textShadow={"2px 2px #000"}
      >
        Contact
      </Text>
      <Divider ml="5" w="100" />

      <Text ml="5" mt="20" fontSize={["xl", "2xl"]} textShadow={"1px 1px #000"}>
        I am currently looking for work and would love to hear from you!
      </Text>
      <Button
        border={"white solid 2px"}
        alignSelf={"center"}
        mt="10"
        as={Link}
        href="mailto: burbidge.liam@gmail.com"
        rightIcon={<EmailIcon />}
      >
        Get in touch
      </Button>
    </Flex>
  );
};

export default Contact;
