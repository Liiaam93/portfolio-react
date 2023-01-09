import { Box, Divider, Flex, Image, Text, VStack } from "@chakra-ui/react";

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
    <Box h={"80vh"}>
      <Text fontSize={"3xl"} textShadow={"2px 2px #000"}>
        Hi, I'm
      </Text>
      <Text fontSize={"84"} fontWeight="500" textShadow={"5px 5px #000"}>
        Liam...
      </Text>
      <Divider />
      <Text fontSize={["4xl", "5xl", "6xl"]} color="yellow">
        I'm looking for my first role in
      </Text>
      <Text
        fontSize={["4xl", "5xl", "6xl"]}
        color="aliceblue"
        textShadow={"1px 1px #ff0000"}
      >
        Web Development
      </Text>
      <Divider />

      <Text
        mt="5"
        mb="4"
        fontSize={"2xl"}
        textAlign="center"
        textShadow={"1px 1px #000"}
      >
        Skills:
      </Text>
      <Flex
        m="auto"
        wrap={"wrap"}
        borderRadius="10"
        bgColor={"rgba(255, 255, 255, 0.2)"}
        w="fit-content"
        color={"black"}
      >
        {skills.map((skill) => (
          <VStack padding={3}>
            <Image
              borderRadius={10}
              ml={2}
              mr={2}
              src={skill.image}
              w={["30", "50"]}
              h={["30", "50"]}
            />
            <Text fontSize={[10, 16]}>{skill.name}</Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default Intro;
