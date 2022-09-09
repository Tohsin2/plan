import React from "react";
import "./sidebar.css";
import { useHistory } from "react-router-dom";
import {
  Home,
  Explore,
  Subscriptions,
  History,
  ViewDay,
  WatchLater,
  RecentActorsOutlined,
  VideoLibrary,
  OndemandVideo,
  ExpandMore,
  ThumbUp,
  SportsFootball,
  GamepadOutlined,
  YouTube,
  CreateNewFolderRounded,
  MusicVideo,
  ChildCareRounded,
  TvOutlined,
  Settings,
  Report,
  HelpOutlineOutlined,
  FeedbackOutlined,
  Copyright,
} from "@material-ui/icons";

const Sidebar = ({ changeWidth}) => {
const history =  useHistory();
  const handleClick = () => history.push("/")
  return (
    <div className={`sidebar ${changeWidth && "sidebar_extrawidth"}`}>
      <div className="sidebar_button">
        <div onClick={handleClick}className="sidebar_btn sidebar_btn--active">
          <Home className="sidebar_icon" />
          <p>Home</p>
        </div>
        <div className="sidebar_btn">
          <Explore className="sidebar_icon" />
          <p>Explore</p>
        </div>
        <div className="sidebar_btn">
          <ViewDay className="sidebar_icon" />
          <p>Shorts</p>
        </div>
        <div className="sidebar_btn">
          <Subscriptions className="sidebar_icon" />
          <p>Subscriptions</p>
        </div>
      </div>
      <div className="sidebar_button">
        <div className="sidebar_btn ">
          <VideoLibrary className="sidebar_icon" />
          <p>Library</p>
        </div>
        <div className="sidebar_btn">
          <History className="sidebar_icon" />
          <p>History</p>
        </div>

        <div className="sidebar_btn ">
          <OndemandVideo className="sidebar_icon" />
          <p>Your Videos</p>
        </div>

        <div className="sidebar_btn ">
          <WatchLater className="sidebar_icon" />
          <p>Watch later</p>
        </div>
        <div className="sidebar_btn ">
          <RecentActorsOutlined className="sidebar_icon" />
          <p>React</p>
        </div>
        <div className="sidebar_btn ">
          <ThumbUp className="sidebar_icon" />
          <p> Liked Videos</p>
        </div>
        <div className="sidebar_btn ">
          <ExpandMore className="sidebar_icon" />
          <p>Show More</p>
        </div>
      </div>
      <div className="sidebar_button">
        <h4 className="sidebar_h4">EXPLORE</h4>
        <div className="sidebar_btn ">
          <GamepadOutlined className="sidebar_icon" />
          <p>Gaming</p>
        </div>

        <div className="sidebar_btn ">
          <SportsFootball className="sidebar_icon" />
          <p>Sports</p>
        </div>
      </div>
      <div className="sidebar_button">
        <h4 className="h4">More From YouTube</h4>
        <div className="sidebar_btn ">
          <YouTube className="sidebar_icon" />
          <p>YouTube Premium</p>
        </div>

        <div className="sidebar_btn ">
          <CreateNewFolderRounded className="sidebar_icon" />
          <p>Create Studio</p>
        </div>

        <div className="sidebar_btn ">
          <MusicVideo className="sidebar_icon" />
          <p>YouTube Music</p>
        </div>

        <div className="sidebar_btn ">
          <ChildCareRounded className="sidebar_icon" />
          <p>YouTube Kids</p>
        </div>

        <div className="sidebar_btn ">
          <TvOutlined className="sidebar_icon" />
          <p>Create Studio</p>
        </div>
      </div>
      <div className="sidebar_button">
        <div className="sidebar_btn ">
          <Settings className="sidebar_icon" />
          <p>Settings</p>
        </div>

        <div className="sidebar_btn ">
          <Report className="sidebar_icon" />
          <p>Reprt History</p>
        </div>

        <div className="sidebar_btn ">
          <HelpOutlineOutlined className="sidebar_icon" />
          <p>Help</p>
        </div>

        <div className="sidebar_btn ">
          <FeedbackOutlined className="sidebar_icon" />
          <p>Send Feedback</p>
        </div>
      </div>
      <br />
      <div className="sidebar_btn">
        <span>About</span>
        <span>Press</span>
        <span>Coyright</span>
      </div>
      <div className="sidebar_btn">
        <span>Contact Us</span>
        <span>Creators</span>
      </div>
      <div className="sidebar_btn">
        <span>Advertise developers</span>
      </div>
      <div className="sidebar_btn">
        <span> Terms Privacy Policy &Safety</span>
      </div>
      <div className="sidebar_btn">
        <span>How Youtube works</span>
      </div>
      <div className="sidebar_btn">
        <span>Test new features</span>
      </div>
      <br /> <br /> <br />
      <div className="sidebar_btn s">
        <Copyright className="sidebar_icon" />
        <span>2022 Google LLC</span>
      </div>
    </div>
  );
};

export default Sidebar;
