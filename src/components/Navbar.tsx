import {
  HStack,
  Link,
  IconButton,
  Flex,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Button,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { HamburgerIcon } from "@chakra-ui/icons";

import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollY }: any = useScroll();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();

  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "LBURBIDGE_CV.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <HStack
        as={motion.div}
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        pos={"fixed"}
        w={"100%"}
        zIndex="sticky"
        p="2"
        backgroundColor={"rgba(0, 0, 0, 0.5)"}
      >
        <Router>
          <Flex justifyContent={"left"} w="90%">
            <Link
              as={HashLink}
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              color="white"
            >
              <Image src="/logo.png" maxH="40px" />
            </Link>
          </Flex>
          <Flex justifyContent={"right"} w="-moz-fit-content">
            <IconButton
              onClick={onOpen}
              color={"white"}
              aria-label="Open Menu"
              size={"md"}
              icon={<HamburgerIcon />}
              display={["flex", "flex", "none", "none"]}
            />
          </Flex>

          <HStack
            display={["none", "none", "flex", "flex"]}
            justifyContent={"right"}
            w={"100%"}
            spacing={"5"}
          >
            <Button as={HashLink} to="/#about">
              About
            </Button>
            <Button as={HashLink} to="/#projects" colorScheme={"green"}>
              My Projects
            </Button>
            <Button as={HashLink} to="/#contact" colorScheme={"green"}>
              Contact
            </Button>
            <Button onClick={onButtonClick} colorScheme={"green"}>
              My CV
            </Button>{" "}
          </HStack>
        </Router>
      </HStack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody backgroundColor="#B82601">
            <VStack mt="10" spacing="10" p="10" textAlign={"center"}>
              <Button
                w="100%"
                colorScheme={"green"}
                as={Link}
                onClick={onClose}
                href="/#about"
              >
                About
              </Button>
              <Button
                w="100%"
                colorScheme={"green"}
                as={Link}
                onClick={onClose}
                href="/#projects"
              >
                My Projects
              </Button>
              <Button
                w="100%"
                colorScheme={"green"}
                as={Link}
                onClick={onClose}
                href="/#contact"
              >
                Contact
              </Button>{" "}
              <Button w="100%" colorScheme={"green"} onClick={onButtonClick}>
                My CV
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
