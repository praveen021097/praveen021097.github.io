import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
import "../App.css"
const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box border={"2px solid red"}>
      {showScrollTopButton && (
        <FaAngleDoubleUp
          className="top-btn-position top-btn-style"
          onClick={scrollTop}
        />
      )}
    </Box>
  );
};

export default ScrollToTop;