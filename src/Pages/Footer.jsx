import {
  Box,
  chakra,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ReactNode } from "react";
import { useRef } from "react";
import Home from "./Home";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      position={"sticky"}
      zIndex={9}
    >
        
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
         
      
        >
          <Text bgGradient="linear(to-l, #e70c0c, #100f0f)"
                    bgClip="text"
                    fontSize="1xl"
                    fontWeight="extrabold"
                    fontStyle={"italic"}
                    fontFamily={"sans-serif"}>© 2023 Praveen Kumar. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"https://twitter.com/Praveenkm97"} target='_blank'>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"Github"} href={"https://github.com/praveen021097"} target='_blank'>
              <FaGithub />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"https://www.instagram.com/coderpk_97/"} target='_blank'>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"LinkedIn"} href={"https://www.linkedin.com/in/praveen-kumar-036005184/"} target='_blank'>
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
