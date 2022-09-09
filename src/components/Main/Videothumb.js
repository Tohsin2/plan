import { Person } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";

const Videothumb = () => {
  const history = useHistory();

  const handleThumbClick = () => history.push("/watch");
  const handlePersonClick = () => history.push("/PerviewChannel");

  return (
    <div className="videothumb">
      <img
        onClick={handleThumbClick}
        className="videothumb_thumbnail"
        src="https://th.bing.com/th/id/OIP.UB5d6jEm0no31qTmB3bTEQAAAA?w=259&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
        alt="Thumbnail"
      />
      
      <div className="videothumb_details">
        <div className="avatar">
          <Person onClick={handlePersonClick} />
        </div>

        <div className="videothumb_channel">
          <h1 className="videothumb_title">How to go into tech</h1>

          <div className="videothumb_texts">
            <p className="videothumb_text">Tech</p>
            <p className="videothumb_text">345 views . 10 hours ago</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Videothumb;
