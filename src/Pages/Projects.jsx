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
import ques from "../Assets/Projects/ques.png";
import lms from "../Assets/Projects/lms.png";
import buyershub from "../Assets/Projects/buyershub.png";
import { BsGithub } from "react-icons/bs";
import chakra from "../Assets/techstack/chakra.png"
import reactm from "../Assets/techstack/react.png"
import reduxmini from "../Assets/techstack/redux.png"
import postman from "../Assets/techstack/postman.png"
import tailwind from "../Assets/techstack/tailwind-css.png"
import javascript from "../Assets/techstack/java-script.png"
import typescript from "../Assets/techstack/typescript.png"
import css from "../Assets/techstack/css3.png"
import html from "../Assets/techstack/html.png"
import heroku from "../Assets/techstack/heroku.png"
import json from "../Assets/techstack/json-file.png"
import mongo from "../Assets/techstack/mongodb.png"
import nodejs from "../Assets/techstack/nodejs.png"
import expressJs from "../Assets/skills/expressjs.png"





const list =[
  
  
  
  {
    id:3,
    title:"FirstCry",
    imgLink:firstcry,
    gitLink:"https://github.com/unnati1004/firstcry.git",
    deployLink:"https://distracted-kalam-bfa9ee.netlify.app/",
    descrip:"The online reseller platform rodan perhaps requires nointroduction. The platform has carved a niche for itself and has gained popularity among consumers and retailers alike by making online reselling and shopping hassle-free and affordable.",
    teckStack:[{id:1,icon:html,name:"html"},{id:2,icon:css,name:"css"},{id:3,icon:javascript,name:"javascipt"},{id:4,icon:mongo,name:"mongodb"},{id:4,icon:nodejs,name:"nodejs"}]
  },
  {
    id:4,
    title:"Masai LMS",
    imgLink:lms,
    gitLink:"",
    deployLink:"https://masai-prototype.netlify.app/",
    descrip:"This is the Masai Build and Earn Project. We build learning management system of any online learning organization like masai school . we add all functionality under the security like login logout and protecting routing . basically this application for two type of user admin and user .admin or instructor make and schedule the lecture for student and student join on the time.",
    teckStack:[{id:1,icon:html,name:"html"},{id:2,icon:css,name:"css"},{id:3,icon:javascript,name:"javascipt"},{id:4,icon:reactm,name:"react"},{id:5,icon:reduxmini,name:"redux"},{id:6,icon:chakra,name:"chakra-ui"}]
  },
  {
    id:6,
    title:"BuyersHub",
    imgLink:buyershub,
    gitLink:"https://github.com/praveen021097/buyershub",
    deployLink:"https://buyershub.vercel.app/",
    descrip:"Welcome to our cutting-edge e-commerce platform, where seamless functionality and a user-centric design converge to provide you with an unparalleled online shopping experience. Built with a powerful tech stack comprising React, Redux, Node.js, Express, and MongoDB, our website is engineered to deliver speed, reliability, and responsiveness.",
    teckStack:[{id:1,icon:html,name:"html"},{id:2,icon:css,name:"css"},{id:3,icon:javascript,name:"javascipt"},{id:4,icon:reactm,name:"react"},{id:5,icon:reduxmini,name:"redux"},{id:6,icon:nodejs,name:"nodeJs"},{id:7,icon:expressJs,name:"expressJs"},{id:8,icon:mongo,name:"mongoDB"}]
  }
  ,{
    id:1,
    title:"Rodan+Fields",
    imgLink:rodan,
    gitLink:"https://github.com/Mallikarjuna-dev/serene-scarecrow-3205.git",
    deployLink:"https://rodanandfields-clone-orcin.vercel.app/",
    descrip:"Rodan & Fields also known as R+F, is an American multi-level marketing company specializing in skincare products. It uses independent consultants to sell its products. I along with my 3 team members built this project in 6 days time duration in the construct week at Masai.",
    teckStack:[{id:1,icon:html,name:"html"},{id:2,icon:css,name:"css"},{id:3,icon:javascript,name:"javascipt"},{id:4,icon:reactm,name:"react"},{id:5,icon:chakra,name:"chakra-ui"},{id:6,icon:json,name:"json-server"},{id:7,icon:heroku,name:"heroku"}]
  },
  {
    id:2,
    title:"QuesTymes",
    imgLink:ques,
    gitLink:"",
    deployLink:"https://ques-tymes.netlify.app/",
    descrip:"This is the Masai Build and Earn collaborative Project.The application provides the features of interview schedulling and one on one session.The highlighting fuctionalities are login/signUp ,calender booking, email notification and reminder and other required functionalities also.",
    teckStack:[{id:1,icon:html,name:"html"},{id:2,icon:css,name:"css"},{id:3,icon:javascript,name:"javascipt"},{id:4,icon:reactm,name:"react"},{id:5,icon:reduxmini,name:"redux"},{id:6,icon:chakra,name:"chakra-ui"},{id:7,icon:typescript,name:"typescript"}]

  },
]
const Projects = () => {

  return (
    <Box h={"auto"} width={"80%"} mt={"50px"} m={"auto"}  pt={"70px"}>
      <Heading color={"white"}>Projects</Heading>
      <Flex justifyContent={"center"} flexWrap={"wrap"} gap={4} p={"20px"} >
        {list.map((item)=>{
          return <Box
          key={item.id}
          width={"400px"}
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
          <Flex w={"95%"} h={"5%"} m={"auto"} justifyContent={"center"} mt={"10px"}gap={2}>
            {item.teckStack.map((icon)=>{
              return <Image src={icon.icon} alt={icon.name} w={"10%"} h={"30%"}/>
            })}
          </Flex>
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
          
           {item.gitLink? <Link
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
            </Link>:""}

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
