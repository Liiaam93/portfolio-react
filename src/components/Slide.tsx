import { Box, Link, Text } from "@chakra-ui/react";
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
};

const Slide = ({ project }: { project: Project }) => {
  return (
    <Box borderRadius="10" p="2">
      <Box mt="10px" mb="15px">
        <Box color="#B82601" fontWeight="bold" fontSize="xl">
          {project.title}
        </Box>
        <Box>{project.description}</Box>
        <Link color="forestgreen" href={project.url} isExternal>
          View Here
        </Link>
      </Box>
      <Box
        m="auto"
        bgImage={`url(${project.imageUrl})`}
        h="440px"
        w="270px"
        bgSize="cover"
        bgPosition="center"
      />
    </Box>
  );
};
export default Slide;
