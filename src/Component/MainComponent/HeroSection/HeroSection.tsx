import { Button, Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliderImage from "../../../assets/sliderImage.jpg";
import sliderImage2 from "../../../assets/sliderImage2.jpg";
import "./HeroSection.scss";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";

const mainSlider = [
  {
    id: 1,
    img: sliderImage,
    mainTitle: "New Product",
    title: "Flexible Chair",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 o (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
  },
  {
    id: 2,
    img: sliderImage2,
    mainTitle: "New Product",
    title: "Flexible Chair",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 o (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
  },
];

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="main-slider"
      style={{
        width: "100%",
        // height: "100vh",
        overflow: "auto",
        boxSizing: "border-box",
        position: "relative",
        // "&::-webkit-scrollbar": {
        //   display: "none",
        // },
      }}
    >
      <Grid
        container
        sx={{
          position: "absolute",
          top: 0,
          zIndex: "121212",
        }}
      >
        <Grid item xs={12} md={4}></Grid>
        <Grid
          item
          xs={12}
          md={4}
          borderTop="45px solid transparent"
          bgcolor={"white"}
          display={"flex"}
          justifyContent={"center"}
          position="relative"
          width={"100%"}
        >
          <div
            style={{
              position: "absolute",
              left: -25,
              top: -50,
              width: 0,
              transform: "rotate(180deg)",
              height: 0,
              borderLeft: "25px solid transparent",
              borderRight: "25px solid transparent",
              borderBottom: "50px solid white",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              right: -25,
              top: -50,
              width: 0,
              transform: "rotate(180deg)",
              height: 0,
              borderLeft: "25px solid transparent",
              borderRight: "25px solid transparent",
              borderBottom: "50px solid white",
            }}
          ></div>
          <Box
            sx={{
              position: "absolute",
              top: -49,
              width: "100%",
              borderTop: "1px dotted black",
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                boxShadow: "none",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, border: "none" }}
                placeholder="Search Product"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          // sx={{ backgroundColor: "black" }}
        ></Grid>
      </Grid>
      <Carousel showThumbs={false} infiniteLoop>
        {mainSlider.map((step: any, index: any) => (
          <div key={index} style={{ position: "relative" }}>
            <img src={step.img} />
            <Box
              sx={{
                zIndex: "1224234234",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography variant="h4" sx={{ color: "white" }}>
                {step.mainTitle}
              </Typography>
              <Typography variant="h1" sx={{ color: "white" }}>
                {step.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                {step.text}
              </Typography>
              <Button variant="contained">Shop Now</Button>
            </Box>
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default HeroSection;
