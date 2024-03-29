import { Box, Flex, Link, Text } from "@chakra-ui/react";
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  liveURL: string;
};

const Slide = ({ project }: { project: Project }) => {
  return (
    <Box p="2">
      <Box mt="10px" mb="15px">
        <Box color="#B82601" fontWeight="bold" fontSize="xl">
          {project.title}
        </Box>
        <Box>{project.description}</Box>
        <Flex flexDirection={"column"}>
          <Link color="forestgreen" href={project.url} isExternal>
            Github
          </Link>
          <Link color="forestgreen" href={project.liveURL} isExternal>
            View Live
          </Link>
        </Flex>
      </Box>
      <Box
        m="auto"
        bgImage={`url(${project.imageUrl})`}
        h={["410px", "440px"]}
        w={["250px", "270px"]}
        bgSize="cover"
        bgPosition="center"
      />
    </Box>
  );
};
export default Slide;
