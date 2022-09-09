import React from "react";
import { useHistory } from "react-router-dom";
import "./smallvideo.css";

export const Smallvideo = ({ channelView = false }) => {
  const history = useHistory();
  const handleClickRedirect = () => history.push("./watch");

  return (
    <div>
      <div
        onClick={handleClickRedirect}
        className={"videosmall channelView_S_channelView"}
      >
        <div className="videosmall_left">
          <img
            src="https://th.bing.com/th/id/OIP.o7rV4wCzv5moCStmLNUZGwHaEK?w=292&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
            alt="thumbnail"
            className={"videosmall_thumbnail Si_channelView"}
          />
        </div>
        <div className="videosmall_right">
          <p className="videothumb_title">Dealing with lifes big issues</p>
          <div className="videosmall_texts videothumb_texts">
            {!channelView && <p className="videothumb_text">Dart_Tee media</p>}

            <p className="videothumb_text">345 views . 6 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smallvideo;
