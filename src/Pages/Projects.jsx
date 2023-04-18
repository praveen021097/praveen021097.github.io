import React from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import rodan from "../Assets/Projects/rodanfieldsclone.png";
import firstcry from "../Assets/Projects/firstcry.png";
import shopshop from "../Assets/Projects/shopshop.png";
import { BsGithub } from "react-icons/bs";

const rodanDescrip =  "The online reseller platform rodan perhaps requires nointroduction. The platform has carved a niche for itself and has gained popularity among consumers and retailers alike by making online reselling and shopping hassle-free and affordable."
const list =[
  {
    id:1,
    title:"Rodan+Fields",
    imgLink:rodan,
    gitLink:"https://github.com/Mallikarjuna-dev/serene-scarecrow-3205.git",
    deployLink:"https://rodanandfields-clone-orcin.vercel.app/",
    descrip:"Rodan & Fields also known as R+F, is an American multi-level marketing company specializing in skincare products. It uses independent consultants to sell its products. I along with my 3 team members built this project in 6 days time duration in the construct week at Masai."

  },
  {
    id:2,
    title:"FirstCry",
    imgLink:firstcry,
    gitLink:"https://github.com/unnati1004/firstcry.git",
    deployLink:"https://firstcry-clone-project.netlify.app/",
    descrip:"The online reseller platform rodan perhaps requires nointroduction. The platform has carved a niche for itself and has gained popularity among consumers and retailers alike by making online reselling and shopping hassle-free and affordable."

  },
  {
    id:3,
    title:"Indiegogo",
    imgLink:shopshop,
    gitLink:"https://github.com/Nachiketlele/adjoining-steel-5186.git",
    deployLink:"https://gregarious-alfajores-075a2f.netlify.app/",
    descrip:"Millions of people around the world visit Indiegogo to find clever and unconventional things that solve everyday problems large and small. By giving entrepreneurs everywhere a platform to launch new and groundbreaking products, we help surface innovations in tech, design, and much more, all before they go mainstream."

  }
]
const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box h={"auto"} width={"80%"} mt={"50px"} m={"auto"}  pt={"70px"}>
      <Heading color={"white"}>Projects</Heading>
      <Flex justifyContent={"center"} flexWrap={"wrap"} gap={4} p={"20px"}>
        {list.map((item)=>{
          return <Box
          key={item.id}
          minW={"45%"}
          h={"30%"}
          bg={"cyan.200"}
          borderRadius={"15px"}
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
          }
        >
          <Text
            bgGradient="linear(to-l, #28b4ca, #202222)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="bold"
            fontStyle={"italic"}
          >
            {item.title}
          </Text>
          <Image
            src={item.imgLink}
            boxShadow={
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            }
            w={"95%"}
            height={"50%"}
            m={"auto"}
            borderRadius={"15px"}
            mt={"10px"}
          />
          <Flex justifyContent={"space-around"} p={"10px"}>
            <Link
              href={item.deployLink}
              target="_blank"
            >
              <Button
                boxShadow={
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
                }
                bg={"white"}
                p={"10px"}
                variant={"link"}
              >
                Demo
              </Button>
            </Link>
            
            {/* <Popover>
  <PopoverTrigger>
    <Button>about</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>{item.title}</PopoverHeader>
    <PopoverBody>{item.descrip}</PopoverBody>
  </PopoverContent>
</Popover> */}
     
            <Link
              href={
               item.gitLink
              }
              target="_blank"
            >
              <Button
                colorScheme="blue"
                variant={"link"}
                bg={"white"}
                p={"8px"}
                boxShadow={
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
                }
              >
                <BsGithub size={"20px"} /> Code
              </Button>
            </Link>

          </Flex>
          <Box overflow={"hidden"}>
            <Text>{item.descrip}</Text>
            </Box>
          
        </Box>
        })}
      </Flex>
    </Box>
  );
};

export default Projects;
