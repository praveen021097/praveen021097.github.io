import { useRef } from "react";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import { Image } from "@chakra-ui/react";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import fullbg from "././Assets/fullbg2.jpg";
import pklogo from "././Assets/pklogo.jpeg";
import skillsbg from "././Assets/skills.svg";
import fullbg3 from "././Assets/fullbg3.jpg";
import homebg from "././Assets/home.jpg";
import Footer from "./Pages/Footer";
import pk from "././Assets/pk.jpg";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const home = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contacts = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="App" >
      <Box
        bgImage={`url(${fullbg})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize={"cover"}
        m={"auto"}
      >
        {/* start */}
        <Box bg={"white"} px={4} position={"sticky"} top={"0px"} zIndex={"9"} boxShadow={"rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"} >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box ml={"30px"}>
                <Image
                  src={pklogo}
                  w={"50px"}
                  h={"50px"}
                  borderRadius={"10px"}
                />
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                
              >
                <UnorderedList
                  display={"flex"}
                  listStyleType={"none"}
                  width={"30%"}
                  justifyContent={"space-around"}
                  mt={"-5px"}
                  mr={"10px"}
                  m={"auto"}
                >
                  <ListItem
                    onClick={() => scrollToSection(home)}
                    className="link"
                    color={"white"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="1xl"
                    fontWeight="extrabold"
                    fontStyle={"italic"}
                    fontFamily={"sans-serif"}
                    
                  >
                    Home
                  </ListItem>
                  <ListItem
                    onClick={() => scrollToSection(skills)}
                    className="link"
                    color={"white"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="1xl"
                    fontWeight="extrabold"
                    fontStyle={"italic"}
                    fontFamily={"sans-serif"}
                    
                  >
                    Skills
                  </ListItem>
                  <ListItem
                    onClick={() => scrollToSection(projects)}
                    className="link"
                    color={"white"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="1xl"
                    fontWeight="extrabold"
                    fontStyle={"italic"}
                    fontFamily={"sans-serif"}
                  >
                    Projects
                  </ListItem>
                  <ListItem
                    onClick={() => scrollToSection(contacts)}
                    className="link"
                    color={"white"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="1xl"
                    fontWeight="extrabold"
                    fontStyle={"italic"}
                    fontFamily={"sans-serif"}
                  >
                    Contacts
                  </ListItem>
                </UnorderedList>
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={pk} mr={"30px"}/>
                </MenuButton>
               
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={2}>
                <UnorderedList
                  display={"flex"}
                  listStyleType={"none"}
                  width={"30%"}
                  justifyContent={"space-around"}
                  mt={"-5px"}
                  m={"auto"}
                >
                  <ListItem
                    onClick={() => scrollToSection(home)}
                    className="link"
                    color={"white"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="1xl"
                    fontWeight="extrabold"
                    fontStyle={"italic"}
                    fontFamily={"sans-serif"}
                  >
                    Home
                  </ListItem>
                  <ListItem
                    onClick={() => scrollToSection(skills)}
                    className="link"
                    color={"white"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="1xl"
                    fontWeight="extrabold"
                    fontStyle={"italic"}
                    fontFamily={"sans-serif"}
                  >
                    Skills
                  </ListItem>
                  <ListItem
                    onClick={() => scrollToSection(projects)}
                    className="link"
                    color={"white"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="1xl"
                    fontWeight="extrabold"
                    fontStyle={"italic"}
                    fontFamily={"sans-serif"}
                  >
                    Projects
                  </ListItem>
                  <ListItem
                    onClick={() => scrollToSection(contacts)}
                    className="link"
                    color={"white"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="1xl"
                    fontWeight="extrabold"
                    fontStyle={"italic"}
                    fontFamily={"sans-serif"}
                  >
                    Contacts
                  </ListItem>
                </UnorderedList>
              </Stack>
            </Box>
          ) : null}
        </Box>
        {/* close */}

        
        <Box ref={home}>
          <Home />
        </Box>
        <Box
          ref={skills}
          bgImage={`url(${skillsbg})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={"cover"}
        >
          <Skills />
        </Box>
        <Box
          ref={projects}
          mt={"20px"}
          bgImage={`url(${fullbg3})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={"cover"}
        >
          <Projects />
        </Box>
        <Box
          ref={contacts}
          bgImage={`url(${homebg})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={"cover"}
        >
          <Contacts />
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </div>
  );
}

export default App;
