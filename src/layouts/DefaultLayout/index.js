import React, { useState } from "react";
import Icon from "../../components/Icon";
import { Link } from "react-router-dom";
import catalog from "./constant";
import ReactPlayer from "react-player";

// fake playlist API data

const playlists = [
  "Morning Commute",
  "Workout Mix",
  "Chill Vibes",
  "Throwback Jams",
  "Study Session",
  "Party Anthems"
];

const DefaultLayout = ({ children }) => {
  const [active, setActive] = useState();
  const prefix = "layout__default--header";

  const handleCatalogOnClick = (id) => {
    setActive(id);
  }
  
  return (
    <>
      <div className={prefix}>
        <div className={`${prefix}--nav`}>
          <Icon name="ArrowBackIos"/>
          <Icon name="ArrowForwardIos"/>
        </div>
        <Link to="/" className={`${prefix}--homebtn`}>
            <Icon name="HomeRoundedIcon" color="#000"/>
            <p>Home</p>
        </Link>
        <div className={`${prefix}--search_bar`}>
            <Icon sx={{fontSize: 35}} name="SearchIcon"/>
            <input className={`${prefix}--search_bar--input`} placeholder="What do you want to listen to?" type='text' name="search" ></input>
        </div >
      </div>
      <div className="layout__default--body">
        <div className="layout__default--body--playlist">
          {catalog.map((item, index) => (
            <div className={`layout__default--body--playlist--item ${active===index && "catalog_active"}`} key={index} onClick={() => handleCatalogOnClick(index)}>
              <Icon name={item.icon} />
              <span>{item.title}</span>
            </div>
          ))}
          {playlists.map((item, index) => (
            <div className={`layout__default--body--playlist--item my_play_list ${active===index+3 && "catalog_active"}`} key={index} onClick={() => handleCatalogOnClick(index+3)}>
              <span>{item}</span>
            </div>
          ))}
        </div >
        <div className="layout__default--body--main">{children}</div >
      </div>
      <div className="layout__default--footer">
      </div>
    </>
  );
};

export default DefaultLayout;
