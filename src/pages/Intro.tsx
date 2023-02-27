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

const skills = [
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "NodeJS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

const Intro = () => {
  return (
    <Box h={["70vh", "80vh"]}>
      <Heading fontSize={"3xl"} textShadow={"2px 2px #000"}>
        Hi, I'm
      </Heading>
      <Heading
        fontSize={["82", "92"]}
        fontWeight="500"
        textShadow={"5px 5px #000"}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Liam").pauseFor(1000).start();
          }}
        />
      </Heading>
      <Divider />
      {/* <Text fontSize={["4xl", "5xl", "6xl"]} color="yellow">
        I'm looking for my first role in
      </Text> */}
      <Text
        fontSize={["2xl", "3xl", "4xl"]}
        color="#B82601"
        textShadow={"2px 2px #000"}
      >
        Web Developer
      </Text>
      <Divider />

      <Text mt="5" mb="4" fontSize={"2xl"} textShadow={"1px 1px #000"}>
        I create things with:
      </Text>
      <Flex
        m="auto"
        w={"100%"}
        wrap={"wrap"}
        borderRadius="10"
        bgColor={"rgba(255, 255, 255, 0.2)"}
        color={"black"}
        justifyContent="center"
      >
        {skills.map((skill) => (
          <VStack padding={2}>
            <Image
              borderRadius={10}
              marginX={2}
              src={skill.image}
              w={"50"}
              h={"50"}
            />
            <Text textAlign={"center"} fontSize={[10, 16]}>
              {skill.name}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default Intro;
