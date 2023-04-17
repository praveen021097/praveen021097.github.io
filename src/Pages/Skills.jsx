import React from 'react'
import { Box, Flex ,Text,Image, Heading} from '@chakra-ui/react';
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
import GitHubCalendar from 'react-github-calendar';
const Skills = () => {
  return (
   <Box h={"auto"}
   >
        <Flex  w={"80%"} h={"auto"}  m={"auto"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
        <Heading color={"white"}>Skills</Heading>
            <Flex  width={"80%"}  h={"50%"} gap={2} mt={"30px"} flexWrap={"wrap"} justifyContent={"center"}>
              <Box width={"150px"} boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"} h={"200px"}  bg={"white"} borderRadius={"10px"}>
                <Image  src={html} alt='html' w={"90%"} h={"75%"} m={"auto"}/>
                <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                fontStyle={"italic"}
                fontFamily={"sans-serif"}>HTML</Text>
              </Box>
              <Box width={"150px"} pt={"10px"}  pl={"10px"} pr={"10px"}  boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"} h={"200px"}  bg={"white"} borderRadius={"10px"} >
              <Image  src={css} alt='html' w={"85%"} h={"70%"} m={"auto"}/>
              <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                fontStyle={"italic"}
                fontFamily={"sans-serif"}>CSS</Text>
              </Box>
              <Box width={"150px"} pt={"10px"}  pl={"10px"} pr={"10px"}  boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"} h={"200px"}  bg={"white"} borderRadius={"10px"}>
              <Image  src={javascript} alt='html' w={"90%"} h={"75%"} m={"auto"}/>
              <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                fontStyle={"italic"}
                fontFamily={"sans-serif"}>JS</Text>
              </Box>
              <Box width={"150px"} pt={"10px"}  pl={"10px"} pr={"10px"}  boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"} h={"200px"}  bg={"white"} borderRadius={"10px"} >
              <Image  src={react} alt='html' w={"90%"} h={"75%"} m={"auto"}/>
              <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                fontStyle={"italic"}
                fontFamily={"sans-serif"}>REACT</Text>
              </Box>
              <Box width={"150px"} pt={"10px"}  pl={"10px"} pr={"10px"}  boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"} h={"200px"}  bg={"white"} borderRadius={"10px"} >
              <Image  src={redux} alt='html' w={"90%"} h={"75%"} m={"auto"}/>
              <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                fontStyle={"italic"}
                fontFamily={"sans-serif"}>REDUX</Text>
              </Box>
              <Box width={"150px"} pt={"10px"}  pl={"10px"} pr={"10px"}  boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"} h={"200px"}  bg={"white"} borderRadius={"10px"} >
              <Image  src={node} alt='html' w={"90%"} h={"75%"} m={"auto"}/>
              <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                fontStyle={"italic"}
                fontFamily={"sans-serif"}>nodeJS</Text>
              </Box>
              <Box width={"150px"}  boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"} h={"200px"}  bg={"white"} borderRadius={"10px"} >
              <Image  src={mongo} alt='html' w={"90%"} h={"75%"} m={"auto"}/>
              <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                fontStyle={"italic"}
                fontFamily={"sans-serif"}>MONGO</Text>
              </Box>
              <Box width={"150px"} pt={"10px"}  pl={"10px"} pr={"10px"}  boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"} h={"200px"}  bg={"white"} borderRadius={"10px"} >
              <Image  src={git} alt='html' w={"90%"} h={"75%"} m={"auto"}/>
              <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                fontStyle={"italic"}
                fontFamily={"sans-serif"}>GIT</Text>
              </Box>
              <Box width={"150px"} pt={"10px"}  pl={"10px"} pr={"10px"}  boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"} h={"200px"}  bg={"white"} borderRadius={"10px"} >
              <Image  src={github} alt='html' w={"90%"} h={"75%"} m={"auto"}/>
              <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                fontStyle={"italic"}
                fontFamily={"sans-serif"}>GIThub</Text>
              </Box>
              <Box width={"150px"} pt={"10px"}  pl={"10px"} pr={"10px"}  boxShadow={"rgba(234, 13, 13, 0.842) 0px 3px 8px"} h={"200px"}  bg={"white"} borderRadius={"10px"} >
              <Image  src={vscode} alt='html' w={"90%"} h={"75%"} m={"auto"}/>
              <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                fontStyle={"italic"}
                fontFamily={"sans-serif"}>VsCode</Text>
              </Box>
            </Flex>
            <Box width={"85%"}  h={"25%"} borderRadius={"10px"} bg={"white"} mt={"20px"} alignItems={"center"} p={"20px"}>
              <GitHubCalendar username='praveen021097' colorScheme="light" />
            </Box>

        </Flex>
   </Box>
  )
}

export default Skills
