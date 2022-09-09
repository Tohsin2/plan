import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
  Mic,
  CameraAltOutlined,
  PersonAddOutlined,
} from "@material-ui/icons";
import React from "react";
import logo from "../../asset/Youtube.jpeg";
import { Button, Popover, Avatar, Badge } from "@material-ui/core";
import "./Header.css";

const Header = () => {
  const [anchorE1, setAnchorE1] = React.useState(null);

  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };
  const open = Boolean(anchorE1);
  const id = open ? "simple*popover" : undefined;

  return (
    <div className="header">
      <div className="header_left">
        <Menu className=" header_menuicon" />
        <img className="header_logo" src={logo} alt="Youtube" />
      </div>
      <form className="header_center">
        <input className="header_input" placeholder="Search" />
        <Button className="header_btn">
          <Search className="header_searchicon" />
        </Button>
        <div className="mic">
          <Mic />
        </div>
      </form>
      <div className="header_right">
        <VideoCall />
        <Apps />
        <Notifications />
        <Avatar onClick={handleClick} />
        <Popover
          open={open}
          id={id}
          onClose={handleClose}
          anchorE1={anchorE1}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "center",
          }}
        >
          <div className="p_container">
            <div className="home_popover">
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={
                  <div className="home_badge">
                    <CameraAltOutlined className="home_camera" />
                  </div>
                }
              >
                <Avatar className="h_avatar" />
              </Badge>

              <div className="h_text">
                <div className="h_name">DAMILARE </div>
                <div className="h_nail"> dartee253@gmail.com</div>
              </div>
              <div className="h_btn">Manage your google account</div>
            </div>
            <div className="h_pop_btn">
              <div className="h_addbtn">
                <PersonAddOutlined classname="h_icon" />
                <p>Add another account</p>
              </div>
              <Button variant="outlined" className="h_signout">
                Sign Out
              </Button>
            </div>
            <div className="footer">
              <p>Privacy Policy </p>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
