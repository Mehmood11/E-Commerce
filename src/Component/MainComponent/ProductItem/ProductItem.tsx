import { Box, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";
import Rating from "@mui/material/Rating";
import p1 from "../../../assets/products/p1.png";
import p2 from "../../../assets/products/p2.png";
import p3 from "../../../assets/products/p3.png";
import p4 from "../../../assets/products/p4.png";
import p5 from "../../../assets/products/p5.png";
import p6 from "../../../assets/products/p6.png";
const chairArray = [
  {
    productImg: p1,
    title: "Chair",
    price: 12,
    rating: 2,
  },
  {
    productImg: p2,
    title: "Chair",
    price: 12,
    rating: 3,
  },
  {
    productImg: p3,
    title: "Chair",
    price: 12,
    rating: 1,
  },
  {
    productImg: p4,
    title: "Chair",
    price: 12,
    rating: 5,
  },
  {
    productImg: p5,
    title: "Chair",
    price: 12,
    rating: 1,
  },
  {
    productImg: p6,
    title: "Chair",
    price: 12,
    rating: 2,
  },
];
const ProductItem = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4 }}
    >
      <Grid
        spacing={1}
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // width: "80%",
        }}
      >
        {chairArray.map((item, i) => (
          <Grid
            item
            xs={12}
            md={4}
            key={i}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              m: 1,
              boxSizing: "border-box",
              border: "1px solid gray",
            }}
          >
            {/* <img src={item.productImg} /> */}
            <Avatar
              src={item.productImg}
              sx={{ width: "300px", height: "220px" }}
              variant="square"
            />
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body1">Price: ${item.price}</Typography>
            <Rating
              sx={{
                "&.css-ryrseu-MuiRating-root": {
                  fontSize: "1px",
                },
              }}
              name="read-only"
              value={item.rating}
              readOnly
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductItem;
