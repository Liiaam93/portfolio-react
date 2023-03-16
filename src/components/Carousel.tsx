import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useDrag } from "react-use-gesture";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slide from "./Slide";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  liveURL: string;
};

type Props = {
  projects: Project[];
};

function Carousel({ projects }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const bind = useDrag(({ direction: [xDir], distance, cancel }) => {
    if (distance > window.innerWidth * 0.2) {
      cancel();
      const nextSlide =
        xDir > 0
          ? currentSlide === 0
            ? projects.length - 1
            : currentSlide - 1
          : currentSlide === projects.length - 1
          ? 0
          : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }
  });

  return (
    <>
      <Box position="relative" {...bind()} style={{ touchAction: "pan-y" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Slide project={projects[currentSlide]} />
          </motion.div>
        </AnimatePresence>
        <Box>
          <Box
            position="absolute"
            top="50%"
            left="0"
            transform="translateY(-50%)"
            cursor="pointer"
            onClick={() =>
              setCurrentSlide(
                currentSlide === 0 ? projects.length - 1 : currentSlide - 1
              )
            }
            bg="rgba(0, 0, 0, 0.5)"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="40px"
            h="40px"
            zIndex="10"
          >
            <ChevronLeftIcon color="white" />
          </Box>
          <Box
            position="absolute"
            top="50%"
            right="0"
            transform="translateY(-50%)"
            cursor="pointer"
            onClick={() =>
              setCurrentSlide(
                currentSlide === projects.length - 1 ? 0 : currentSlide + 1
              )
            }
            bg="rgba(0, 0, 0, 0.5)"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="40px"
            h="40px"
            zIndex="10"
          >
            <ChevronRightIcon color="white" />
          </Box>
        </Box>

        <Box>
          {projects.map((project, index) => (
            <Box
              key={project.id}
              onClick={() => handleSlideChange(index)}
              bg={index === currentSlide ? "blue.500" : "gray.200"}
              cursor="pointer"
              w="10px"
              h="10px"
              borderRadius="50%"
              display="inline-block"
              m="5px"
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Carousel;
