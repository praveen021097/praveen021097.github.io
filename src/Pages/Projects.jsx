import React from "react";
import {
  Box,
  Button,
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
import { useDisclosure } from "@chakra-ui/react";
import rodan from "../Assets/Projects/rodanfieldsclone.png";
import firstcry from "../Assets/Projects/firstcry.png";
import shopshop from "../Assets/Projects/shopshop.png";
import { BsGithub } from "react-icons/bs";
const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box h={"auto"} width={"80%"} mt={"50px"} m={"auto"}>
      <Heading color={"white"}>Projects</Heading>
      <Flex justifyContent={"center"} flexWrap={"wrap"} gap={4} p={"20px"}>
        <Box
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
            Rodan+Fields
          </Text>
          <Image
            src={rodan}
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
              href="https://rodanandfields-clone-orcin.vercel.app/"
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
            <Box>
            <Button onClick={onOpen}>About</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Rodan+Fields</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>
                    The online reseller platform rodan perhaps requires no
                    introduction. The platform has carved a niche for itself and
                    has gained popularity among consumers and retailers alike by
                    making online reselling and shopping hassle-free and
                    affordable
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
            <Link
              href={
                "https://github.com/Mallikarjuna-dev/serene-scarecrow-3205.git"
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

          
        </Box>
        <Box
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
            Firstcry clone
          </Text>
          <Image
            src={firstcry}
            boxShadow={
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            }
            w={"95%"}
            height={"50%"}
            m={"auto"}
            borderRadius={"15px"}
            mt={"5px"}
          />
          <Flex justifyContent={"space-around"} p={"10px"}>
            <Link
              href="https://firstcry-clone-project.netlify.app/"
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
            <Box>
            <Button onClick={onOpen}>About</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>FirstCry</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>
                    FirstCry is an Indian e-commerce company, headquartered in
                    Pune. The company, launched in 2010, initially focused on
                    baby products retailing. In January 2020, the company had
                    over 380 stores across India.FirstCrys opened its first
                    outlet in Srinagar in May 2019.
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
            <Link
              href={"https://github.com/unnati1004/firstcry.git"}
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

         
        </Box>
        <Box
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
            Indigogo Clone
          </Text>
          <Image
            src={shopshop}
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
              href="https://gregarious-alfajores-075a2f.netlify.app/"
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
            <Box>
            <Button onClick={onOpen}>About</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Indigogo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>
                  Millions of people around the world visit Indiegogo to find clever
            and unconventional things that solve everyday problems large and
            small. By giving entrepreneurs everywhere a platform to launch new
            and groundbreaking products, we help surface innovations in tech,
            design, and much more, all before they go mainstream.
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
            <Link
              href={"https://github.com/Nachiketlele/adjoining-steel-5186.git"}
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
          
          
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Icon,
//   Stack,
//   Text,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import { ReactElement } from 'react';
// import {
//   FcAbout,
//   FcAssistant,
//   FcCollaboration,
//   FcDonate,
//   FcManager,
// } from 'react-icons/fc';

// interface CardProps {
//   heading: string;
//   description: string;
//   icon: ReactElement;
//   href: string;
// }

// const Card = () => {
//   return (
//     <Box
//       maxW={{ base: 'full', md: '275px' }}
//       w={'full'}
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       p={5}>
//       <Stack align={'start'} spacing={2}>
//         <Flex
//           w={16}
//           h={16}
//           align={'center'}
//           justify={'center'}
//           color={'white'}
//           rounded={'full'}
//           bg={useColorModeValue('gray.100', 'gray.700')}>
//           {icon}
//         </Flex>
//         <Box mt={2}>
//           <Heading size="md">{heading}</Heading>
//           <Text mt={1} fontSize={'sm'}>
//             {description}
//           </Text>
//         </Box>
//         <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
//           Learn more
//         </Button>
//       </Stack>
//     </Box>
//   );
// };

// export default function gridListWith() {
//   return (
//     <Box p={4}>
//       <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
//         <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
//           Short heading
//         </Heading>
//         <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
//           obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
//         </Text>
//       </Stack>

//       <Container maxW={'5xl'} mt={12}>
//         <Flex flexWrap="wrap" gridGap={6} justify="center">
//           <Card
//             heading={'Heading'}
//             icon={<Icon as={FcAssistant} w={10} h={10} />}
//             description={
//               'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
//             }
//             href={'#'}
//           />
//           <Card
//             heading={'Heading'}
//             icon={<Icon as={FcCollaboration} w={10} h={10} />}
//             description={
//               'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
//             }
//             href={'#'}
//           />
//           <Card
//             heading={'Heading'}
//             icon={<Icon as={FcDonate} w={10} h={10} />}
//             description={
//               'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
//             }
//             href={'#'}
//           />
//           <Card
//             heading={'Heading'}
//             icon={<Icon as={FcManager} w={10} h={10} />}
//             description={
//               'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
//             }
//             href={'#'}
//           />
//           <Card
//             heading={'Heading'}
//             icon={<Icon as={FcAbout} w={10} h={10} />}
//             description={
//               'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
//             }
//             href={'#'}
//           />
//         </Flex>
//       </Container>
//     </Box>
//   );
// }
