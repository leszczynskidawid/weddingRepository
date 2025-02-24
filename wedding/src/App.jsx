import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header/Header";
import {
  Box,
  CardContent,
  CardHeader,
  Container,
  Paper,
  Card,
  Typography,
  CardMedia,
  Grid2,
} from "@mui/material";
import CardCompoonent from "./CardComponent";

function App() {
  const cardSectionRef = useRef(null);

  const scrollToCards = () => {
    cardSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Paper sx={{}}>
      <Header scrollToCards={scrollToCards} />
      <Box
        ref={cardSectionRef}
        sx={{
          display: "flex",

          padding: "25px",
          position: "relative",
          left: 0,
          backgroundColor: "rgba(39, 30, 35, 0.8)",

          "&::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.2,
            zIndex: 0,
            backgroundSize: "cover",
            objectFit: "contain",
            backgroundPosition: "center",

            backgroundRepeat: "no-repeat",
            backgroundImage: `url('zdjecia/pobrane.png')`,
          },
        }}
      >
        <Grid2 container mx={2} spacing={2} justifyContent={"center"}>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/przygotowania.png"}
              title={"Przygotowania"}
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/blogoslawienstwo.png"}
              title={"Błogosławieństwo"}
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/pierwszy_taniec.png"}
              title={"Pierszy taniec"}
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/sesja_slubna.png"}
              title={"Sesja ślubna"}
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/grupowe.png"}
              title={"Grupowe"}
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/sesja_plener.png"}
              title={"Sesja plener"}
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent image={"../zdjecia/wesele.png"} title={"Wesele"} />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/Aleksandra_Dawid_349.jpg"}
              title={"Ślub"}
            />
          </Grid2>
        </Grid2>
      </Box>
    </Paper>
  );
}

export default App;
