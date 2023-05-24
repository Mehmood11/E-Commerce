import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import chairLogo from "../../assets/chair.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const Header = () => {
  const [age, setAge] = React.useState("English (UK)");
  const favProduct = useSelector((state: any) => state.favProduct);
  const productList = useSelector((state: any) => state.productList);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div className="main-header">
      <Grid container>
        <Grid item xs={12} md={5} sx={{ backgroundColor: "#3E2B24", p: 1.5 }}>
          <Typography component={"span"} sx={{ color: "white" }}>
            Call us on +33 3232332
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          borderBottom="50px solid transparent"
          borderLeft={"0px solid #3E2B24"}
          borderRight={"0px solid black"}
          bgcolor={"transparent"}
          display={"flex"}
          justifyContent={"center"}
          sx={{
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: -26,
              top: -1,
              width: 0,
              height: 0,
              borderLeft: "25px solid transparent",
              borderRight: "25px solid transparent",
              borderBottom: "50px solid white",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              right: -26,
              top: -1,
              width: 0,
              height: 0,
              borderLeft: "25px solid transparent",
              borderRight: "25px solid transparent",
              borderBottom: "50px solid white",
            }}
          ></div>
          <Typography component={"span"} sx={{ position: "absolute", top: 10 }}>
            Flexible Chairs
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            component={"span"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span> Language: </span>
            <FormControl sx={{ minWidth: 130 }} size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  color: "white",
                  fontSize: "12px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                    fontSize: "12px",
                  },
                  "& .MuiSvgIcon-root ": {
                    fontSize: "16px",
                    fill: "white !important",
                  },
                }}
              >
                <MenuItem
                  value="English (UK)"
                  sx={{
                    fontSize: "12px",
                  }}
                >
                  English (UK)
                </MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4} className="navbar-item" p={4}>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={chairLogo}
            alt="chair logo"
            style={{ width: "100px", height: "" }}
          />
        </Grid>
        <Grid item xs={12} md={4} display="flex" justifyContent="center" p={4}>
          <Box sx={{ px: 2, position: "relative" }}>
            <Typography
              component="span"
              sx={{
                position: "absolute",
                top: -2,
                right: 11,
                backgroundColor: "#3E2B24",
                color: "white",
                px: 0.6,
                fontSize: "10px",
                borderRadius: "50%",
              }}
            >
              {favProduct.length}
            </Typography>
            <FavoriteBorderIcon />
          </Box>
          <Box sx={{ position: "relative" }}>
            <Typography
              component="span"
              sx={{
                position: "absolute",
                top: -2,
                right: -2,
                backgroundColor: "#3E2B24",
                color: "white",
                px: 0.6,
                fontSize: "10px",
                borderRadius: "50%",
              }}
            >
              {productList.length}
            </Typography>
            <ShoppingCartIcon />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
