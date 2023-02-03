import { Box, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import p1 from "../../../assets/products/p1.png";
import p2 from "../../../assets/products/p2.png";
import p3 from "../../../assets/products/p3.png";
import p4 from "../../../assets/products/p4.png";
import p5 from "../../../assets/products/p5.png";
import p6 from "../../../assets/products/p6.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { favProductAction } from "../../../store/productSlice/ProductSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import "./ProductItem.scss";
const chairArray = [
  {
    id: 1,
    productImg: p1,
    title: "Chair",
    price: 12,
    rating: 2,
  },
  {
    id: 2,
    productImg: p2,
    title: "Chair",
    price: 12,
    rating: 3,
  },
  {
    id: 3,
    productImg: p3,
    title: "Chair",
    price: 12,
    rating: 1,
  },
  {
    id: 4,
    productImg: p4,
    title: "Chair",
    price: 12,
    rating: 5,
  },
  {
    id: 5,
    productImg: p5,
    title: "Chair",
    price: 12,
    rating: 1,
  },
  {
    id: 6,
    productImg: p6,
    title: "Chair",
    price: 12,
    rating: 2,
  },
];
const ProductItem = () => {
  const [favIcon, setFavIcon] = useState(false);
  const favProduct = useSelector((state: any) => state.favProduct);
  console.log(favProduct);

  const disptach = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "fle",
        flexDirection: "column",
        m: "0 auto",
        width: "70%",
        height: "100vh",
        // background: "#333",
      }}
    >
      <Typography variant="h2" className="fancy">
        Product
      </Typography>
      <Grid spacing={1} container>
        {chairArray.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                m: 1,
                mt: 0,
                p: 1,
                position: "relative",
                // background: "rgba(255,255,255,0.25)",
                backdropFilter: " blur(10px)",
                borderRadius: "12px",
                border: "1px solid #333",
              }}
            >
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
              <FavoriteBorderIcon
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  cursor: "pointer",
                  fill: "#3E2B24",
                }}
                onClick={() => {
                  disptach(favProductAction(item));
                  setFavIcon(!favIcon);
                }}
              />
              {favProduct?.find((items: any) => items.id === item.id) ? (
                <FavoriteIcon
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    cursor: "pointer",
                    fill: "#3E2B24",
                  }}
                  onClick={() => {
                    disptach(favProductAction(item));
                  }}
                />
              ) : (
                <FavoriteBorderIcon
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    cursor: "pointer",
                    fill: "#3E2B24",
                  }}
                  onClick={() => {
                    disptach(favProductAction(item));
                  }}
                />
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductItem;
