import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Intro from "./pages/Intro";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  const { scrollY }: any = useScroll();
  const [number, setNumber] = useState(0);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setNumber(scrollY.current);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setNumber(scrollY.current);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  return (
    <>
      <Navbar />
      <Box
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        w={"100%"}
        bg={`hsl(${82 + number / 10}, 39%, 30%)`}
        color={"white"}
        fontFamily="kanit"
      >
        <Flex
          ml={["10%", "20%"]}
          mr={["10%", "20%"]}
          pt="20vh"
          pb="50vh"
          flexDir={"column"}
        >
          <Intro />
          <About />
          <Projects />
          <Contact />
        </Flex>
        <Footer />
      </Box>
    </>
  );
}

export default App;
