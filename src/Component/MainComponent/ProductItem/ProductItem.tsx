import { Box, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
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
import { useSnackbar } from "notistack";
import ProductDetailsModal from "./ProductDetailsModal/ProductDetailsModal";
import "./ProductItem.scss";

const chairArray = [
  {
    id: 1,
    imageArray: [p1, p3, p2],
    title: "Chair",
    price: 12,
    rating: 2,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 o (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
  },
  {
    id: 2,
    imageArray: [p2, p4, p5],
    title: "Chair",
    price: 12,
    rating: 3,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 o (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
  },
  {
    id: 3,
    imageArray: [p3, p5, p2],
    title: "Chair",
    price: 12,
    rating: 1,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 o (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
  },
  {
    id: 4,
    imageArray: [p4, p3, p2],
    title: "Chair",
    price: 12,
    rating: 5,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 o (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
  },
  {
    id: 5,
    imageArray: [p5, p3, p2],
    title: "Chair",
    price: 12,
    rating: 1,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 o (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
  },
  {
    id: 6,
    imageArray: [p6, p3, p2],
    title: "Chair",
    price: 12,
    rating: 2,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 o (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
  },
];

const ProductItem = () => {
  const favProduct = useSelector((state: any) => state.favProduct);

  const { enqueueSnackbar } = useSnackbar();
  const disptach = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "fle",
        flexDirection: "column",
        m: "0 auto",
        width: "60%",
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
                backdropFilter: " blur(10px)",
                borderRadius: "12px",
                border: "1px solid #333",
              }}
            >
              <Avatar
                src={item.imageArray[0]}
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
              {favProduct?.find((items: any) => items.id === item.id) ? (
                <FavoriteIcon
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    cursor: "pointer",
                    fill: "red",
                  }}
                  onClick={() => {
                    enqueueSnackbar("Item have been removed from wishlist", {
                      variant: "warning",
                    });
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
                    fill: "red",
                  }}
                  onClick={() => {
                    disptach(favProductAction(item));
                    enqueueSnackbar("Item Added to wishlist successfully", {
                      variant: "success",
                    });
                  }}
                />
              )}
              <ProductDetailsModal data={item} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductItem;
