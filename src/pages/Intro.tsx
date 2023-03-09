import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { skills } from "../skills";

const Intro = () => {
  const [showIntro, setShowIntro] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box h={["50vh"]}>
      <motion.div
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Heading
          textAlign="center"
          fontSize={"3xl"}
          textShadow={"2px 2px #000"}
        >
          Hi, I'm
        </Heading>
        <Heading
          fontSize={["72", "92"]}
          fontWeight="500"
          textShadow={"5px 5px #000"}
          textAlign="center"
        >
          <Typewriter
            options={{
              delay: 300,
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter.typeString("Liam").pauseFor(1000).stop().start();
            }}
          />
        </Heading>
      </motion.div>

      {showIntro && (
        <>
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Divider />

            <Text
              fontSize={["2xl", "3xl", "4xl"]}
              color="#B82601"
              textShadow={"2px 2px #000"}
              textAlign="center"
            >
              Web Developer
            </Text>
            <Divider />

            <Text
              mt="5"
              mb="5"
              fontSize={"2xl"}
              textShadow={"1px 1px #000"}
              textAlign="center"
            >
              I use...
            </Text>
            <Flex
              w={"fit-content"}
              wrap={"wrap"}
              borderRadius="10"
              // bgColor={"rgba(255, 255, 255, 0.1)"}
              color={"white"}
              justifyContent="center"
              m={"auto"}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.4 }}
                >
                  <VStack padding={2}>
                    <Image
                      borderRadius={10}
                      marginX={2}
                      src={skill.image}
                      w={"50"}
                      h={"50"}
                      _hover={{
                        filter: "invert(100%)",
                      }}
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                      {skill.name}
                    </Text>
                  </VStack>
                </motion.div>
              ))}
            </Flex>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5 }}
            >
              <Text textAlign="center" fontSize={"2xl"} mt="5">
                To create things.
              </Text>
            </motion.div>
          </motion.div>
        </>
      )}
    </Box>
  );
};

export default Intro;
