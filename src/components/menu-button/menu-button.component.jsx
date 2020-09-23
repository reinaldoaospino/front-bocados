import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MenuButtonContainer } from "./menu-button.style";

const ButtonMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuButtonContainer>
      <Button
        style={{ color: "white" }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        ☰ Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Shop</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
      </Menu>
    </MenuButtonContainer>
  );
};

export default ButtonMenu;
