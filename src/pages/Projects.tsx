import { Text, Flex, Divider } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { projects } from "../skills";
import Carousel from "../components/Carousel";

const Projects = () => {
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
      id="projects"
      variants={variant}
      initial="hidden"
      animate={control}
      verticalAlign={"center"}
      minHeight={"100vh"}
      flexDirection="column"
      textAlign="center"
    >
      <Text pt="5vh" fontSize={["2xl", "3xl"]} textShadow={"2px 2px #000"}>
        My Projects
      </Text>
      <Divider w="100" mb="5" />
      {/* <Text ml="5" mt="20" fontSize={"2xl"} textShadow={"1px 1px #000"}>
        Check out my work here:
      </Text>
      <Link color="yellow" isExternal href="https://github.com/Liiaam93">
        https://github.com/Liiaam93 <ExternalLinkIcon mx="2px" />
      </Link> */}
      <Carousel projects={projects} />
    </Flex>
  );
};

export default Projects;
