import React from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const ProductDetailsModal = ({ data }: any) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const viewDetailsHandler = () => {
    setOpen(true);
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
        onClick={viewDetailsHandler}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
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
                <img src={data.productImg} />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Avatar
                  src={data.productImg}
                  sx={{ width: "100px", height: "120px" }}
                  variant="square"
                />
                <Avatar
                  src={data.productImg}
                  sx={{ width: "100px", height: "120px" }}
                  variant="square"
                />
                <Avatar
                  src={data.productImg}
                  sx={{ width: "100px", height: "120px" }}
                  variant="square"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ py: 5 }}>
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
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ProductDetailsModal;
