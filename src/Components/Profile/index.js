
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
const Profile = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    Dashboard
                </Button>
                <Menu
                    id=""
                    style={{ backgroundColor: "red" }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <MenuItem className="" onClick={handleClose}>Profile</MenuItem>
                    <MenuItem className="" onClick={handleClose}>My account</MenuItem>
                    <MenuItem className="" onClick={handleClose}>Logout</MenuItem>
                    <Fab variant="extended">
                        <NavigationIcon sx={{ mr: 1 }} />
                        Navigate
                    </Fab>
                </Menu>
            </div>



        </>
    );
};

export default Profile;
