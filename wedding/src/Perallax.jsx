import { Box, Typography, Button } from "@mui/material";
import ButtonMore from "./ButtonMore";
import { useRef } from "react";
const ParallaxHeader = ({ scrollToCards }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        top: "50%",
        left: "50%",
        margin: "auto",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        display: "flex",
        padding: "50px",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",

        gap: 2,
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            overflow: "hidden",
            fontWeight: 500,
            fontFamily: "'Petit Formal Script', cursive",
            textShadow: "-2px -2px 0 black",
            WebkitTextStroke: "1px black",
          }}
        >
          Dziękujemy, że byliście z nami w tym wyjątkowym dniu! 💕
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontWeight: 400,
            fontSize: "25px",
            textShadow: "-2px -2px 0 white",
            fontFamily: "cursive",
          }}
        >
          Aleskandra i Dawid Leszczyńscy zapraszają do oglądania zdjęć
        </Typography>
      </Box>

      <ButtonMore onCLick={scrollToCards} />
    </Box>
  );
};
export default ParallaxHeader;
