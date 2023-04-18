import React from "react";
import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import avatar from "../Assets/avatar.svg";
import css from "../Assets/skills/css.jpg";
import git from "../Assets/skills/git.png";
import github from "../Assets/skills/github.png";
import html from "../Assets/skills/html.png";
import javascript from "../Assets/skills/javascript.png";
import mongo from "../Assets/skills/mongodb.png";
import node from "../Assets/skills/node.png";
import react from "../Assets/skills/react.png";
import redux from "../Assets/skills/redux.png";
import vscode from "../Assets/skills/vscode.png";
import GitHubCalendar from "react-github-calendar";
const Skills = () => {
  return (
    <Box h={"auto"} pt={"70px"}>
      <Flex
        w={"80%"}
        h={"auto"}
        m={"auto"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading color={"white"}>Skills</Heading>
        <Flex
          width={"80%"}
          h={"50%"}
          gap={2}
          mt={"30px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <Box
            width={"150px"}
            boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"}
            h={"200px"}
            bg={"white"}
            borderRadius={"10px"}
          >
            <Image src={html} alt="html" w={"90%"} h={"75%"} m={"auto"} />
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              fontStyle={"italic"}
              fontFamily={"sans-serif"}
            >
              HTML
            </Text>
          </Box>
          <Box
            width={"150px"}
            pt={"10px"}
            pl={"10px"}
            pr={"10px"}
            boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"}
            h={"200px"}
            bg={"white"}
            borderRadius={"10px"}
          >
            <Image src={css} alt="html" w={"85%"} h={"70%"} m={"auto"} />
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              fontStyle={"italic"}
              fontFamily={"sans-serif"}
            >
              CSS
            </Text>
          </Box>
          <Box
            width={"150px"}
            pt={"10px"}
            pl={"10px"}
            pr={"10px"}
            boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"}
            h={"200px"}
            bg={"white"}
            borderRadius={"10px"}
          >
            <Image src={javascript} alt="html" w={"90%"} h={"75%"} m={"auto"} />
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              fontStyle={"italic"}
              fontFamily={"sans-serif"}
            >
              JS
            </Text>
          </Box>
          <Box
            width={"150px"}
            pt={"10px"}
            pl={"10px"}
            pr={"10px"}
            boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"}
            h={"200px"}
            bg={"white"}
            borderRadius={"10px"}
          >
            <Image src={react} alt="html" w={"90%"} h={"75%"} m={"auto"} />
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              fontStyle={"italic"}
              fontFamily={"sans-serif"}
            >
              REACT
            </Text>
          </Box>
          <Box
            width={"150px"}
            pt={"10px"}
            pl={"10px"}
            pr={"10px"}
            boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"}
            h={"200px"}
            bg={"white"}
            borderRadius={"10px"}
          >
            <Image src={redux} alt="html" w={"90%"} h={"75%"} m={"auto"} />
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              fontStyle={"italic"}
              fontFamily={"sans-serif"}
            >
              REDUX
            </Text>
          </Box>
          <Box
            width={"150px"}
            pt={"10px"}
            pl={"10px"}
            pr={"10px"}
            boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"}
            h={"200px"}
            bg={"white"}
            borderRadius={"10px"}
          >
            <Image src={node} alt="html" w={"90%"} h={"75%"} m={"auto"} />
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              fontStyle={"italic"}
              fontFamily={"sans-serif"}
            >
              nodeJS
            </Text>
          </Box>
          <Box
            width={"150px"}
            boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"}
            h={"200px"}
            bg={"white"}
            borderRadius={"10px"}
          >
            <Image src={mongo} alt="html" w={"90%"} h={"75%"} m={"auto"} />
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              fontStyle={"italic"}
              fontFamily={"sans-serif"}
            >
              MONGO
            </Text>
          </Box>
          <Box
            width={"150px"}
            pt={"10px"}
            pl={"10px"}
            pr={"10px"}
            boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"}
            h={"200px"}
            bg={"white"}
            borderRadius={"10px"}
          >
            <Image src={git} alt="html" w={"90%"} h={"75%"} m={"auto"} />
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              fontStyle={"italic"}
              fontFamily={"sans-serif"}
            >
              GIT
            </Text>
          </Box>
          <Box
            width={"150px"}
            pt={"10px"}
            pl={"10px"}
            pr={"10px"}
            boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"}
            h={"200px"}
            bg={"white"}
            borderRadius={"10px"}
          >
            <Image src={github} alt="html" w={"90%"} h={"75%"} m={"auto"} />
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              fontStyle={"italic"}
              fontFamily={"sans-serif"}
            >
              GIThub
            </Text>
          </Box>
          <Box
            width={"150px"}
            pt={"10px"}
            pl={"10px"}
            pr={"10px"}
            boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"}
            h={"200px"}
            bg={"white"}
            borderRadius={"10px"}
          >
            <Image src={vscode} alt="html" w={"90%"} h={"75%"} m={"auto"} />
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              fontStyle={"italic"}
              fontFamily={"sans-serif"}
            >
              VsCode
            </Text>
          </Box>
        </Flex>
        <Box
          width={"85%"}
          h={"25%"}
          borderRadius={"10px"}
          bg={"white"}
          mt={"20px"}
          alignItems={"center"}
          p={"20px"}
        >
          <GitHubCalendar username="praveen021097" colorScheme="light" />
          
          {/* [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=praveen021097&theme=onedark)](https://git.io/streak-stats) */}
        </Box>
        <Box  width={"85%"} m={"auto"}>
        <Flex mt={"15px"} flexWrap={"wrap"} width={"100%"}  justifyContent={"space-between"}>
        <Box  w={"48%"}>
        <Image
            align="center"
            src="https://camo.githubusercontent.com/67fbb88b66c9e8b8715dd6893390c2bf36304fc0379d7a31ce05953d570ce9f1/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d7072617665656e30323130393726"
            alt="praveen021097"
            data-canonical-src="https://github-readme-streak-stats.herokuapp.com?user=praveen021097&theme=onedark"
            style={{ "max-width": "100%" }}
          />
        </Box>
          <Box  w={"48%"}><Image
            align="center"
            src="https://camo.githubusercontent.com/0826d3b7c35c0a4977c5cd8ebd0bbc0d44f714c76817c8a16a73b0d340d62c97/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d7072617665656e3032313039372673686f775f69636f6e733d74727565266c6f63616c653d656e"
            alt="praveen021097"
            data-canonical-src="https://github-readme-stats.vercel.app/api?username=praveen021097&amp;show_icons=true&amp;locale=en"
            style={{ "max-width": "100%" }}
          /></Box>
        </Flex>
         
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;
