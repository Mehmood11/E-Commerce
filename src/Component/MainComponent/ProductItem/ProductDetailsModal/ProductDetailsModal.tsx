import React, { useState, useId } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  productListHandler,
} from "../../../../store/productSlice/ProductSlice";
import { useSnackbar } from "notistack";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "660px",
  overFlow: "auto",
  p: 4,
  zIndex: 111,
  borderRadius: "10px",
};

const ProductDetailsModal = ({ data }: any) => {
  const productId = useId();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const [smallImg, setSmallImg] = useState(0);
  const [img, setImg] = useState<any>(data.imageArray[smallImg]);
  const increaseQuantit = useSelector((state: any) => state.increaseQuantity);
  const productList = useSelector((state: any) => state.productList);

  const handleClose = () => setOpen(false);
  const smallImageHanlder = (i: any, item: any) => {
    setImg(item);
    setSmallImg(i);
  };

  let item = {
    id: productId,
    totalQuantity: increaseQuantit,
    title: data.text,
    price: data.price,
    rating: data.rating,
    productImage: img,
  };

  const addToCartHandler = () => {
    const filteredArray = productList?.findIndex(
      (items: any) => items?.id === item?.id
    );
    
    if (filteredArray === -1) {
      dispatch(productListHandler(item));
      enqueueSnackbar("Item have been added Successfully", {
        variant: "success",
      });
    } else
      enqueueSnackbar("Item have already been added", {
        variant: "warning",
      });
  };

  return (
    <>
      <FullscreenIcon
        sx={{
          position: "absolute",
          top: 40,
          right: 10,
          cursor: "pointer",
          fill: "#3E2B24",
        }}
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container sx={{ px: 3 }}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <Avatar
                  src={img}
                  sx={{
                    width: "100%",
                    height: "500px",
                  }}
                  variant="square"
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                {data.imageArray?.map((item: any, i: any) => (
                  <Avatar
                    key={i}
                    src={item}
                    sx={{
                      width: "100px",
                      height: "80px",
                      border: `${
                        smallImg === data.imageArray.indexOf(item) &&
                        "1px solid black"
                      }`,
                    }}
                    variant="square"
                    onClick={() => smallImageHanlder(i, item)}
                  />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ py: 7 }}>
              <Typography id="modal-modal-title" variant="h2" component="h2">
                {data.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
                {data.text}
              </Typography>
              <Rating
                sx={{
                  "&.css-ryrseu-MuiRating-root": {
                    fontSize: "1px",
                  },
                }}
                name="read-only"
                value={data.rating}
                readOnly
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: "black",
                    mt: 2,
                    "&:hover": {
                      background: "black",
                    },
                  }}
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <Typography sx={{ p: 1, lineHeight: "2px" }}>
                    Total Quantity:
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      minWidth: "10px",
                      p: 1,
                      lineHeight: "2px",
                      mt: 2,
                      "&:hover": {
                        background: "black",
                      },
                    }}
                    onClick={() => dispatch(increaseQuantity(item))}
                  >
                    +
                  </Button>
                  <Typography sx={{ p: 1, lineHeight: "2px" }}>
                    {increaseQuantit}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      minWidth: "10px",
                      p: 1,
                      lineHeight: "2px",
                      mt: 2,
                      "&:hover": {
                        background: "black",
                      },
                    }}
                    disabled={increaseQuantit > 1 ? false : true}
                    onClick={() => dispatch(decreaseQuantity(item))}
                  >
                    -
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ProductDetailsModal;
