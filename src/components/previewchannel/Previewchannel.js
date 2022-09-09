import { Person } from "@material-ui/icons";
import React from "react";
import download from "../../asset/fronter.jpeg";
import Smallvideo from "../smallvideo/Smallvideo";
import "./previewchannel.css";

const Previewchannel = () => {
  return (
    <div className="channel">
      <img className="channel_a" src={download} alt="" />
      <div className="c_detail">
        <div className="c_detailwrap">
          <div className="c_personwrap">
            <Person className="c_person" />

            <div className="videothumb_channel">
              <h1 className="videothumb_title channel_title">DarT_Tee Media</h1>

              <p className="videothumb_text watch_subcount">
                42.8M Subscribers
              </p>
            </div>
          </div>
          <button className="watch_subbtn"> SUBSCRIBE</button>
        </div>

        <div className="links">
          <div className="c_links">
            <p> HOME</p>
          </div>
          <div className="c_links c_lin">
            <p> VIDEOS</p>
          </div>
          <div className="c_links">
            <p> COMMUNITY</p>
          </div>
          <div className="c_links">
            <p> PLAYLISTS</p>
          </div>
          <div className="c_links">
            <p> CHANNELS</p>
          </div>
          <div className="c_links">
            <p> ABOUT</p>
          </div>
        </div>
      </div>
     

      <div className="c_content">
        <div className="c_contentwrap">
          <Smallvideo channelView />
          <Smallvideo channelView/>
          <Smallvideo channelView/>
          <Smallvideo channelView/>
          <Smallvideo channelView/>
          <Smallvideo channelView/>
          <Smallvideo channelView/>
          <Smallvideo channelView/>
          <Smallvideo channelView/>
          <Smallvideo channelView/>
          <Smallvideo channelView/>
          <Smallvideo channelView/>
          
         
         
          
        </div>
      </div>
    </div>
  );
};

export default Previewchannel;
