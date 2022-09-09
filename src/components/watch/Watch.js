import {
  MoreHoriz,
  PlaylistAdd,
  Reply,
  ThumbDownAlt,
  ThumbUpAlt,
  Person,
  
  
} from "@material-ui/icons";
import React from "react";
import "./watch.css";
import videoURL from "../../asset/video/vid11.mp4";
import Smallvideo from "../smallvideo/Smallvideo";
import { useHistory } from "react-router-dom";


const Watch = () => {
  const history = useHistory();
const handlePersonRedirect = () => history.push("/PreviewChannel") 

  return (
    <div className="watch">
      <div className="watch_wrap">
        <div className="watch_left">
          <video className="watch_video" autoPlay controls>
            <source src={videoURL} type="video/mp4" />
          </video>

          <div className="watch_leftbtn">
            <h1 className="watch_title">Typing at the comfort of your home</h1>
            <div className="watch_videoinfo">
              <div className="watch_videoinfoleft">
                <p className="videothumb_text">345 views . 25 Sept, 2021</p>
              </div>
              <div className="watch_videoinforight">
                <div className="watch_likecontainer">
                  <div className="watch_likewrap">
                    <div className="watch_likebtncontainer color``gray">
                      <ThumbUpAlt className="watch_icon" />
                      <p>32k</p>
                    </div>
                    <div className="watch_likebtncontainer color gray">
                      <ThumbDownAlt className="watch_icon" />
                      <p>20</p>
                    </div>
                  </div>
                  <div className="watch_likedislike"> </div>
                </div>
                <div className="watch_likebtncontainer color``gray">
                  <Reply className="watch_icon share_icon" />
                  <p>SHARE</p>
                </div>
               
                <div className="watch_likebtncontainer color``gray">
                  <PlaylistAdd className="play.add_icon" />
                  <p>SAVE</p>
                </div>
                <div className="watch_likebtncontainer color``gray">
                  <MoreHoriz className="watch_icon share_icon" />
                  
                </div>
              </div>
            </div>
          </div>
          <div className="watch_details">
            <div className="watch_detailscontainer">
              <div className="videothumb_details watch_personwrap">
                <div className="person">
                  <Person style={{cursor: 'pointer'}}
                   onClick={handlePersonRedirect} />
                </div>

                <div className="videothumb_channel">
                  <h1 className="videothumb_title">WexPro</h1>
                  <p className="videothumb_text watch_subcount">
                    34.5M Subscribers
                  </p>
                </div>
              </div>
              <button
                className="watch_subbtn">
                SUBSCRIBE
              </button>
             
            </div>
            <div className="watch_description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, repellendus sequi eveniet reiciendis itaque eligendi
                est ab accusamus sed consequuntur saepe delectus libero culpa
                accusantium voluptatibus, vel quia! Earum, dolores!
              </p>
              <p className="watch_showmore">SHOW MORE</p>
            </div>
          </div>
        </div>
        <div className="watch_right">
          <Smallvideo  />
          <Smallvideo  />
          <Smallvideo  />
          <Smallvideo  />
          <Smallvideo  />
          <Smallvideo  />
          <Smallvideo  />
          
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Watch;
